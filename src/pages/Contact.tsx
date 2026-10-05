import render from '@core/render';
import { Navbar } from '@components/Navbar';
import { Base } from '@pages';
import { Footer } from '@components/Footer';
import { IconRow } from '@components/IconRow';
import brands from '@components/util/brands';
import { contact, contacts } from '@components/util/contacts';
import { t, type Locale } from '@i18n';

// One dominant element (the email, which is the channel to prefer) and the rest as a quiet icon
// row. No copy: the channels explain themselves. Hover/caption behavior lives in `.icon-row`
// (input.css), CSS only.
export default ({ lang }: { lang: Locale }) => {
  const [user, domain] = contact.email.label.split('@');
  return (
    <Base lang={lang} page='contact' class='flex flex-col min-h-[100svh]'>
      <Navbar lang={lang} active='contact'/>
      <main class='flex-1 flex flex-col justify-center mx-auto container w-[90vw] md:w-[70vw] pb-[12vh]'>
        <h1 class='sr-only'>{t(lang, 'nav.contact')}</h1>
        {/* the break opportunity sits before the @, so a narrow screen wraps to user / @domain */}
        <a
          href={contact.email.href}
          class='motion-safe:animate-reveal w-fit font-roboto-serif font-light leading-tight text-[clamp(2rem,8vw,3.75rem)] text-secondary dark:text-primary hover:text-interactive-600 dark:hover:text-interactive transition-colors'
        >{user}<wbr/>{`@${domain}`}</a>
        <IconRow class='mt-12 md:mt-16 text-3xl' items={contacts.filter((c) => c !== contact.email).map((c) => ({
          icon: brands[c.icon], caption: c.label, srPrefix: c.name, href: c.href, external: c.external,
        }))}/>
      </main>
      <Footer lang={lang} currentPage='contact'/>
    </Base>
  )
}
