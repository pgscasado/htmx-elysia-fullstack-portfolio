import render from '@core/render';
import type { Component } from '@root/types/component';

// Soft scroll to a linked section, on every page (Base renders it after the content). A fresh
// load of page#<id> makes the browser jump straight there; this runs while the page is still
// parsing, before that jump, so the page opens at the top and glides down to <id> instead. On the
// way it opens the <details> around (or at) the target without its slide (a height changing
// mid-scroll cancels it) and, once the scroll ends, flashes the closest .glide-row, or the target
// itself (see input.css). Without JS the native jump is untouched, and .glide-row still flashes
// through :target. Scripts htmx swaps in later run after load, so they leave hashes alone.
export const GlideToHash: Component<{}> = () => (
  <script>
    {`
      (() => {
        if (document.readyState !== 'loading') return
        const id = decodeURIComponent(location.hash.slice(1))
        const marker = id && document.getElementById(id)
        if (!marker) return
        // no id, nothing for the browser to jump to; it comes back once the glide starts
        marker.removeAttribute('id')
        const row = marker.closest('.glide-row') || marker
        const go = () => {
          marker.id = id
          row.classList.add('linked')
          const details = marker.closest('details')
          if (details) details.open = true
          const smooth = !matchMedia('(prefers-reduced-motion: reduce)').matches
          const flash = () => row.classList.add('flash')
          if (smooth) {
            addEventListener('scrollend', flash, { once: true })
            setTimeout(flash, 1200)
          } else flash()
          marker.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' })
        }
        // a short beat at the top first, so the glide reads as a move to somewhere
        addEventListener('load', () => setTimeout(go, 400), { once: true })
      })()
    `}
  </script>
);
