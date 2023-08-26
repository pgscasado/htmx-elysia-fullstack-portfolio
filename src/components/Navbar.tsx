import render, { renderFragment } from '@core/render'
import { Component } from '@root/types/component'

const NavItem: Component<{
  id: endpoint
  href: string
  active: boolean
  text: string
}> = (props) => (
  <li class='py-3 px-3 hover:opacity-100 duration-300 item-load hover:bg-slate-950/5' aria-selected={`${props.active}`}>
    <input class='hidden' name='active' value={`${props.id}`} />
    <a class='cover-parent' href={props.active ? '#' : props.href} hx-get={props.href} hx-on='click' hx-swap='outerHTML' hx-target='body' hx-push-url={props.href} hx-vals="" hx-disable={props.active}></a>
    {props.text}
  </li>
)

type endpoint = 'about' | 'contact' | 'projects';

export const Navbar: Component<{
  active?: endpoint
}> = (props) => (
  <nav class='w-full mb-12 flex justify-between'>
    <a class='p-3' href='/' hx-boost='true'>Pedro Casado</a>
    <ul class='flex [&>*]:opacity-80 hover:transition-opacity'>
      <NavItem id='about' href='/about' active={props.active === 'about'} text='Sobre' />
      <NavItem id='contact' href='/contact' active={props.active === 'contact'} text='Contato' />
      <NavItem id='projects' href='/projects' active={props.active === 'projects'} text='Projetos' />
    </ul>
  </nav>
)