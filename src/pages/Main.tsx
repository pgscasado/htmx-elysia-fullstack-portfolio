import render from '@core/render';
import { Base } from '@pages';
import { Navbar } from '@components/Navbar';
import { IconStack } from '@components/IconStack';
import { Highlight } from '@components/Highlight';
import { Footer } from '../components/Footer';
import { t, type Locale } from '@i18n';

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
        <div class='flex flex-col md:flex-row md:space-x-4 items-center'>
          <div class='text-3xl mb-2 md:mb-0 md:w-[18%]'><Highlight class='font-medium'>{t(lang, 'main.whoTitleHighlight')}</Highlight>{t(lang, 'main.whoTitleRest')}</div>
          <div class='text-base text-justify'>
            {t(lang, 'main.whoIntroPre')}<Highlight>{t(lang, 'main.whoExperienceHighlight').replace('{years}', String(years))}</Highlight>{t(lang, 'main.whoIntroMid')}<Highlight>{t(lang, 'main.whoDomainsHighlight')}</Highlight>{t(lang, 'main.whoIntroPost')}
          </div>
          <div class='flex flex-row md:flex-col space-y-2 space-x-2 text-3xl md:text-lg [&>i]:duration-300 [&>i]:ease-in-out [&>i]:cursor-pointer'>
            <span></span>
            <IconStack icons={[
              {
                icon: 'discord',
                href: 'https://discordapp.com/users/188142088691384330',
                children: (
                  <span class='tooltip group-hover:opacity-100 transition-all left-align md:right-align'>
                    @zeroone ou zero-one#8699
                  </span>
                )
              },
              {
                icon: 'github',
                href: 'https://github.com/pgscasado',
                children: (
                  <span class="tooltip group-hover:opacity-100">
                    @pgscasado
                  </span>
                )
              },
              {
                icon: 'linkedin',
                href: 'https://linkedin.com/in/pgscasado',
                children: (
                  <span class="tooltip group-hover:opacity-100">
                    in/pgscasado
                  </span>
                )
              },
              {
                icon: 'google',
                href: 'mailto:pgscasado.pessoal@gmail.com',
                children: (
                  <span class="tooltip group-hover:opacity-100">
                    pgscasado.pessoal@gmail.com
                  </span>
                )
              },
              {
                icon: 'whatsapp',
                href: 'https://api.whatsapp.com/send?phone=5583981661966',
                children: (
                  <span class="tooltip group-hover:opacity-100">
                    +55 (83) 98166-1966
                  </span>
                )
              }
            ]} class='hover:text-interactive'/>
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
