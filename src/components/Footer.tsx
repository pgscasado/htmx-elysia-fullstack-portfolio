import render, { Children } from '@core/render';
import type { Component } from '@root/types/component';

export const Footer: Component<{class?: string}> = ({ class: classes }) => (
  <div class={`${classes ? classes : ''} h-20 px-6 w-full mx-auto text-center md:text-left md:mx-0 flex flex-col-reverse md:flex-row md:space-x-4`}>
    <div class='col-span-2 my-auto text-sm md:basis-1/2'>
      Website feito com <span class='text-interactive'><i class='fa-solid fa-heart'></i></span> por <a class='text-interactive hover:text-interactive-300 transition-colors' href='/about'>Pedro Casado</a><br/>
      &copy; 2023 
    </div>
    <ul class='my-auto text-sm md:text-start -order-1 md:order-none md:basis-1/2 md:grid md:grid-cols-2'>
      <li class='col-span-2'>Esse é o fim da página, aqui estão alguns links:</li>
      <li><a class='text-interactive hover:text-interactive-300 transition-colors' href='/about'>Sobre mim</a></li>
      <li><a class='text-interactive hover:text-interactive-300 transition-colors' href='/about'>Meu Github</a></li>
      <li><a class='text-interactive hover:text-interactive-300 transition-colors' href='/contact'>Como falar comigo</a></li>
      <li><a class='text-interactive hover:text-interactive-300 transition-colors' href='/projects'>Alguns projetos</a></li>
    </ul>
    <div class='my-auto text-sm text-end'>
    </div>
  </div>
)