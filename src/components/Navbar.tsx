import render, { renderFragment } from '@core/render'
import { Component } from '@root/types/component'
import { Icon } from '@components/Icon'
import { t, localePath, LOCALES, localeLabel, type Locale, type PageId } from '@i18n'

const NavItem: Component<{
  id: PageId
  lang: Locale
  active: boolean
  text: string
}> = (props) => {
  const href = localePath(props.lang, props.id);
  return (
    <li class='item-load' data-active={`${props.active}`}>
      <input class='hidden' name='active' value={`${props.id}`} />
      {/* the text lives inside the link (it has a name) and the padding too (the whole cell is the
          touch target); the current page keeps its real href, marked with aria-current instead */}
      <a class={`block py-3 px-1.5 min-[360px]:px-2 sm:px-3${props.active ? ' pointer-events-none' : ''}`} href={href} {...(props.active ? { 'aria-current': 'page' } : {})} hx-get={href} hx-on='click' hx-swap='outerHTML' hx-target='body' hx-push-url={href} hx-vals="" hx-disable={props.active}>{props.text}</a>
    </li>
  )
}

export const Navbar: Component<{
  lang: Locale
  active?: 'about' | 'contact' | 'projects'
}> = (props) => (
  <>
    <nav class='w-full mb-12 flex justify-between text-sm sm:text-base'>
      <a class='py-3 px-1.5 min-[360px]:px-2 sm:px-3 whitespace-nowrap hover:bg-base-dark-900/10 transition-colors' href={localePath(props.lang)} hx-boost='true'><span class='sm:hidden'>Pedro</span><span class='hidden sm:inline'>Pedro Casado</span></a>
      <ul class='flex'>
        <li class='flex'>
          <button type='button' id='theme-selector' aria-label={t(props.lang, 'nav.themeToggle')} class='py-3 px-1.5 min-[360px]:px-2 sm:px-3 hover:bg-base-dark-900/10 transition-colors'>
            <span class='relative inline-block w-[1em] h-[1em] align-[-0.125em]'>
              <Icon name='moon' class='absolute inset-0 m-auto transition-opacity duration-300 dark:opacity-0'/>
              <Icon name='sun' class='absolute inset-0 m-auto transition-opacity duration-300 opacity-0 dark:opacity-100'/>
            </span>
          </button>
        </li>
        <NavItem id='about' lang={props.lang} active={props.active === 'about'} text={t(props.lang, 'nav.about')} />
        <NavItem id='contact' lang={props.lang} active={props.active === 'contact'} text={t(props.lang, 'nav.contact')} />
        <NavItem id='projects' lang={props.lang} active={props.active === 'projects'} text={t(props.lang, 'nav.projects')} />
        <li class='py-3 px-1.5 min-[360px]:px-2 sm:px-3'>
          <details class='relative'>
            <summary class='list-none cursor-pointer select-none hover:opacity-70 marker:content-none'>{localeLabel[props.lang]}</summary>
            <ul class='absolute right-0 mt-2 bg-base-light dark:bg-base-dark border border-base-dark-900/10 dark:border-base-light-500/10 shadow-md z-10 min-w-[4rem]'>
              {LOCALES.map((l) => {
                const href = localePath(l, props.active ?? '');
                return (
                  <li>
                    <a
                      class={`block px-3 py-2 whitespace-nowrap hover:bg-base-dark-900/10 dark:hover:bg-base-light-500/10${l === props.lang ? ' font-medium text-interactive' : ''}`}
                      href={href}
                      hx-get={href}
                      hx-swap='outerHTML'
                      hx-target='body'
                      hx-push-url={href}
                    >{localeLabel[l]}</a>
                  </li>
                )
              }).join('')}
            </ul>
          </details>
        </li>
      </ul>
    </nav>
    <script>
      {`
        // plain DOM, no htmx: htmx is deferred, so it isn't loaded yet when this runs. Delegated
        // listeners, registered once, so boosted navigations (which re-run this) don't stack them
        if (!window.__navInit) {
          window.__navInit = true
          const toggleTheme = () => document.documentElement.classList.toggle('dark')
          document.addEventListener('click', (e) => {
            if (e.target.closest && e.target.closest('#theme-selector')) toggleTheme()
          })
          document.addEventListener('keyup', (e) => {
            if (e.key === 't' && !e.target.closest('input, textarea, select, [contenteditable]')) toggleTheme()
          })
          // keep hover tooltips inside the viewport: where a label lands depends on
          // how the text wraps, so nudge the tooltip sideways only when it would overflow
          document.addEventListener('mouseover', (e) => {
            const group = e.target.closest && e.target.closest('.group')
            const tip = group && group.querySelector(':scope > span[class*="tooltip"]')
            if (!tip) return
            tip.style.transform = ''
            const r = tip.getBoundingClientRect()
            if (!r.width) return
            const vw = document.documentElement.clientWidth, m = 8
            const shift = r.left < m ? m - r.left : r.right > vw - m ? vw - m - r.right : 0
            if (shift) tip.style.transform = 'translateX(' + shift + 'px)'
          })
        }
      `}
    </script>
  </>
)
