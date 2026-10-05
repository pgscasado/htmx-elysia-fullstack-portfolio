import render from '@core/render';
import { Base } from '@pages';
import { Navbar } from '@components/Navbar';
import { IconRow } from '@components/IconRow';
import techs from '@components/util/techs';
import { techName, type Tech } from '@components/util/projects';
import { Highlight } from '@components/Highlight';
import { Icon } from '@components/Icon';
import { BinaryWatermark } from '@components/BinaryWatermark';
import { Footer } from '../components/Footer';
import { contacts } from '@components/util/contacts';
import brands from '@components/util/brands';
import { t, localePath, type Locale } from '@i18n';

export default ({ lang }: { lang: Locale }) => {
  const stacks: [string, Tech[]][] = [
    ['Back-end', ['nestjs', 'typescript', 'denojs', 'docker', 'postgresql', 'mongodb', 'redis', 'amazonwebservices']],
    ['Front-end', ['html5', 'css3', 'typescript', 'react', 'nextjs', 'angularjs', 'tailwindcss', 'googlecloud']],
  ];
  return (
    <Base lang={lang} page='' class='flex flex-col'>
      <section class='relative isolate overflow-hidden min-h-[100svh] flex flex-col'>
        <BinaryWatermark />
        <Navbar lang={lang} />
        {/* -mt-12 cancels the navbar's bottom margin so the block sits at the true center */}
        <div class='flex-1 -mt-12 px-4 flex flex-col items-center justify-center text-center'>
          <p class='font-source-code text-sm md:text-base opacity-70 mb-3'>{t(lang, 'main.heroGreeting')}</p>
          <h1 class='font-roboto-serif font-light text-5xl sm:text-6xl md:text-7xl'>Pedro Casado</h1>
          <p class='mt-4 text-xl md:text-2xl'>
            {t(lang, 'main.heroRolePre')}<Highlight>{t(lang, 'main.heroRoleHighlight')}</Highlight>{t(lang, 'main.heroRolePost')}
          </p>
          <ul class='mt-10 flex items-center gap-6 text-2xl md:text-3xl'>
            {contacts.map((c) => (
              <li>
                <a
                  href={c.href}
                  aria-label={c.label}
                  class='group hover:text-interactive transition-colors'
                  {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <i class={brands[c.icon]}></i>
                  <span class='tooltip group-hover:opacity-100'>{c.label}</span>
                </a>
              </li>
            )).join('')}
          </ul>
        </div>
        {/* plain anchor + scroll-smooth on <html>: #content starts right at 100svh, so no JS needed */}
        <a
          href='#content'
          aria-label={t(lang, 'main.scrollDown')}
          class='mx-auto mb-6 p-2 text-2xl opacity-60 hover:opacity-100 hover:text-interactive transition-[color,opacity] motion-safe:animate-soft-bounce'
        >
          <Icon name='chevron-down'/>
        </a>
      </section>
      <main id='content' class='mx-auto w-[90vw] md:w-[70vw] pt-24 pb-24 flex flex-col gap-14'>
        <h2 class='sr-only'>{t(lang, 'main.stackTitle')}</h2>
        {stacks.map(([label, icons]) => (
          <section class='grid md:grid-cols-[9rem_1fr] gap-x-8 gap-y-4 items-start'>
            <h3 class='opacity-60 md:pt-1'>{label}</h3>
            <IconRow compact class='text-3xl' items={icons.map((i) => ({ icon: techs[i], caption: techName[i] ?? i }))}/>
          </section>
        )).join('')}
        <div class='pt-6'>
          <a
            href={localePath(lang, 'projects')}
            hx-boost='true'
            class='group inline-flex items-center gap-3 border-2 border-secondary dark:border-primary px-8 py-4 text-xl md:text-2xl font-medium text-secondary dark:text-primary hover:border-interactive-600 dark:hover:border-interactive transition-colors'
          >
            {t(lang, 'main.projectsCta')}
            <Icon name='arrow-right' class='transition-transform group-hover:translate-x-1'/>
          </a>
        </div>
      </main>
      <Footer lang={lang}/>
    </Base>
  );
};
