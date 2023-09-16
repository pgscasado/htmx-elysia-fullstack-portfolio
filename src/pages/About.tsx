import render from '@core/render';
import { Navbar } from '@components';
import { Base } from '@pages';
import { Footer } from '@components/Footer';
import { Highlight } from '@components/Highlight';

export default () => (
  <Base>
    <Navbar active='about'/>
    <div class='flex space-y-10 flex-col mx-auto container w-[90vw] md:w-[70vw] mb-[4.5rem]'>
      <div class='text-3xl mb-2 md:mb-0 md:w-[18%]'>Sobre <Highlight class='font-medium'>Pedro</Highlight></div>
      <div class='text-base text-justify space-y-2'>
        <p>
          Oi! Meu nome é Pedro Casado, e sou um desenvolvedor web de Campina Grande - PB, Brasil. Tenho um background de iniciação científica de 4 anos - de 2015 a 2019 - na comunidade acadêmica do Instituto Federal desenvolvendo projetos de pesquisa, desenvolvimento e extensão nos campos de <Highlight>linguística computacional, análise linguística focada em semântica, visão computacional e nesses todos inclusos o <span class='font-medium'>desenvolvimento web</span></Highlight>. Desde sempre, gostei muito de estudar e usar tecnologia atual para meus projetos e sou feliz que atualmente posso fazer isso meu trabalho. Em 2015 comecei a estudar e usar <Highlight>Angular (beta-2.x)</Highlight> para aplicações web e junto com meus orientadores tive sucesso em vários projetos PIBIC com finalidade educacional. Atualmente trabalho desenvolvendo e mantendo um <Highlight>framework core para chatbots e operadores de canais de comunicação</Highlight> para a <Highlight><a target='_blank' class='hover:text-primary-400 transition-colors' href='https://elife.com.br/'>Elife</a></Highlight> e como freelancer monto aplicações e sistemas web para qualquer necessidade.
        </p>
        <p>
          Eu mantenho alguns side projects em diversas áreas, e tenho alguns pequenos projetos finalizados dos quais o objetivo foi me atualizar nas tecnologias de desenvolvimento mais recentes. Você pode ver alguns deles na página de <Highlight><a hx-boost='true' class='hover:text-primary-400 transition-colors' href='/projects'>projetos</a></Highlight>.
        </p>
        <p>
          Além disso, sou aficcionado por RPG e história de fantasia medieval. Tenho duas calopsitas, <Highlight>Gandalf (de Tolkien)</Highlight> e <Highlight>Leia (de George Lucas)</Highlight>. Gosto muito de jogos souls, roguelikes e action RPGs.
          Meu hobby ser um barman caseiro, e fazer coqueteis e licores para meus pais e irmãos. Também gosto de cozinhar vários tipos de risoto.
        </p>
      </div>
    </div>
    <Footer currentPage='about'/>
  </Base>
)