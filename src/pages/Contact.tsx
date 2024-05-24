import render from '@core/render';
import { Navbar } from '@components/Navbar';
import { Base } from '@pages';
import { Footer } from '@components/Footer';
import { Highlight } from '@components/Highlight';

export default () => (
  <Base class='flex flex-col md:h-[90vh]'>
    <Navbar active='contact'/>
    <div class='flex space-y-10 flex-col mx-auto container w-[90vw] md:w-[70vw] mb-[4.5rem]'>
      <div class='text-3xl mb-2 md:mb-0 md:w-max'>Entre em <Highlight class='font-medium'>Contato</Highlight></div>
      <div class='text-base text-justify space-y-2'>
        <p>
          Se você deseja entrar em contato comigo, aqui estão algumas maneiras de fazê-lo. Seja para discutir um <Highlight>projeto</Highlight>, uma <Highlight>oportunidade de emprego</Highlight> ou simplesmente para <Highlight>bater um papo</Highlight> sobre tecnologia, ficarei feliz em responder.
        </p>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'><i class='text-blue-500 fi fi-brands-linkedin text-sm align-middle'></i> Linkedin</Highlight></div>
          <div class='text-base text-justify w-full'>
            Conecte-se comigo no LinkedIn para acompanhar minhas atualizações profissionais, compartilhar ideias e construir uma rede de contatos:
            <br/>
            <a href='https://linkedin.com/in/pgscasado' target='about:blank' class='text-interactive hover:text-interactive-300'>linkedin.com/in/pgscasado</a>
          </div>
        </div>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'><i class='text-red-500 fi fi-brands-google text-sm align-middle'></i> Email</Highlight></div>
          <div class='text-base text-justify w-full'>
            Para assuntos mais formais ou detalhados, você pode me enviar um email. Eu respondo rapidamente e estou sempre aberto a novas oportunidades e colaborações:
            <br/>
            <a href='mailto:pgscasado.pessoal@gmail.com' target='about:blank' class='text-interactive hover:text-interactive-300'>pgscasado.pessoal@gmail.com</a>
          </div>
        </div>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'><i class='text-green-500 fi fi-brands-whatsapp text-sm align-middle'></i> Telefone</Highlight></div>
          <div class='text-base text-justify w-full'>
            Prefere um contato mais direto? Você pode me ligar ou enviar uma mensagem de texto (WhatsApp ou Telegram) no seguinte número:
            <br/>
            <a href='https://api.whatsapp.com/send?phone=5583981661966' target='about:blank' class='text-interactive hover:text-interactive-300'>+55 (83) 98166-1966</a>
          </div>
        </div>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'><i class='text-slate-500 fi fi-brands-discord text-sm align-middle'></i> Discord</Highlight></div>
          <div class='text-base text-justify w-full'>
            Para discussões mais informais e rápidas, você pode me encontrar no Discord. Adicione-me para conversar sobre projetos, tirar dúvidas ou simplesmente para trocar ideias sobre desenvolvimento web e desenvolvimento de bots Discord:
            <br/>
            <a href='https://discord.com/users/188142088691384330' target='about:blank' class='text-interactive hover:text-interactive-300'>@zeroone ou zero-one#8699</a>
          </div>
        </div>
      </div>
    </div>
    <Footer class='mt-auto' currentPage='contact'/>
  </Base>
)