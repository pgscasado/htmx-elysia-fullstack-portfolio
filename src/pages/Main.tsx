import render, { Children } from '@core/render';
import { Base } from '@pages';
import { Navbar } from '@components/Navbar';
import { IconStack } from '@components/IconStack';
import { Highlight } from '@components/Highlight';
import { Footer } from '../components/Footer';

export default ({ children }: Children ) => (
  <Base>
    <Navbar />
    <main class='flex space-y-10 flex-col mx-auto container w-[90vw] md:w-[70vw] mb-[4.5rem]'>
      <div class='hero h-32 w-full space-x-1 md:px-[20%]'>
        <div class='my-auto text-3xl text-end'>
          oi, meu nome é <Highlight>Pedro</Highlight>!
        </div>
        <div class='h-fit my-auto flex-col'>
          <div class='text-sm'>
            sou desenvolvedor <span class='text-secondary dark:text-primary inline-block'>full-stack</span>
          </div>
          <div class='text-base flex md:grid md:grid-cols-4 justify-items-center max-w-sm [&>i]:duration-300 [&>i]:ease-in-out'>
            <IconStack icons={[
              'typescript',
              'javascript',
              'python',
              'csharp',
              'rust',
              'elixir',
              'ruby',
              'lua',
            ]} class='hover:text-interactive mb-1'/>
          </div>
        </div>
      </div>
      <div class='flex flex-col md:flex-row md:space-x-4 items-center'>
        <div class='text-3xl mb-2 md:mb-0 md:w-[18%]'><Highlight class='font-medium'>Quem</Highlight> sou eu</div>
        <div class='text-base text-justify'>
          Desenvolvedor web full-stack com <Highlight>experiência de {new Date().getFullYear() - 2015} anos</Highlight> em desenvolvimento de aplicações <Highlight>web, mobile e sistemas integrados</Highlight>.
          Atualmente trabalho com desenvolvimento de aplicações web usando Typescript e faço serviços para desenvolver e manter projetos para qualquer necessidade.
          Me chame num dos meus contatos e vamos conversar sobre algo grandioso!
        </div>
        <div class='flex flex-row md:flex-col space-y-2 space-x-2 text-3xl md:text-lg [&>i]:duration-300 [&>i]:ease-in-out [&>i]:cursor-pointer'>
          <span></span>
          <IconStack icons={[
            { 
              icon: 'discord',
              href: 'https://discordapp.com/users/188142088691384330', 
              children: (
                <span class='tooltip group-hover:opacity-100 transition-all left-align md:right-align'>
                  @zeroone ou zero-one#8699
                </span>
              )
            },
            {
              icon: 'github',
              href: 'https://github.com/pgscasado',
              children: (
                <span class="tooltip group-hover:opacity-100">
                  @pgscasado
                </span>
              )
            },
            {
              icon: 'linkedin',
              href: 'https://linkedin.com/in/pgscasado',
              children: (
                <span class="tooltip group-hover:opacity-100">
                  in/pgscasado
                </span>
              )
            },
            {
              icon: 'google',
              href: 'mailto:pgscasado.pessoal@gmail.com',
              children: (
                <span class="tooltip group-hover:opacity-100">
                  pgscasado.pessoal@gmail.com
                </span>
              )
            },
            {
              icon: 'whatsapp',
              href: 'https://api.whatsapp.com/send?phone=5583981661966',
              children: (
                <span class="tooltip group-hover:opacity-100">
                  +55 (83) 98166-1966
                </span>
              )
            }
          ]} class='hover:text-interactive'/>
        </div>
      </div>
      <div class='flex flex-col items-center'>
        <div class='text-3xl mb-2'><Highlight class='font-medium'>Oque</Highlight> eu faço</div>
        <div class='text-base text-justify'>
          O meu foco é o desenvolvimento de <Highlight>Aplicações Web</Highlight> portáveis para Mobile e Desktop. As stacks que eu trabalho garantem a <Highlight>portabilidade e a escalabilidade</Highlight> do seu projeto, além de garantir a segurança e a qualidade do produto em todas as plataformas.
          <div class='w-max mb-2'></div>
          Além disso, eu também faço <Highlight>serviços de manutenção</Highlight> em projetos já existentes, e <Highlight>criação de sistemas integrados</Highlight> para qualquer necessidade. Atualmente também trabalho com modelos de <Highlight>IA generativas e preditivas</Highlight>, e também com sistemas de automação de processos, e tenho experiência com <Highlight interactive class='group  md:border-dotted md:border-b-interactive md:dark:border-b-interactive-600 md:border-b-2'>NLP<span class='md:tooltip left-align md:group-hover:opacity-100 md:max-w-[30vw] md:before:content-[""] before:content-["_"]'>:- Faço uso de Processamento de Linguagem Natural, seja para construir algoritmos de análise usando bibliotecas como "Natural" e "Compromise" ou modelos de IA baseadas em transformadores -:</span></Highlight> em projetos que envolvem IA e análise de sentimento.
        </div>
      </div>
      <div class='flex flex-col md:flex-row md:space-x-4 items-center'>
        <div class='text-3xl mb-2 md:w-[18%] lg:basis-1/4 md:basis-1/3 text-center md:text-left'>Como eu faço <Highlight class='inline-block font-medium'>Back-end Web</Highlight></div>
        <div class='text-base text-justify basis-auto'>
          Desenvolvendo APIs concisas, rápidas e confiáveis para o seu projeto. A prioridade é a qualidade do serviço!
        </div>
        <div class="text-xl mb-2 md:w-18 basis-1/6">
          <Highlight>Stack</Highlight> usada
        </div>
        <div class='grid md:justify-items-end md:basis-1/6 grid-cols-4 gap-4 md:grid-cols-2 md:gap-2 md:flex-col text-xl md:text-2xl [&>i]:duration-300 [&>i]:ease-in-out [&>i]:cursor-pointer'>
          <IconStack
            icons={[
              'denojs',
              'typescript',
              'rust',
              'docker',
              'postgresql',
              'mongodb',
              'redis',
              'lua',
            ]} class='hover:text-interactive'/>
        </div>
      </div>
      <div class='flex flex-col md:flex-row md:space-x-4 items-center'>
        <div class='text-3xl mb-2 lg:basis-1/2 md:basis-1/3 text-center md:text-left'>Como eu faço <Highlight class='inline-block font-medium'>Front-end Web</Highlight></div>
        <div class='text-base text-justify basis-auto'>
          Construindo interfaces acessíveis, bonitas e responsivas. Meu foco é acertar numa boa experiência de usuário, e sempre buscar transformar a interação do usuário em um <Highlight interactive class='group  md:border-dotted md:border-b-interactive md:dark:border-b-interactive-600 md:border-b-2'>diálogo<span class='md:tooltip left-align md:group-hover:opacity-100 md:max-w-[30vw] md:before:content-[""] before:content-["_"]'>:- não queremos interagir sozinhos, certo? <i class='fa-solid fa-people-arrows'></i> -:</span></Highlight>.
        </div>
        <div class="text-xl mb-2 md:w-18 basis-1/6">
          <Highlight>Stack</Highlight> usada
        </div>
        <div class='grid md:  justify-items-end md:basis-1/6 grid-cols-4 gap-4 md:grid-cols-2 md:gap-2 md:flex-col text-xl md:text-2xl [&>i]:duration-300 [&>i]:ease-in-out [&>i]:cursor-pointer'>
          <IconStack
            icons={[
              'html5',
              'css3',
              'typescript',
              'socketio',
              'react',
              'angularjs',
              'tailwindcss',
              'd3js',
            ]} class='hover:text-interactive'/>
        </div>
      </div>
    </main>
    <Footer />
  </Base>
)