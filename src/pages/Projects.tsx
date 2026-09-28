import { Navbar } from '@components';
import { Footer } from '@components/Footer';
import { Highlight } from '@components/Highlight';
import render from '@core/render';
import { Base } from '@pages';
import { t, localePath, type Locale } from '@i18n';

export default ({ lang }: { lang: Locale }) => (
  <Base lang={lang} class='flex flex-col md:h-[90vh]'>
    <Navbar lang={lang} active='projects'/>
    <div class='flex space-y-10 flex-col mx-auto container w-[90vw] md:w-[70vw] mb-[4.5rem]'>
      <div class='text-3xl mb-2 md:mb-0 md:w-max'>{t(lang, 'projects.titlePre')}<Highlight class='font-medium'>{t(lang, 'projects.titleHighlight')}</Highlight></div>
      <div class='flex flex-col space-y-5'>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'>1.</Highlight></div>
          <div class='text-base text-justify w-full'>
            <a href='https://github.com/pgscasado/htmx-elysia-fullstack/' target='about:blank' class='text-interactive hover:text-interactive-300'>{t(lang, 'projects.item1LinkLabel')}</a>{t(lang, 'projects.item1Mid1')}<a class='text-interactive hover:text-interactive-300' href='https://elysiajs.com/' target='about:blank'>{t(lang, 'projects.item1ElysiaLabel')}</a>{t(lang, 'projects.item1Mid2')}<a href='https://htmx.org' target='_blank' rel='noopener noreferrer' class='text-interactive hover:text-interactive-300'>{t(lang, 'projects.item1HtmxLabel')}</a>{t(lang, 'projects.item1Mid3')} <br/>
            <Highlight>{t(lang, 'projects.item1Highlight1')}</Highlight>
            <br/>
            {t(lang, 'projects.item1Mid4')}<Highlight>{t(lang, 'projects.item1SpaHighlight')}</Highlight>{t(lang, 'projects.item1Mid5')}
            <br/><br/>
            {t(lang, 'projects.item1Mid6')}<Highlight>{t(lang, 'projects.item1KbHighlight')}</Highlight>{t(lang, 'projects.item1Mid7')}
            <br/>
            {t(lang, 'projects.item1Mid8')}<Highlight>{t(lang, 'projects.item1JsxHighlight')}</Highlight>{t(lang, 'projects.item1Mid9')}
          </div>
        </div>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'>2.</Highlight></div>
          <div class='text-base text-justify w-full'>
            <a class='text-interactive hover:text-interactive-300' href='https://github.com/pgscasado/ai-agent-manager/' target='about:blank'>{t(lang, 'projects.item2LinkLabel')}</a>{t(lang, 'projects.item2Mid1')}<Highlight>{t(lang, 'projects.item2LlmsHighlight')}</Highlight>{t(lang, 'projects.item2Mid2')}<Highlight>{t(lang, 'projects.item2BackendHighlight')}</Highlight>{t(lang, 'projects.item2Mid3')}<Highlight>{t(lang, 'projects.item2AiHighlight')}</Highlight>{t(lang, 'projects.item2Mid4')}
            <br/>
            {t(lang, 'projects.item2Block2Pre')}<Highlight>{t(lang, 'projects.item2RagHighlight')}</Highlight>{t(lang, 'projects.item2Block2Post')}
            <br/>
            {t(lang, 'projects.item2Block3')}
            <br/>
            {t(lang, 'projects.item2Block4')}
            <br/>
            <br/>
            {t(lang, 'projects.item2Block5Pre')}<Highlight><a href='https://expressjs.com' target='about:blank' class='text-interactive hover:text-interactive-300'>{t(lang, 'projects.item2ExpressLabel')}</a>, <a href='https://zod.dev' target='about:blank' class='text-interactive hover:text-interactive-300'>{t(lang, 'projects.item2ZodLabel')}</a>, <a href='https://xenova.github.io/transformers.js/' target='about:blank' class='text-interactive hover:text-interactive-300'>{t(lang, 'projects.item2TransformersLabel')}</a> e <a href='https://www.mongodb.com/' target='about:blank' class='text-interactive hover:text-interactive-300'>{t(lang, 'projects.item2MongoLabel')}</a></Highlight>{t(lang, 'projects.item2Block5Post')}
            <br/>
            {t(lang, 'projects.item2Block6')}
          </div>
        </div>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'>3.</Highlight></div>
          <div class='text-base text-justify w-full'>
            <a class='text-interactive hover:text-interactive-300' href='https://drive.google.com/file/d/1cSyCvpOgIb2VhJZHIWtCOQ_5Xpxm3Zqq/view' target='about:blank'>{t(lang, 'projects.item3LinkLabel')}</a>{t(lang, 'projects.item3Mid1')}
            <br/>
            {t(lang, 'projects.item3Block2')}
            <br/><br/>
            {t(lang, 'projects.item3Block3Pre')}<Highlight>{t(lang, 'projects.item3StackHighlight')}</Highlight>{t(lang, 'projects.item3Block3Mid')}<Highlight>{t(lang, 'projects.item3MernHighlight')}</Highlight>{t(lang, 'projects.item3Block3Post')}
          </div>
        </div>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'>4.</Highlight></div>
          <div class='text-base text-justify w-full'>
            <a class='text-interactive hover:text-interactive-300' href='https://drive.google.com/file/d/1WjjuyG3U9Q7AbcRfIshSUeHDQOqLMs6F/view' target='about:blank'>{t(lang, 'projects.item4LinkLabel')}</a>{t(lang, 'projects.item4Mid1')}
            <br/>
            {t(lang, 'projects.item4Block2Pre')}<Highlight>{t(lang, 'projects.item4VLibrasHighlight')}</Highlight>{t(lang, 'projects.item4Block2Post')}
            <br/>
            <br/>
            {t(lang, 'projects.item4Block3Pre')}<Highlight>{t(lang, 'projects.item4ScrapingHighlight')}</Highlight>{t(lang, 'projects.item4Block3Mid')}<Highlight>{t(lang, 'projects.item4JsHighlight')}</Highlight>{t(lang, 'projects.item4Block3Post')}<a href='https://pptr.dev/' target='about:blank' class='text-interactive hover:text-interactive-300'>{t(lang, 'projects.item4PuppeteerLabel')}</a> e <a href='https://cheerio.js.org/' target='about:blank' class='text-interactive hover:text-interactive-300'>{t(lang, 'projects.item4CheerioLabel')}</a>{t(lang, 'projects.item4Block3End')}
          </div>
        </div>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'>{t(lang, 'projects.moreTitle')}</Highlight></div>
          <div class='text-lg text-center w-full'>
            {t(lang, 'projects.moreDescPre')}<a hx-boost='true' href={localePath(lang, 'contact')} class='text-interactive hover:text-interactive-300'>{t(lang, 'projects.moreDescContactLabel')}</a>{t(lang, 'projects.moreDescPost')}
          </div>
        </div>
      </div>
    </div>
    <Footer lang={lang} class='mt-auto' currentPage='projects'/>
  </Base>
)
