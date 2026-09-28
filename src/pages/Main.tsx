import render from '@core/render';
import { Base } from '@pages';
import { Navbar } from '@components/Navbar';
import { IconStack } from '@components/IconStack';
import { Highlight } from '@components/Highlight';
import { Footer } from '../components/Footer';
import { contacts } from '@components/util/contacts';
import { t, localePath, type Locale } from '@i18n';

export default ({ lang }: { lang: Locale }) => {
  const years = new Date().getFullYear() - 2020;
  return (
    <Base lang={lang} class='flex flex-col'>
      <Navbar lang={lang} />
      <main class='flex space-y-10 flex-col mx-auto container w-[90vw] md:w-[70vw] mb-[4.5rem]'>
        <div class='hero h-32 w-full space-x-1 md:px-[20%]'>
          <div class='my-auto text-3xl text-end'>
            {t(lang, 'main.heroGreetingPre')}<Highlight>Pedro</Highlight>{t(lang, 'main.heroGreetingPost')}
          </div>
          <div class='h-fit my-auto flex-col'>
            <div class='text-sm'>
              {t(lang, 'main.heroRole')}<span class='text-secondary dark:text-primary inline-block'>{t(lang, 'main.heroRoleHighlight')}</span>
            </div>
            <div class='text-base flex md:grid md:grid-cols-4 justify-items-center max-w-sm [&>i]:duration-300 [&>i]:ease-in-out'>
              <IconStack icons={[
                'typescript',
                'javascript',
                'nodejs',
                'nextjs',
                'python',
                'rust',
                'lua',
                'docker',
              ]} class='hover:text-interactive mb-1'/>
            </div>
          </div>
        </div>
        <div class='flex justify-center'>
          <a
            href={localePath(lang, 'projects')}
            hx-boost='true'
            class='group inline-flex items-center gap-3 rounded-xl bg-interactive px-8 py-4 text-xl md:text-2xl font-medium text-base-dark shadow-lg shadow-interactive/20 hover:bg-interactive-400 hover:shadow-interactive/40 transition-all'
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
          <div class='flex flex-row md:flex-col space-y-2 space-x-2 text-3xl md:text-lg [&>i]:duration-300 [&>i]:ease-in-out [&>i]:cursor-pointer'>
            <span></span>
            <IconStack icons={contacts.map((c, i) => ({
              icon: c.icon,
              href: c.href,
              children: (
                // the first icon sits at the left edge on mobile, so its tooltip opens rightwards there
                <span class={`tooltip group-hover:opacity-100${i === 0 ? ' transition-all left-align md:right-align' : ''}`}>
                  {c.label}
                </span>
              )
            }))} class='hover:text-interactive'/>
          </div>
        </div>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'>{t(lang, 'main.whatTitleHighlight')}</Highlight>{t(lang, 'main.whatTitleRest')}</div>
          <div class='text-base text-justify'>
            {t(lang, 'main.whatP1Pre')}<Highlight>{t(lang, 'main.whatP1Highlight1')}</Highlight>{t(lang, 'main.whatP1Mid')}<Highlight>{t(lang, 'main.whatP1Highlight2')}</Highlight>{t(lang, 'main.whatP1Post')}
            <div class='w-max mb-2'></div>
            {t(lang, 'main.whatP2Pre')}<Highlight>{t(lang, 'main.whatP2Highlight1')}</Highlight>{t(lang, 'main.whatP2Mid1')}<Highlight>{t(lang, 'main.whatP2Highlight2')}</Highlight>{t(lang, 'main.whatP2Mid2')}<Highlight>{t(lang, 'main.whatP2Highlight3')}</Highlight>{t(lang, 'main.whatP2Mid3')}<Highlight interactive class='group  md:border-dotted md:border-b-interactive md:dark:border-b-interactive-600 md:border-b-2'>{t(lang, 'main.whatP2NlpLabel')}<span class='md:tooltip left-align md:group-hover:opacity-100 md:max-w-[30vw] md:before:content-[""] before:content-["_"]'>{t(lang, 'main.whatP2NlpTooltip')}</span></Highlight>{t(lang, 'main.whatP2Post')}
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
            {t(lang, 'main.frontendDescPre')}<Highlight interactive class='group  md:border-dotted md:border-b-interactive md:dark:border-b-interactive-600 md:border-b-2'>{t(lang, 'main.frontendDialogLabel')}<span class='md:tooltip left-align md:group-hover:opacity-100 md:max-w-[30vw] md:before:content-[""] before:content-["_"]'>{t(lang, 'main.frontendDialogTooltipPre')}<i class='fa-solid fa-people-arrows'></i>{t(lang, 'main.frontendDialogTooltipPost')}</span></Highlight>{t(lang, 'main.frontendDescPost')}
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
