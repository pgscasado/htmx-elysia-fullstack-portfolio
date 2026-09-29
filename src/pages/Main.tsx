import render from '@core/render';
import { Base } from '@pages';
import { Navbar } from '@components/Navbar';
import { IconStack } from '@components/IconStack';
import { Highlight } from '@components/Highlight';
import { BinaryWatermark } from '@components/BinaryWatermark';
import { Footer } from '../components/Footer';
import { contacts } from '@components/util/contacts';
import brands from '@components/util/brands';
import { t, localePath, type Locale } from '@i18n';

export default ({ lang }: { lang: Locale }) => {
  const years = new Date().getFullYear() - 2020;
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
          <i class='fa-solid fa-chevron-down'></i>
        </a>
      </section>
      <main id='content' class='flex space-y-10 flex-col mx-auto container w-[90vw] md:w-[70vw] pt-16 mb-[4.5rem]'>
        <div class='flex justify-center'>
          <a
            href={localePath(lang, 'projects')}
            hx-boost='true'
            class='group inline-flex items-center gap-3 border-2 border-secondary dark:border-primary px-8 py-4 text-xl md:text-2xl font-medium text-secondary dark:text-primary hover:border-interactive-600 dark:hover:border-interactive transition-colors'
          >
            {t(lang, 'main.projectsCta')}
            <i class='fa-solid fa-arrow-right transition-transform group-hover:translate-x-1'></i>
          </a>
        </div>
        <div class='flex flex-col md:flex-row md:space-x-4 items-center'>
          <div class='text-3xl mb-2 md:mb-0 md:w-[18%]'><Highlight class='font-medium'>{t(lang, 'main.whoTitleHighlight')}</Highlight>{t(lang, 'main.whoTitleRest')}</div>
          <div class='text-base text-justify'>
            {t(lang, 'main.whoIntroPre')}<Highlight>{t(lang, 'main.whoExperienceHighlight').replace('{years}', String(years))}</Highlight>{t(lang, 'main.whoIntroMid')}<Highlight>{t(lang, 'main.whoDomainsHighlight')}</Highlight>{t(lang, 'main.whoIntroPost')}
          </div>
        </div>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'>{t(lang, 'main.whatTitleHighlight')}</Highlight>{t(lang, 'main.whatTitleRest')}</div>
          <div class='text-base text-justify'>
            {t(lang, 'main.whatP1Pre')}<Highlight>{t(lang, 'main.whatP1Highlight1')}</Highlight>{t(lang, 'main.whatP1Mid')}<Highlight>{t(lang, 'main.whatP1Highlight2')}</Highlight>{t(lang, 'main.whatP1Post')}
            <div class='w-max mb-2'></div>
            {t(lang, 'main.whatP2Pre')}<Highlight>{t(lang, 'main.whatP2Highlight1')}</Highlight>{t(lang, 'main.whatP2Mid1')}<Highlight>{t(lang, 'main.whatP2Highlight2')}</Highlight>{t(lang, 'main.whatP2Mid2')}<Highlight>{t(lang, 'main.whatP2Highlight3')}</Highlight>{t(lang, 'main.whatP2Mid3')}<Highlight interactive class='group  md:border-dotted md:border-b-interactive md:dark:border-b-interactive-600 md:border-b-2'>{t(lang, 'main.whatP2NlpLabel')}<span class='md:tooltip md:hidden md:group-hover:block left-align md:group-hover:opacity-100 md:max-w-[30vw] md:before:content-[""] before:content-["_"]'>{t(lang, 'main.whatP2NlpTooltip')}</span></Highlight>{t(lang, 'main.whatP2Post')}
          </div>
        </div>
        <div class='flex flex-col md:flex-row md:space-x-4 items-center'>
          <div class='text-3xl mb-2 md:w-[18%] lg:basis-1/4 md:basis-1/3 text-center md:text-left'>{t(lang, 'main.backendTitlePre')}<Highlight class='inline-block font-medium'>{t(lang, 'main.backendTitleHighlight')}</Highlight></div>
          <div class='text-base text-justify basis-auto'>
            {t(lang, 'main.backendDesc')}
          </div>
          <div class="text-xl mb-2 md:w-18 basis-1/6">
            <Highlight>{t(lang, 'main.stackUsedHighlight')}</Highlight>{t(lang, 'main.stackUsedRest')}
          </div>
          <div class='grid md:justify-items-end md:basis-1/6 grid-cols-4 gap-4 md:grid-cols-2 md:gap-2 md:flex-col text-xl md:text-2xl [&>i]:duration-300 [&>i]:ease-in-out [&>i]:cursor-pointer'>
            <IconStack
              icons={[
                'nestjs',
                'typescript',
                'denojs',
                'docker',
                'postgresql',
                'mongodb',
                'redis',
                'amazonwebservices',
              ]} class='hover:text-interactive'/>
          </div>
        </div>
        <div class='flex flex-col md:flex-row md:space-x-4 items-center'>
          <div class='text-3xl mb-2 lg:basis-1/2 md:basis-1/3 text-center md:text-left'>{t(lang, 'main.frontendTitlePre')}<Highlight class='inline-block font-medium'>{t(lang, 'main.frontendTitleHighlight')}</Highlight></div>
          <div class='text-base text-justify basis-auto'>
            {t(lang, 'main.frontendDescPre')}<Highlight interactive class='group  md:border-dotted md:border-b-interactive md:dark:border-b-interactive-600 md:border-b-2'>{t(lang, 'main.frontendDialogLabel')}<span class='md:tooltip md:hidden md:group-hover:block left-align md:group-hover:opacity-100 md:max-w-[30vw] md:before:content-[""] before:content-["_"]'>{t(lang, 'main.frontendDialogTooltipPre')}<i class='fa-solid fa-people-arrows'></i>{t(lang, 'main.frontendDialogTooltipPost')}</span></Highlight>{t(lang, 'main.frontendDescPost')}
          </div>
          <div class="text-xl mb-2 md:w-18 basis-1/6">
            <Highlight>{t(lang, 'main.stackUsedHighlight')}</Highlight>{t(lang, 'main.stackUsedRest')}
          </div>
          <div class='grid md:  justify-items-end md:basis-1/6 grid-cols-4 gap-4 md:grid-cols-2 md:gap-2 md:flex-col text-xl md:text-2xl [&>i]:duration-300 [&>i]:ease-in-out [&>i]:cursor-pointer'>
            <IconStack
              icons={[
                'html5',
                'css3',
                'typescript',
                'react',
                'nextjs',
                'angularjs',
                'tailwindcss',
                'googlecloud',
              ]} class='hover:text-interactive'/>
          </div>
        </div>
      </main>
      <Footer lang={lang} class='mt-auto'/>
    </Base>
  );
};
