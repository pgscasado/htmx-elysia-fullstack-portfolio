import render, { renderFragment } from '@core/render'
import { Component } from '@root/types/component'
import { t, localePath, LOCALES, localeLabel, type Locale, type PageId } from '@i18n'

const NavItem: Component<{
  id: PageId
  lang: Locale
  active: boolean
  text: string
}> = (props) => {
  const href = localePath(props.lang, props.id);
  return (
    <li class='py-3 px-1.5 min-[360px]:px-2 sm:px-3 item-load' aria-selected={`${props.active}`}>
      <input class='hidden' name='active' value={`${props.id}`} />
      <a class='cover-parent' href={props.active ? '#' : href} hx-get={href} hx-on='click' hx-swap='outerHTML' hx-target='body' hx-push-url={href} hx-vals="" hx-disable={props.active}></a>
      {props.text}
    </li>
  )
}

export const Navbar: Component<{
  lang: Locale
  active?: 'about' | 'contact' | 'projects'
}> = (props) => (
  <>
    <nav class='w-full mb-12 flex justify-between text-sm sm:text-base'>
      <a class='py-3 px-1.5 min-[360px]:px-2 sm:px-3 whitespace-nowrap hover:bg-base-dark-900/10 duration-150' href={localePath(props.lang)} hx-boost='true'><span class='sm:hidden'>Pedro</span><span class='hidden sm:inline'>Pedro Casado</span></a>
      <ul class='flex'>
        <li class='group py-3 px-1.5 min-[360px]:px-2 sm:px-3 hover:opacity-100 hover:bg-base-dark-900/10 duration-150 cursor-pointer' id='theme-selector'>
          <i class="transition-all duration-150 ease-in-out fa-solid fa-moon visible w-max dark:collapse dark:w-0 dark:opacity-0 opacity-100"></i>
          <i class="transition-colors duration-150 ease-in-out fa-solid fa-sun collapse w-0 opacity-0 dark:visible dark:w-max dark:opacity-100"></i>
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
        htmx.on('#theme-selector', 'click', function (e) {
          htmx.toggleClass(htmx.find('html'), 'dark')
        })
        document.addEventListener('keyup', () => {
          console.log('key pressed')
          if (event.key === 't') {
            htmx.toggleClass(htmx.find('html'), 'dark')
          }
        })
        // keep hover tooltips inside the viewport: where a label lands depends on
        // how the text wraps, so nudge the tooltip sideways only when it would overflow
        if (!window.__tooltipClamp) {
          window.__tooltipClamp = true
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
