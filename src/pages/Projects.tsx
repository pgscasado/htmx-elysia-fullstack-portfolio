import render from '@core/render';
import { Navbar } from '@components';
import { Footer } from '@components/Footer';
import { ProjectList } from '@components/ProjectList';
import { Typed } from '@components/Typed';
import { Base } from '@pages';
import type { Tech } from '@components/util/projects';
import { t, localePath, type Locale } from '@i18n';

// `tech` filters the list, `open` renders one project already expanded (/projects/<slug>)
export default ({ lang, tech, open }: { lang: Locale, tech?: Tech, open?: string }) => (
  <Base lang={lang} page='projects' class='flex flex-col min-h-[100svh]'>
    <Navbar lang={lang} active='projects'/>
    <main class='flex-1 mx-auto w-[90vw] md:w-[70vw] pt-[6vh] pb-24'>
      <h1 class='mb-12 font-roboto-serif font-light leading-tight text-[clamp(2.25rem,6vw,3.75rem)] text-secondary dark:text-primary'><Typed text={t(lang, 'projects.title')}/></h1>
      <ProjectList lang={lang} tech={tech} open={open}/>
      <p class='mt-20 opacity-80'>{t(lang, 'projects.moreText')} <a hx-boost='true' class='text-link' href={localePath(lang, 'contact')}>{t(lang, 'projects.moreLink')}</a></p>
    </main>
    <Footer lang={lang} currentPage='projects'/>
    <script>
      {`
        // The JavaScript readout in the portfolio row. The server renders its estimate (in
        // data-js-kb too); on load it's swapped for what this visit actually received: script
        // files as the browser measured them, plus the inline scripts. Cached files can report
        // 0 bytes, in which case the estimate stays. Each time the page is shown, the number
        // counts up from zero so it gets noticed; a filter swap just sets it.
        if (!window.__jsKb) {
          const fmt = (kb) => new Intl.NumberFormat(document.documentElement.lang, { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(kb) + ' KB'
          const measure = () => {
            const files = performance.getEntriesByType('resource').filter((e) => e.initiatorType === 'script')
            if (!files.length || files.some((e) => !(e.encodedBodySize || e.transferSize))) return null
            let bytes = files.reduce((n, e) => n + (e.encodedBodySize || e.transferSize), 0)
            for (const s of document.scripts) if (!s.src && (!s.type || /javascript|module/.test(s.type))) bytes += s.text.length
            return bytes / 1024
          }
          window.__jsKb = () => {
            const kb = measure()
            for (const el of document.querySelectorAll('[data-js-kb]')) {
              if (kb !== null) el.dataset.jsKb = kb
              if (!el.__counting) el.textContent = fmt(+el.dataset.jsKb)
            }
          }
          // eases out over 1.4s, reading the target every frame so a measurement landing
          // mid-count just retargets it
          window.__jsKbCount = () => {
            if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
            for (const el of document.querySelectorAll('[data-js-kb]')) {
              el.__counting = true
              const start = performance.now()
              const tick = (now) => {
                const p = Math.min(1, (now - start) / 1400)
                el.textContent = fmt(+el.dataset.jsKb * (1 - (1 - p) ** 3))
                if (p < 1) requestAnimationFrame(tick)
                else el.__counting = false
              }
              tick(start)
            }
          }
          addEventListener('load', window.__jsKb)
          document.addEventListener('htmx:afterSettle', window.__jsKb)
        }
        window.__jsKbCount()
      `}
    </script>
  </Base>
)
