import { Navbar } from '@components';
import { Footer } from '@components/Footer';
import { Highlight } from '@components/Highlight';
import render from '@core/render';
import { Base } from '@pages';

export default () => (
  <Base class='flex flex-col md:h-[90vh]'>
    <Navbar active='projects'/>
    <div class='flex space-y-10 flex-col mx-auto container w-[90vw] md:w-[70vw] mb-[4.5rem]'>
      <div class='text-3xl mb-2 md:mb-0 md:w-max'>Meus <Highlight class='font-medium'>Projetos</Highlight></div>
      <div class='flex flex-col space-y-5'>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'>1.</Highlight></div>
          <div class='text-base text-justify w-full'>
            <a href='https://github.com/pgscasado/htmx-elysia-fullstack/' target='about:blank' class='text-interactive hover:text-interactive-300'>Este portfólio</a> é um projeto em puro TypeScript. Não foi usado nenhum framework de front-end. É um projeto full-stack server-based que usa <a class='text-interactive hover:text-interactive-300' href='https://elysiajs.com/' target='about:blank'>Elysia.js</a>, o renderizador de HTML do framework e <a href='https://htmx.org' target='_blank' rel='noopener noreferrer' class='text-interactive hover:text-interactive-300'>HTMX</a> para interações no front-end. <br/>
            <Highlight>No tempo que você chegou aqui, você não deve ter recebido nem 80 kilobytes de JavaScript!</Highlight>
            <br/>
            Toda a interatividade e simulação de <Highlight>Single Page App</Highlight> é feita através do mecanismo de swap do HTMX, que através dos parâmetros coletados na página, aciona o servidor Elysia para renderizar o HTML e transferir os conteúdos das páginas de forma completa.
            <br/><br/>
            Em comparação: enquanto você carrega um site feito em React baixando no mínimo 2 megabytes de JavaScript (esse é o Bundle), no site deste portfólio você baixa apenas <Highlight>50 kilobytes</Highlight>, vindo do HTMX.
            <br/>
            Além da otimização, o developer experience é comparável ao mesmo do desenvolvimento em React visto que é utilizado <Highlight>JSX</Highlight>, porém numa abordagem mais simplista que evita todo bloat do React ou de frameworks front-end.
          </div>
        </div>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'>2.</Highlight></div>
          <div class='text-base text-justify w-full'>
            Um <a class='text-interactive hover:text-interactive-300' href='' target='about:blank'>Gerenciador de Múltiplos Agentes de Conversação Fluida</a>, integrado a múltiplas <Highlight>LLMs</Highlight>. Basicamente um projeto que unifica meus conhecimentos de <Highlight>back-end</Highlight> e <Highlight>IA</Highlight>.
            <br/>
            Esse é um projeto onde pode ser criado um agente de conversação de forma rápida, onde o sistema gerencia todo o input fornecido para <Highlight>Resource-Augmented Generation (RAG)</Highlight> do agente. 
            <br/>
            É uma versão mais simples do sistema de gerência e deploy de chatbots que desenvolvi para Elife, fruto dos meus estudos em IAs transformers.
            <br/>
            Toda a gerência de criação, segmentação de inputs textuais, geração de embeddings para busca semântica, processamento de NLP (com base nessas embeddings) e conversa com os agentes é feita pelo sistema. O sistema de conversação também dá suporte a transferência de conversa para um agente humano, se integrado por um sistema externo.
            <br/>
            <br/>
            É um projeto back-end, que usa <Highlight><a href='https://expressjs.com' target='about:blank' class='text-interactive hover:text-interactive-300'>Express</a>, <a href='https://zod.dev' target='about:blank' class='text-interactive hover:text-interactive-300'>Zod</a>, <a href='https://xenova.github.io/transformers.js/' target='about:blank' class='text-interactive hover:text-interactive-300'>Transformers.js</a> e <a href='https://www.mongodb.com/' target='about:blank' class='text-interactive hover:text-interactive-300'>MongoDB</a></Highlight>. Usei um padrão arquitetural MVC adaptado para o sistema, o que facilitou bastante a manutenção e a incrementação de features no sistema.
            <br/>
            O sistema também conta com um scheduler simples baseado em cron para ter possibilidade de notificar sistemas integrados ou gerar relatórios periódicos. A criação dos jobs é feita de forma programática a partir de uma função que lê todos os módulos de cron jobs e os registra no scheduler.
          </div>
        </div>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'>3.</Highlight></div>
          <div class='text-base text-justify w-full'>
            O <a class='text-interactive hover:text-interactive-300' href='https://drive.google.com/file/d/1cSyCvpOgIb2VhJZHIWtCOQ_5Xpxm3Zqq/view' target='about:blank'>Sistema de Controle de Protocolos para Administração pública</a> é um projeto que foi fruto de duas bolsas PIBIC-EM e foi finalizado e implantado como fruto do meu trabalho de conclusão de curso no IFPB.
            <br/>
            Nesse projeto pude usar meu conhecimento da época que se baseou nas tecnologias mais novas para a linguagem e estruturas de dados. O sistema precisou lidar com alto tráfego e alto desempenho de processamento devido a alta usabilidade do software. Todos os setores da prefeitura/repartição podem se integrar com a ferramenta para tramitar protocolos de forma rápida e eficiente.
            <br/><br/>
            O sistema foi desenvolvido usando a <Highlight>stack MERN</Highlight>. <Highlight>MongoDB, Express, Angular e Node.js</Highlight>. Na época do desenvolvimento inicial do software pude trabalhar com a versão inicial do Angular.js (1.8.x, beta-2.x), e foi nesse projeto em que pude me aprimorar bastante na minha formação full-stack, pois foi a primeira vez que desenvolvi front-end e back-end integrados para o mesmo projeto, ao mesmo tempo.
          </div>
        </div>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'>4.</Highlight></div>
          <div class='text-base text-justify w-full'>
            O <a class='text-interactive hover:text-interactive-300' href='https://drive.google.com/file/d/1WjjuyG3U9Q7AbcRfIshSUeHDQOqLMs6F/view' target='about:blank'>Sistema de Significação Geral de Palavras on-line</a> foi um projeto no qual fui contemplado com bolsa de iniciação científica PIBIC-EM onde o foco era aglomeração de significados linguísticos.
            <br/>
            Foi um sistema desenvolvido para pesquisa linguística complexa, que coleta informações de vários sites e organiza num relatório mais enxuto automaticamente para o pesquisador. Também teve a ênfase na facilitação da pesquisa para pesquisadores surdos, utilizando o <Highlight>sistema V-Libras</Highlight>, que transforma o relatório gerado num vídeo de um personagem traduzindo o texto para libras.
            <br/>
            <br/>
            Esse projeto foi fundamentalmente um front-end que fazia uma série de <Highlight>rotinas otimizadas de scraping</Highlight> em vários sites. Foi utilizado <Highlight>JavaScript puro</Highlight> para roteamento de páginas e <a href='https://pptr.dev/' target='about:blank'class='text-interactive hover:text-interactive-300'>Puppeteer</a> e <a href='https://cheerio.js.org/' target='about:blank'class='text-interactive hover:text-interactive-300'>Cheerio</a> para scraping.
          </div>
        </div>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'>Mais projetos</Highlight></div>
          <div class='text-lg text-center w-full'>
            Vamos conversar sobre meus outros projetos e novos projetos! Você pode encontrar formas de falar comigo na seção <a href='/contact' class='text-interactive hover:text-interactive-300'>Contato</a>.
          </div>
        </div>
      </div>
    </div>
    <Footer class='mt-auto' currentPage='projects'/>
  </Base>
)