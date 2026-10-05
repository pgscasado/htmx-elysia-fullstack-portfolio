import render from '@core/render';
import { Navbar } from '@components';
import { Base } from '@pages';
import { Footer } from '@components/Footer';
import { Icon } from '@components/Icon';
import { t, type Key, type Locale } from '@i18n';

// newest first; the research years close the timeline
const jobs = ['shk', 'vinta', 'teddy', 'elife', 'ifpb'];
const languages = ['pt', 'en', 'es', 'de', 'ja'];

export default ({ lang }: { lang: Locale }) => {
  const years = new Date().getFullYear() - 2020;
  const job = (id: string, field: string) => t(lang, `about.jobs.${id}.${field}` as Key);
  const language = (id: string, field: string) => t(lang, `about.languages.${id}.${field}` as Key);
  return (
    <Base lang={lang} page='about' class='flex flex-col min-h-[100svh]'>
      <Navbar lang={lang} active='about'/>
      <main class='flex-1 mx-auto w-[90vw] md:w-[70vw] pt-[6vh] pb-24 flex flex-col gap-20'>
        <h1 class='sr-only'>{t(lang, 'about.title')}</h1>
        <p class='max-w-[30ch] font-roboto-serif font-light leading-snug text-[clamp(1.75rem,4.5vw,3rem)] text-secondary dark:text-primary'>
          {t(lang, 'about.lead').replace('{years}', String(years))}
        </p>
        <section>
          <h2 class='mb-4 opacity-60'>{t(lang, 'about.workTitle')}</h2>
          {/* each job opens to its summary; dates sit in their own column from md up */}
          <ol>
            {jobs.map((id) => (
              <li>
                <details class='disclosure'>
                  <summary class='grid grid-cols-[1fr_auto] md:grid-cols-[11rem_1fr_auto] gap-x-6 gap-y-1 py-4 items-baseline'>
                    <span class='col-span-2 md:col-span-1 text-sm opacity-60 tabular-nums'>{job(id, 'dates')}</span>
                    <span>
                      <span class='text-xl'>{job(id, 'company')}</span>
                      <span class='block md:inline md:ml-3 opacity-70'>{job(id, 'role')}</span>
                    </span>
                    <Icon name='chevron-down' class='chevron'/>
                  </summary>
                  <p class='max-w-prose pb-6 md:ml-[12.5rem] opacity-90'>{job(id, 'summary')}</p>
                </details>
              </li>
            )).join('')}
          </ol>
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
