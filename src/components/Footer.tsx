import render, { Children } from '@core/render';
import type { Component } from '@root/types/component';

export const Footer: Component<{class?: string, currentPage?: string}> = ({ class: classes, currentPage }) => (
  <div class={`${classes ? classes : ''} mx-auto text-center md:text-left flex flex-col-reverse md:flex-row md:w-[70vw] md:justify-between pb-8`}>
    <div class='col-span-2 my-auto text-sm order-1'>
      Website feito com <span class='text-interactive'><i class='fa-solid fa-heart'></i></span> por <a class='text-interactive hover:text-interactive-300 transition-colors' href='/about'>Pedro Casado</a><br/>
      &copy; {new Date().getFullYear()} 
    </div>
    <ul class='my-auto text-sm md:text-start -order-first md:order-none md:grid md:grid-cols-2 md:gap-x-3'>
      <li class='col-span-2'>Esse é o fim da página, aqui estão alguns links:</li>
      <li><a hx-boost='true' class='text-interactive hover:text-interactive-300 transition-colors' href='/about'>Sobre mim {currentPage === 'about' ? '(Você está aqui)' : ''}</a></li>
      <li><a hx-boost='true' target='_blank' class='text-interactive hover:text-interactive-300 transition-colors' href='https://github.com/pgscasado'>Meu Github</a></li>
      <li><a hx-boost='true' class='text-interactive hover:text-interactive-300 transition-colors' href='/contact'>Como falar comigo {currentPage === 'contact' ? '(Você está aqui)' : ''}</a></li>
      <li><a hx-boost='true' class='text-interactive hover:text-interactive-300 transition-colors' href='/projects'>Alguns projetos {currentPage === 'projects' ? '(Você está aqui)' : ''}</a></li>
    </ul>
  </div>
)