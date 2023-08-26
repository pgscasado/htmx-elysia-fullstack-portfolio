import render, { Children } from '@core/render';
import { Base } from '@pages';
import { Navbar } from '@components/Navbar';
import { Component } from '@root/types/component';

const Highlight: Component<{ children?: string, class?: string }> = ({ children, class: classes }) => (
  <span class={`text-primary-500${classes ? ' '+classes : ''}`}>{children}</span>
)

export default ({ children }: Children ) => (
  <Base>
    <Navbar />
    <main class='flex space-y-10 flex-col mx-auto container w-[90vw] md:w-[70vw]'>
      <div class='hero h-32 w-full space-x-1 md:px-[20%]'>
        <div class='my-auto text-3xl text-end'>
          oi, meu nome é <Highlight>Pedro</Highlight>!
        </div>
        <div class='h-fit my-auto flex-col'>
          <div class='text-sm'>
            sou desenvolvedor <span class='text-primary-500 inline-block'>full-stack</span>
          </div>
          <div class='text-base flex md:grid md:grid-cols-4 justify-items-center text-gray-500 max-w-sm [&>i]:duration-300 [&>i]:ease-in-out'>
            <i class="devicon-typescript-plain hover:text-primary-500"></i>
            <i class="devicon-javascript-plain hover:text-primary-500"></i>
            <i class="devicon-python-plain hover:text-primary-500"></i>
            <i class="devicon-csharp-plain hover:text-primary-500"></i>
            <i class="devicon-rust-plain hover:text-primary-500"></i>
            <i class="devicon-elixir-plain hover:text-primary-500"></i>
            <i class="devicon-ruby-plain hover:text-primary-500"></i>
            <i class='devicon-lua-plain hover:text-primary-500'></i>
          </div>
        </div>
      </div>
      <div class='flex flex-col md:flex-row md:space-x-4 items-center'>
        <div class='text-3xl mb-2 md:mb-0 md:w-[18%]'><Highlight>Quem</Highlight> sou eu</div>
        <div class='text-base text-justify'>
          Desenvolvedor web full-stack com <Highlight>experiência de {new Date().getFullYear() - 2015} anos</Highlight> em desenvolvimento de aplicações <Highlight>web, mobile e sistemas integrados</Highlight>.
          Atualmente trabalho com desenvolvimento de aplicações web usando Typescript e faço serviços para desenvolver e manter projetos para qualquer necessidade.
          Me chame num dos meus contatos e vamos conversar sobre algo grandioso!
        </div>
        <div class='flex flex-row md:flex-col space-y-2 space-x-2 text-3xl md:text-lg [&>i]:duration-300 [&>i]:ease-in-out [&>i]:cursor-pointer'>
          <span></span>
          <a href="https://discordapp.com/users/188142088691384330" class='group'>
            <i class='fi fi-brands-discord hover:text-primary-500'></i>
            <span class='tooltip group-hover:opacity-100 left-align md:right-align'>
              <span class=''>@zeroone ou zero-one#8699</span>
            </span>
          </a>
          <a href='https://github.com/pgscasado' class='group'>
            <i class='fi fi-brands-github hover:text-primary-500'></i>
            <span class="tooltip group-hover:opacity-100">
              <span class=''>@pgscasado</span>
            </span>
          </a>
          <a href="https://linkedin.com/in/pgscasado" class='group'>
            <i class='fi fi-brands-linkedin hover:text-primary-500'></i>
            <span class="tooltip group-hover:opacity-100">
              <span class=''>in/pgscasado</span>
            </span>
          </a>
          <a href="mailto:pgscasado.pessoal@gmail.com" class="group">
            <i class='fi fi-brands-google hover:text-primary-500'></i>
            <span class="tooltip group-hover:opacity-100">
              <span class=''>pgscasado.pessoal@gmail.com</span>
            </span>
          </a>
          <a href="https://api.whatsapp.com/send?phone=5583981661966" class="group">
            <i class='fi fi-brands-whatsapp hover:text-primary-500'></i>
            <span class="tooltip group-hover:opacity-100">
              <span class=''>+55 (83) 98166-1966</span>
            </span>
          </a>
        </div>
      </div>
      <div class='flex flex-col md:space-x-4 items-center'>
        <div class='text-3xl mb-2'><Highlight>Oque</Highlight> eu faço</div>
        <div class='text-base text-justify'>
          O meu foco é o desenvolvimento de <Highlight>Aplicações Web</Highlight> portáveis para Mobile e Desktop. As stacks que eu trabalho garantem a <Highlight>portabilidade e a escalabilidade</Highlight> do seu projeto, além de garantir a segurança e a qualidade do produto em todas as plataformas.
          <div class='w-max mb-2'></div>
          Além disso, eu também faço <Highlight>serviços de manutenção</Highlight> em projetos já existentes, e <Highlight>criação de sistemas integrados</Highlight> para qualquer necessidade. Atualmente também trabalho com modelos de <Highlight>IA generativas e preditivas</Highlight>, e também com sistemas de automação de processos, e tenho experiência com <Highlight class='group  md:border-dotted md:border-b-primary-500 md:border-b-2'>NLP<span class='md:tooltip md:left-align md:group-hover:opacity-100 md:max-w-[30vw]'>:- Faço uso de Processamento de Linguagem Natural, seja para construir algoritmos de análise usando bibliotecas como "Natural" e "Compromise" ou modelos de IA baseadas em transformadores -:</span></Highlight> em projetos que envolvem IA e análise de sentimento.
        </div>
      </div>
      <div class='flex flex-col md:flex-row md:space-x-4 items-center'>
        <div class='text-3xl mb-2 md:w-[18%] lg:basis-1/4 md:basis-1/3 text-center md:text-left'>Como eu faço <Highlight class='inline-block'>Back-end Web</Highlight></div>
        <div class='text-base text-justify basis-auto'>
          Desenvolvendo APIs concisas, rápidas e confiáveis para o seu projeto. A prioridade é a qualidade do serviço!
        </div>
        <div class="text-xl mb-2 md:w-18 basis-1/6">
          <Highlight>Stack</Highlight> usada
        </div>
        <div class='grid md:basis-1/6 grid-cols-4 gap-4 md:grid-cols-2 md:gap-2 md:flex-col text-xl md:text-2xl [&>i]:duration-300 [&>i]:ease-in-out [&>i]:cursor-pointer'>
          <i class='devicon-denojs-plain hover:text-primary-500'></i>
          <i class='devicon-typescript-plain hover:text-primary-500'></i>
          <i class='devicon-rust-plain hover:text-primary-500'></i>
          <i class='devicon-docker-plain hover:text-primary-500'></i>
          <i class='devicon-postgresql-plain hover:text-primary-500'></i>
          <i class='devicon-mongodb-plain hover:text-primary-500'></i>
          <i class='devicon-redis-plain hover:text-primary-500'></i>
          <i class='devicon-lua-plain hover:text-primary-500'></i>
        </div>
      </div>
      <div class='flex flex-col md:flex-row md:space-x-4 items-center'>
        <div class='text-3xl mb-2 md:w-[18%] lg:basis-1/4 md:basis-1/3 text-center md:text-left'>Como eu faço <Highlight class='inline-block'>Front-end</Highlight></div>
        <div class='text-base text-justify basis-auto'>
          Desenvolvendo interfaces simples, bonitas e responsivas para o seu projeto. O foco é acertar numa boa experiência de usuário, e sempre inovar na forma que passamos feedback visual e interativo para o usuário.
        </div>
        <div class="text-xl mb-2 md:w-18 basis-1/6">
          <Highlight>Stack</Highlight> usada
        </div>
        <div class='grid md:basis-1/6 grid-cols-4 gap-4 md:grid-cols-2 md:gap-2 md:flex-col text-xl md:text-2xl [&>i]:duration-300 [&>i]:ease-in-out [&>i]:cursor-pointer'>
          <i class='devicon-html5-plain hover:text-primary-500'></i>
          <i class='devicon-css3-plain hover:text-primary-500'></i>
          <i class='devicon-typescript-plain hover:text-primary-500'></i>
          <i class='devicon-socketio-plain hover:text-primary-500'></i>
          <i class='devicon-react-original hover:text-primary-500'></i>
          <i class='devicon-angularjs-plain hover:text-primary-500'></i>
          <i class="devicon-tailwindcss-plain"></i>
          <i class="devicon-d3js-plain"></i>
        </div>
      </div>
    </main>
  </Base>
)