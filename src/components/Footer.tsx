import render, { Children } from '@core/render';
import type { Component } from '@root/types/component';

export const Footer: Component<{class?: string, currentPage?: string}> = ({ class: classes, currentPage }) => (
  <div class={`${classes ? classes : ''} h-20 px-6 w-full mx-auto text-center md:text-left md:mx-0 flex flex-col-reverse md:flex-row md:space-x-4`}>
    <div class='col-span-2 my-auto text-sm md:basis-1/2 order-1'>
      Website feito com <span class='text-interactive'><i class='fa-solid fa-heart'></i></span> por <a class='text-interactive hover:text-interactive-300 transition-colors' href='/about'>Pedro Casado</a><br/>
      &copy; 2023 
    </div>
    <ul class='my-auto text-sm md:text-start -order-first md:order-none md:basis-1/2 md:grid md:grid-cols-2'>
      <li class='col-span-2'>Esse é o fim da página, aqui estão alguns links:</li>
      <li><a hx-boost='true' class='text-interactive hover:text-interactive-300 transition-colors' href='/about'>Sobre mim {currentPage === 'about' ? '(Você está aqui)' : ''}</a></li>
      <li><a hx-boost='true' target='_blank' class='text-interactive hover:text-interactive-300 transition-colors' href='https://github.com/pgscasado'>Meu Github</a></li>
      <li><a hx-boost='true' class='text-interactive hover:text-interactive-300 transition-colors' href='/contact'>Como falar comigo {currentPage === 'contact' ? '(Você está aqui)' : ''}</a></li>
      <li><a hx-boost='true' class='text-interactive hover:text-interactive-300 transition-colors' href='/projects'>Alguns projetos {currentPage === 'projects' ? '(Você está aqui)' : ''}</a></li>
    </ul>
    <div class='my-auto text-sm text-end'>
    </div>
  </div>
)