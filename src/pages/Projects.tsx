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
          <div class='grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-5'>
            <figure class='flex flex-col items-center'>
              <a href='/static/projects/portfolio/render.png' target='_blank' rel='noopener noreferrer' class='w-full'><img src='/static/projects/portfolio/render.png' alt={t(lang, 'projects.item1CodeRenderAlt')} width='855' height='692' loading='lazy' class='w-full h-auto'/></a>
              <figcaption class='text-sm mt-1 text-center opacity-80'>{t(lang, 'projects.item1CodeRenderCaption')}</figcaption>
            </figure>
            <figure class='flex flex-col items-center'>
              <a href='/static/projects/portfolio/navbar.png' target='_blank' rel='noopener noreferrer' class='w-full'><img src='/static/projects/portfolio/navbar.png' alt={t(lang, 'projects.item1CodeNavAlt')} width='695' height='560' loading='lazy' class='w-full h-auto'/></a>
              <figcaption class='text-sm mt-1 text-center opacity-80'>{t(lang, 'projects.item1CodeNavCaption')}</figcaption>
            </figure>
            <figure class='flex flex-col items-center md:col-span-2 md:w-1/2 md:mx-auto'>
              <a href='/static/projects/portfolio/router.png' target='_blank' rel='noopener noreferrer' class='w-full'><img src='/static/projects/portfolio/router.png' alt={t(lang, 'projects.item1CodeRouterAlt')} width='762' height='472' loading='lazy' class='w-full h-auto'/></a>
              <figcaption class='text-sm mt-1 text-center opacity-80'>{t(lang, 'projects.item1CodeRouterCaption')}</figcaption>
            </figure>
          </div>
        </div>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'>2.</Highlight></div>
          <div class='text-base text-justify w-full'>
            <a href='https://github.com/pgscasado/cli-authenticator/' target='_blank' rel='noopener noreferrer' class='text-interactive hover:text-interactive-300'>{t(lang, 'projects.authLinkLabel')}</a>{t(lang, 'projects.authMid1')}<Highlight>{t(lang, 'projects.authCameraHighlight')}</Highlight>{t(lang, 'projects.authMid2')}
            <br/><br/>
            {t(lang, 'projects.authBlock2Pre')}<Highlight>{t(lang, 'projects.authCryptoHighlight')}</Highlight>{t(lang, 'projects.authBlock2Post')}
            <br/><br/>
            {t(lang, 'projects.authBlock3Pre')}<Highlight>{t(lang, 'projects.authAnsiHighlight')}</Highlight>{t(lang, 'projects.authBlock3Mid')}<a href='https://github.com/zxing-cpp/zxing-cpp' target='_blank' rel='noopener noreferrer' class='text-interactive hover:text-interactive-300'>{t(lang, 'projects.authZxingLabel')}</a>{t(lang, 'projects.authBlock3Post')}
          </div>
          <div class='grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-5'>
            <figure class='flex flex-col items-center'>
              <img src='/static/projects/cli-authenticator/live.gif' alt={t(lang, 'projects.authGifLiveAlt')} width='792' height='560' loading='lazy' class='w-full h-auto rounded-lg border border-black/10 dark:border-white/10'/>
              <figcaption class='text-sm mt-2 text-center opacity-80'>{t(lang, 'projects.authGifLiveCaption')}</figcaption>
            </figure>
            <figure class='flex flex-col items-center'>
              <img src='/static/projects/cli-authenticator/camera.gif' alt={t(lang, 'projects.authGifCameraAlt')} width='792' height='560' loading='lazy' class='w-full h-auto rounded-lg border border-black/10 dark:border-white/10'/>
              <figcaption class='text-sm mt-2 text-center opacity-80'>{t(lang, 'projects.authGifCameraCaption')}</figcaption>
            </figure>
          </div>
          <div class='text-xs mt-2 opacity-60 w-full text-center'>{t(lang, 'projects.authGifNote')}</div>
        </div>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'>3.</Highlight></div>
          <div class='text-base text-justify w-full'>
            <a class='text-interactive hover:text-interactive-300' href='https://github.com/pgscasado/ai-agent-manager/' target='_blank' rel='noopener noreferrer'>{t(lang, 'projects.agentLinkLabel')}</a>{t(lang, 'projects.agentMid1')}<Highlight>{t(lang, 'projects.agentElixirHighlight')}</Highlight>{t(lang, 'projects.agentMid2')}
            <br/><br/>
            {t(lang, 'projects.agentEventsPre')}<Highlight>{t(lang, 'projects.agentEventsHighlight')}</Highlight>{t(lang, 'projects.agentEventsPost')}
            <br/><br/>
            {t(lang, 'projects.agentOtpPre')}<Highlight>{t(lang, 'projects.agentOtpHighlight')}</Highlight>{t(lang, 'projects.agentOtpPost')}
            <br/><br/>
            {t(lang, 'projects.agentPipelinePre')}<Highlight>{t(lang, 'projects.agentPipelineHighlight')}</Highlight>{t(lang, 'projects.agentPipelinePost')}
            <br/><br/>
            {t(lang, 'projects.agentModelsPre')}<Highlight>{t(lang, 'projects.agentModelsHighlight')}</Highlight>{t(lang, 'projects.agentModelsPost')}
            <br/><br/>
            {t(lang, 'projects.agentRagPre')}<Highlight>{t(lang, 'projects.agentRagHighlight')}</Highlight>{t(lang, 'projects.agentRagMid')}<Highlight>{t(lang, 'projects.agentToolsHighlight')}</Highlight>{t(lang, 'projects.agentRagPost')}
            <br/><br/>
            {t(lang, 'projects.agentStackPre')}<Highlight><a href='https://elixir-lang.org' target='_blank' rel='noopener noreferrer' class='text-interactive hover:text-interactive-300'>Elixir</a>{t(lang, 'projects.agentStackSep')}<a href='https://www.phoenixframework.org' target='_blank' rel='noopener noreferrer' class='text-interactive hover:text-interactive-300'>Phoenix</a>{t(lang, 'projects.agentStackSep')}<a href='https://github.com/pgvector/pgvector' target='_blank' rel='noopener noreferrer' class='text-interactive hover:text-interactive-300'>PostgreSQL + pgvector</a>{t(lang, 'projects.agentStackSep')}<a href='https://ollama.com' target='_blank' rel='noopener noreferrer' class='text-interactive hover:text-interactive-300'>Ollama</a>{t(lang, 'projects.agentStackAnd')}<a href='https://modelcontextprotocol.io' target='_blank' rel='noopener noreferrer' class='text-interactive hover:text-interactive-300'>MCP</a></Highlight>{t(lang, 'projects.agentStackPost')}
          </div>
          <div class='grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-5'>
            <figure class='flex flex-col items-center'>
              <img src='/static/projects/ai-agent-manager/chat.gif' alt={t(lang, 'projects.agentGifChatAlt')} width='882' height='628' loading='lazy' class='w-full h-auto rounded-lg border border-black/10 dark:border-white/10'/>
              <figcaption class='text-sm mt-2 text-center opacity-80'>{t(lang, 'projects.agentGifChatCaption')}</figcaption>
            </figure>
            <figure class='flex flex-col items-center'>
              <img src='/static/projects/ai-agent-manager/events.gif' alt={t(lang, 'projects.agentGifEventsAlt')} width='882' height='628' loading='lazy' class='w-full h-auto rounded-lg border border-black/10 dark:border-white/10'/>
              <figcaption class='text-sm mt-2 text-center opacity-80'>{t(lang, 'projects.agentGifEventsCaption')}</figcaption>
            </figure>
          </div>
          <div class='text-xs mt-2 opacity-60 w-full text-center'>{t(lang, 'projects.agentGifNote')}</div>
        </div>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'>4.</Highlight></div>
          <div class='text-base text-justify w-full'>
            <a class='text-interactive hover:text-interactive-300' href='https://drive.google.com/file/d/1cSyCvpOgIb2VhJZHIWtCOQ_5Xpxm3Zqq/view' target='about:blank'>{t(lang, 'projects.item3LinkLabel')}</a>{t(lang, 'projects.item3Mid1')}
            <br/>
            {t(lang, 'projects.item3Block2')}
            <br/><br/>
            {t(lang, 'projects.item3Block3Pre')}<Highlight>{t(lang, 'projects.item3StackHighlight')}</Highlight>{t(lang, 'projects.item3Block3Mid')}<Highlight>{t(lang, 'projects.item3MernHighlight')}</Highlight>{t(lang, 'projects.item3Block3Post')}
          </div>
        </div>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'>5.</Highlight></div>
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
