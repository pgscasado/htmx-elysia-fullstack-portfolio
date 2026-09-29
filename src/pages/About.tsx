import render from '@core/render';
import { Navbar } from '@components';
import { Base } from '@pages';
import { Footer } from '@components/Footer';
import { Highlight } from '@components/Highlight';
import { t, localePath, type Locale } from '@i18n';

export default ({ lang }: { lang: Locale }) => {
  const years = new Date().getFullYear() - 2020;
  return (
    <Base lang={lang} page='about' class='flex flex-col md:h-[90vh]'>
      <div>
        <Navbar lang={lang} active='about'/>
        <div class='flex space-y-10 flex-col mx-auto container w-[90vw] md:w-[70vw] mb-[4.5rem]'>
          <div class='text-3xl mb-2 md:mb-0 md:w-[25%]'>{t(lang, 'about.titlePre')}<Highlight class='font-medium'>{t(lang, 'about.titleHighlight')}</Highlight></div>
          <div class='text-base text-justify space-y-2'>
            <p>
              {t(lang, 'about.p1IntroPre')}<Highlight>{t(lang, 'about.p1FieldsHighlightPre')}<span class='font-medium'>{t(lang, 'about.p1FieldsBold')}</span></Highlight>{t(lang, 'about.p1Mid1')}<Highlight>{t(lang, 'about.p1AngularHighlight')}</Highlight>{t(lang, 'about.p1Mid2')}<Highlight>{t(lang, 'about.p1RoleHighlight')}</Highlight>{t(lang, 'about.p1Mid3')}<Highlight class='font-medium'>{t(lang, 'about.p1CompanyHighlight')}</Highlight>{t(lang, 'about.p1Mid4')}<Highlight>{t(lang, 'about.p1SkillsHighlight')}</Highlight>{t(lang, 'about.p1Mid5')}<Highlight>{t(lang, 'about.p1YearsHighlight').replace('{years}', String(years))}</Highlight>{t(lang, 'about.p1Mid6')}<Highlight>{t(lang, 'about.p1DomainsHighlight')}</Highlight>{t(lang, 'about.p1Mid7')}
            </p>
          </div>
          <div class='flex flex-col items-center'>
            <div class='text-3xl mb-2'><Highlight class='font-medium'>{t(lang, 'about.workTitle')}</Highlight></div>
            <div class='flex flex-col space-y-4 w-full text-base text-justify'>
              <div class='flex flex-col'>
                <div class='text-xl'><Highlight class='font-medium'>{t(lang, 'about.workJob1Company')}</Highlight> — {t(lang, 'about.workJob1Role')}</div>
                <div class='text-sm italic opacity-70'>{t(lang, 'about.workJob1Location')} · {t(lang, 'about.workJob1Dates')}</div>
                <div>{t(lang, 'about.workJob1Summary')}</div>
              </div>
              <div class='flex flex-col'>
                <div class='text-xl'><Highlight class='font-medium'>{t(lang, 'about.workJob2Company')}</Highlight> — {t(lang, 'about.workJob2Role')}</div>
                <div class='text-sm italic opacity-70'>{t(lang, 'about.workJob2Location')} · {t(lang, 'about.workJob2Dates')}</div>
                <div>{t(lang, 'about.workJob2Summary')}</div>
              </div>
              <div class='flex flex-col'>
                <div class='text-xl'><Highlight class='font-medium'>{t(lang, 'about.workJob3Company')}</Highlight> — {t(lang, 'about.workJob3Role')}</div>
                <div class='text-sm italic opacity-70'>{t(lang, 'about.workJob3Location')} · {t(lang, 'about.workJob3Dates')}</div>
                <div>{t(lang, 'about.workJob3Summary')}</div>
              </div>
              <div class='flex flex-col'>
                <div class='text-xl'><Highlight class='font-medium'>{t(lang, 'about.workJob4Company')}</Highlight> — {t(lang, 'about.workJob4Role')}</div>
                <div class='text-sm italic opacity-70'>{t(lang, 'about.workJob4Location')} · {t(lang, 'about.workJob4Dates')}</div>
                <div>{t(lang, 'about.workJob4Summary')}</div>
              </div>
            </div>
          </div>
          <div class='text-base text-justify space-y-2'>
            <p>
              {t(lang, 'about.p2Pre')}<Highlight><a hx-boost='true' class='text-interactive hover:text-interactive-300 transition-colors' href={localePath(lang, 'projects')}>{t(lang, 'about.p2ProjectsLabel')}</a></Highlight>{t(lang, 'about.p2Post')}
            </p>
            <p>
              {t(lang, 'about.p3Pre')}<Highlight>{t(lang, 'about.p3English')}</Highlight>{t(lang, 'about.p3Mid1')}<Highlight>{t(lang, 'about.p3Spanish')}</Highlight>{t(lang, 'about.p3Mid2')}<Highlight>{t(lang, 'about.p3German')}</Highlight>{t(lang, 'about.p3Mid3')}<Highlight>{t(lang, 'about.p3Japanese')}</Highlight>{t(lang, 'about.p3Post')}
            </p>
            <p>
              {t(lang, 'about.p4Pre')}<Highlight>{t(lang, 'about.p4Gandalf')}</Highlight>{t(lang, 'about.p4Mid')}<Highlight>{t(lang, 'about.p4Leia')}</Highlight>{t(lang, 'about.p4Post')}
            </p>
          </div>
        </div>
      </div>
      <Footer lang={lang} class='mt-auto' currentPage='about'/>
    </Base>
  );
}
