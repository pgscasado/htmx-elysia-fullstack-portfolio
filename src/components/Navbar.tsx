import render, { renderFragment } from '@core/render'
import { Component } from '@root/types/component'

const NavItem: Component<{
  id: endpoint
  href: string
  active: boolean
  text: string
}> = (props) => (
  <li class='py-3 px-3 item-load' aria-selected={`${props.active}`}>
    <input class='hidden' name='active' value={`${props.id}`} />
    <a class='cover-parent' href={props.active ? '#' : props.href} hx-get={props.href} hx-on='click' hx-swap='outerHTML' hx-target='body' hx-push-url={props.href} hx-vals="" hx-disable={props.active}></a>
    {props.text}
  </li>
)

type endpoint = 'about' | 'contact' | 'projects';

export const Navbar: Component<{
  active?: endpoint
}> = (props) => (
  <>
    <nav class='w-full mb-12 flex justify-between'>
      <a class='p-3 hover:bg-base-dark-900/10 duration-150' href='/' hx-boost='true'>Pedro Casado</a>
      <ul class='flex'>
        <li class='group py-3 px-3 hover:opacity-100 hover:bg-base-dark-900/10 duration-150 cursor-pointer' id='theme-selector'>
          <i class="transition-all duration-150 ease-in-out fa-solid fa-moon visible w-max dark:collapse dark:w-0 dark:opacity-0 opacity-100"></i>
          <i class="transition-colors duration-150 ease-in-out fa-solid fa-sun collapse w-0 opacity-0 dark:visible dark:w-max dark:opacity-100"></i>
        </li>
        <NavItem id='about' href='/about' active={props.active === 'about'} text='Sobre' />
        <NavItem id='contact' href='/contact' active={props.active === 'contact'} text='Contato' />
        <NavItem id='projects' href='/projects' active={props.active === 'projects'} text='Projetos' />
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
      `}
    </script>
  </>
)