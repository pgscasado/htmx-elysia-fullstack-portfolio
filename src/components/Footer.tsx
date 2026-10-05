import render from '@core/render';
import type { Component } from '@root/types/component';
import { ContactBar } from '@components/ContactBar';
import { Icon } from '@components/Icon';
import { t, localePath, type Locale } from '@i18n';

// One quiet line. Pages other than the main one (which has its own contact icons) and the
// contact page (which is the contacts) get the contact icons on it.
export const Footer: Component<{ lang: Locale, class?: string, currentPage?: string }> = ({ lang, class: classes, currentPage }) => (
  <footer class={`mx-auto w-[90vw] md:w-[70vw] py-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 text-sm${classes ? ' ' + classes : ''}`}>
    {currentPage && currentPage !== 'contact' ? <ContactBar lang={lang}/> : '<span></span>'}
    <span>
      <span class='opacity-70'>{t(lang, 'footer.madeWithPre')}</span><span class='text-interactive-600 dark:text-interactive'><Icon name='heart'/></span><span class='opacity-70'>{t(lang, 'footer.madeWithPost')}</span><a class='text-link' href={localePath(lang, 'about')}>Pedro Casado</a>
      <span class='opacity-60'> &copy; {String(new Date().getFullYear())}</span>
    </span>
  </footer>
)
