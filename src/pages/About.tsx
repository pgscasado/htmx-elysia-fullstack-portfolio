import render from '@core/render';
import { Navbar } from '@components';
import { Base } from '@pages';
import { Footer } from '@components/Footer';
import { Icon } from '@components/Icon';
import { TechTags } from '@components/TechTag';
import { Typed } from '@components/Typed';
import { GlideToHash } from '@components/GlideToHash';
import { jobs } from '@components/util/projects';
import { t, type Key, type Locale } from '@i18n';

const languages = ['pt', 'en', 'es', 'de', 'ja'];

export default ({ lang }: { lang: Locale }) => {
  const years = new Date().getFullYear() - 2020;
  const job = (id: string, field: string) => t(lang, `about.jobs.${id}.${field}` as Key);
  const language = (id: string, field: string) => t(lang, `about.languages.${id}.${field}` as Key);
  return (
    <Base lang={lang} page='about' class='flex flex-col min-h-[100svh]'>
      <Navbar lang={lang} active='about'/>
      <main class='flex-1 mx-auto w-[90vw] md:w-[70vw] pt-[6vh] pb-24 flex flex-col gap-20'>
        <header class='flex flex-col gap-5'>
          <h1 class='max-w-[20ch] font-roboto-serif font-light leading-tight text-[clamp(2.25rem,6vw,3.75rem)] text-secondary dark:text-primary'>
            <Typed text={t(lang, 'about.heroTitle').replace('{years}', String(years))}/>
          </h1>
          <p class='max-w-prose text-lg md:text-xl opacity-80'>{t(lang, 'about.heroText')}</p>
        </header>
        <section>
          <h2 class='mb-4 opacity-60'>{t(lang, 'about.workTitle')}</h2>
          {/* each job opens to its summary (animated in input.css); dates sit in their own
              column from md up. A link to job-<id> (from the projects filter) targets an empty
              marker in the body, so browsers that expand <details> on fragment navigation open the
              row; the marker is pinned to the row's top, so the jump lands there whatever the row's
              height, and GlideToHash (below) turns the jump into a soft scroll */}
          <ol>
            {jobs.map(({ id, stack }) => (
              <li class='glide-row relative -mx-4 px-4 rounded-xl'>
                <details class='disclosure'>
                  <summary class='grid grid-cols-[1fr_auto] md:grid-cols-[11rem_1fr_auto] gap-x-6 gap-y-1 py-4 items-baseline'>
                    <span class='col-span-2 md:col-span-1 text-sm opacity-60 tabular-nums'>{job(id, 'dates')}</span>
                    <span>
                      <span class='text-xl'>{job(id, 'company')}</span>
                      <span class='block md:inline md:ml-3 opacity-70'>{job(id, 'role')}</span>
                    </span>
                    <Icon name='chevron-down' class='chevron'/>
                  </summary>
                  <div class='pb-6 md:ml-[12.5rem] flex flex-col gap-4'>
                    <span id={`job-${id}`} data-glide class='absolute top-0 scroll-mt-4' aria-hidden='true'></span>
                    <p class='max-w-prose opacity-90'>{job(id, 'summary')}</p>
                    <TechTags stack={stack}/>
                  </div>
                </details>
              </li>
            )).join('')}
          </ol>
          <GlideToHash/>
        </section>
        <section>
          <h2 class='mb-4 opacity-60'>{t(lang, 'about.languagesTitle')}</h2>
          <ul class='flex flex-wrap gap-x-10 gap-y-3'>
            {languages.map((id) => (
              <li><span class='text-xl'>{language(id, 'name')}</span> <span class='text-sm opacity-60'>{language(id, 'level')}</span></li>
            )).join('')}
          </ul>
        </section>
        <p class='max-w-prose opacity-80'>{t(lang, 'about.personal')}</p>
      </main>
      <Footer lang={lang} currentPage='about'/>
    </Base>
  );
}
