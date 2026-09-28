import render, { Children } from '@core/render';
import type { Component } from '@root/types/component';
import { ContactBar } from '@components/ContactBar';
import { t, localePath, type Locale } from '@i18n';

// Pages other than the main one (which has its own contact icons) and the
// contact page (which lists them in full) get a contact bar above the links.
export const Footer: Component<{ lang: Locale, class?: string, currentPage?: string }> = ({ lang, class: classes, currentPage }) => (
  <div class={`${classes ? classes : ''} mx-auto md:w-[70vw] pb-8`}>
    {currentPage && currentPage !== 'contact'
      ? <ContactBar lang={lang} class='mb-6 pt-6 border-t border-base-dark-900/10 dark:border-base-light-500/10'/>
      : ''}
    <div class='text-center md:text-left flex flex-col-reverse md:flex-row md:justify-between'>
      <div class='col-span-2 my-auto text-sm order-1'>
        {t(lang, 'footer.madeWithPre')}<span class='text-interactive'><i class='fa-solid fa-heart'></i></span>{t(lang, 'footer.madeWithPost')}<a class='text-interactive hover:text-interactive-300 transition-colors' href={localePath(lang, 'about')}>Pedro Casado</a><br/>
        &copy; {new Date().getFullYear()}
      </div>
      <ul class='my-auto text-sm md:text-start -order-first md:order-none md:grid md:grid-cols-2 md:gap-x-3'>
        <li class='col-span-2'>{t(lang, 'footer.linksIntro')}</li>
        <li><a hx-boost='true' class='text-interactive hover:text-interactive-300 transition-colors' href={localePath(lang, 'about')}>{t(lang, 'footer.aboutLink')} {currentPage === 'about' ? t(lang, 'footer.youAreHere') : ''}</a></li>
        <li><a hx-boost='true' target='_blank' class='text-interactive hover:text-interactive-300 transition-colors' href='https://github.com/pgscasado'>{t(lang, 'footer.githubLink')}</a></li>
        <li><a hx-boost='true' class='text-interactive hover:text-interactive-300 transition-colors' href={localePath(lang, 'contact')}>{t(lang, 'footer.contactLink')} {currentPage === 'contact' ? t(lang, 'footer.youAreHere') : ''}</a></li>
        <li><a hx-boost='true' class='text-interactive hover:text-interactive-300 transition-colors' href={localePath(lang, 'projects')}>{t(lang, 'footer.projectsLink')} {currentPage === 'projects' ? t(lang, 'footer.youAreHere') : ''}</a></li>
      </ul>
    </div>
  </div>
)
