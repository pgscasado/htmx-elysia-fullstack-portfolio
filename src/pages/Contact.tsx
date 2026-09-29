import render from '@core/render';
import { Navbar } from '@components/Navbar';
import { Base } from '@pages';
import { Footer } from '@components/Footer';
import { Highlight } from '@components/Highlight';
import { contact } from '@components/util/contacts';
import { t, type Locale } from '@i18n';

export default ({ lang }: { lang: Locale }) => (
  <Base lang={lang} class='flex flex-col md:h-[90vh]'>
    <Navbar lang={lang} active='contact'/>
    <div class='flex space-y-10 flex-col mx-auto container w-[90vw] md:w-[70vw] mb-[4.5rem]'>
      <div class='text-3xl mb-2 md:mb-0 md:w-max'>{t(lang, 'contact.titlePre')}<Highlight class='font-medium'>{t(lang, 'contact.titleHighlight')}</Highlight></div>
      <div class='text-base text-justify space-y-2'>
        <p>
          {t(lang, 'contact.introPre')}<Highlight>{t(lang, 'contact.introHighlight1')}</Highlight>{t(lang, 'contact.introMid1')}<Highlight>{t(lang, 'contact.introHighlight2')}</Highlight>{t(lang, 'contact.introMid2')}<Highlight>{t(lang, 'contact.introHighlight3')}</Highlight>{t(lang, 'contact.introPost')}
        </p>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'><i class='text-blue-500 fi fi-brands-linkedin text-sm align-middle'></i> {t(lang, 'contact.linkedinTitle')}</Highlight></div>
          <div class='text-base text-justify w-full'>
            {t(lang, 'contact.linkedinDesc')}
            <br/>
            <a href={contact.linkedin.href} target='about:blank' class='text-interactive hover:text-interactive-300'>{contact.linkedin.href.replace('https://', '')}</a>
          </div>
        </div>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'><i class='text-red-500 fi fi-brands-google text-sm align-middle'></i> {t(lang, 'contact.emailTitle')}</Highlight></div>
          <div class='text-base text-justify w-full'>
            {t(lang, 'contact.emailDesc')}
            <br/>
            <a href={contact.email.href} target='about:blank' class='text-interactive hover:text-interactive-300'>{contact.email.label}</a>
          </div>
        </div>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'><i class='text-green-500 fi fi-brands-whatsapp text-sm align-middle'></i> {t(lang, 'contact.phoneTitle')}</Highlight></div>
          <div class='text-base text-justify w-full'>
            {t(lang, 'contact.phoneDesc')}
            <br/>
            <a href={contact.whatsapp.href} target='about:blank' class='text-interactive hover:text-interactive-300'>{contact.whatsapp.label}</a>
          </div>
        </div>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'><i class='text-slate-500 fi fi-brands-discord text-sm align-middle'></i> {t(lang, 'contact.discordTitle')}</Highlight></div>
          <div class='text-base text-justify w-full'>
            {t(lang, 'contact.discordDesc')}
            <br/>
            <a href={contact.discord.href} target='about:blank' class='text-interactive hover:text-interactive-300'>{contact.discord.label}</a>
          </div>
        </div>
      </div>
    </div>
    <Footer lang={lang} class='mt-auto' currentPage='contact'/>
  </Base>
)
