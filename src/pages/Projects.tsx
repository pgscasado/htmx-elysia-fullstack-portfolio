import { Navbar } from '@components';
import { Footer } from '@components/Footer';
import { Highlight } from '@components/Highlight';
import { Img, Video } from '@components/Img';
import render from '@core/render';
import { Base } from '@pages';
import links from '@root/links.json';
import { t, localePath, type Locale } from '@i18n';

export default ({ lang }: { lang: Locale }) => (
  <Base lang={lang} page='projects' class='flex flex-col md:h-[90vh]'>
    <Navbar lang={lang} active='projects'/>
    <div class='flex space-y-10 flex-col mx-auto container w-[90vw] md:w-[70vw] mb-[4.5rem]'>
      <div class='text-3xl mb-2 md:mb-0 md:w-max'>{t(lang, 'projects.titlePre')}<Highlight class='font-medium'>{t(lang, 'projects.titleHighlight')}</Highlight></div>
      <div class='flex flex-col space-y-5'>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'>1.</Highlight></div>
          <div class='text-base text-justify w-full'>
            <a href={links.projects.htmxElysia} target='about:blank' class='text-link'>{t(lang, 'projects.item1LinkLabel')}</a>{t(lang, 'projects.item1Mid1')}<a class='text-link' href={links.references.elysia} target='about:blank'>{t(lang, 'projects.item1ElysiaLabel')}</a>{t(lang, 'projects.item1Mid2')}<a href={links.references.htmx} target='_blank' rel='noopener noreferrer' class='text-link'>{t(lang, 'projects.item1HtmxLabel')}</a>{t(lang, 'projects.item1Mid3')} <br/>
            <Highlight>{t(lang, 'projects.item1Highlight1')}</Highlight>
            <br/>
            {t(lang, 'projects.item1Mid4')}<Highlight>{t(lang, 'projects.item1SpaHighlight')}</Highlight>{t(lang, 'projects.item1Mid5')}
            <br/><br/>
            {t(lang, 'projects.item1Mid6')}<Highlight>{t(lang, 'projects.item1KbHighlight')}</Highlight>{t(lang, 'projects.item1Mid7')}
            <br/>
            {t(lang, 'projects.item1Mid8')}<Highlight>{t(lang, 'projects.item1JsxHighlight')}</Highlight>{t(lang, 'projects.item1Mid9')}
            <br/><br/>
            {t(lang, 'projects.item1InfraPre')}<Highlight>{t(lang, 'projects.item1InfraHighlight')}</Highlight>{t(lang, 'projects.item1InfraMid')}<Highlight>{t(lang, 'projects.item1InfraLowHighlight')}</Highlight>{t(lang, 'projects.item1InfraPost')}
          </div>
          <div class='grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-5'>
            <figure class='flex flex-col items-center'>
              <a href='/static/projects/portfolio/render.png' target='_blank' rel='noopener noreferrer' class='w-full'><Img src='/static/projects/portfolio/render.png' alt={t(lang, 'projects.item1CodeRenderAlt')} width='855' height='692'/></a>
              <figcaption class='text-sm mt-1 text-center opacity-80'>{t(lang, 'projects.item1CodeRenderCaption')}</figcaption>
            </figure>
            <figure class='flex flex-col items-center'>
              <a href='/static/projects/portfolio/navbar.png' target='_blank' rel='noopener noreferrer' class='w-full'><Img src='/static/projects/portfolio/navbar.png' alt={t(lang, 'projects.item1CodeNavAlt')} width='695' height='560'/></a>
              <figcaption class='text-sm mt-1 text-center opacity-80'>{t(lang, 'projects.item1CodeNavCaption')}</figcaption>
            </figure>
            <figure class='flex flex-col items-center md:col-span-2 md:w-1/2 md:mx-auto'>
              <a href='/static/projects/portfolio/router.png' target='_blank' rel='noopener noreferrer' class='w-full'><Img src='/static/projects/portfolio/router.png' alt={t(lang, 'projects.item1CodeRouterAlt')} width='762' height='472'/></a>
              <figcaption class='text-sm mt-1 text-center opacity-80'>{t(lang, 'projects.item1CodeRouterCaption')}</figcaption>
            </figure>
          </div>
        </div>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'>2.</Highlight></div>
          <div class='text-base text-justify w-full'>
            <a href={links.projects.cliAuthenticator} target='_blank' rel='noopener noreferrer' class='text-link'>{t(lang, 'projects.authLinkLabel')}</a>{t(lang, 'projects.authMid1')}<Highlight>{t(lang, 'projects.authCameraHighlight')}</Highlight>{t(lang, 'projects.authMid2')}
            <br/><br/>
            {t(lang, 'projects.authBlock2Pre')}<Highlight>{t(lang, 'projects.authCryptoHighlight')}</Highlight>{t(lang, 'projects.authBlock2Post')}
            <br/><br/>
            {t(lang, 'projects.authBlock3Pre')}<Highlight>{t(lang, 'projects.authAnsiHighlight')}</Highlight>{t(lang, 'projects.authBlock3Mid')}<a href={links.references.zxingCpp} target='_blank' rel='noopener noreferrer' class='text-link'>{t(lang, 'projects.authZxingLabel')}</a>{t(lang, 'projects.authBlock3Post')}
          </div>
          <div class='grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-5'>
            <figure class='flex flex-col items-center'>
              <Img src='/static/projects/cli-authenticator/live.gif' alt={t(lang, 'projects.authGifLiveAlt')} width='792' height='560' class='rounded-lg border border-black/10 dark:border-white/10'/>
              <figcaption class='text-sm mt-2 text-center opacity-80'>{t(lang, 'projects.authGifLiveCaption')}</figcaption>
            </figure>
            <figure class='flex flex-col items-center'>
              <Video src='/static/projects/cli-authenticator/camera.mp4' label={t(lang, 'projects.authGifCameraAlt')} width='792' height='560' class='rounded-lg border border-black/10 dark:border-white/10'/>
              <figcaption class='text-sm mt-2 text-center opacity-80'>{t(lang, 'projects.authGifCameraCaption')}</figcaption>
            </figure>
          </div>
          <div class='text-xs mt-2 opacity-60 w-full text-center'>{t(lang, 'projects.authGifNote')}</div>
        </div>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'>3.</Highlight></div>
          <div class='text-base text-justify w-full'>
            <a class='text-link' href={links.projects.aiAgentManager} target='_blank' rel='noopener noreferrer'>{t(lang, 'projects.agentLinkLabel')}</a>{t(lang, 'projects.agentMid1')}<Highlight>{t(lang, 'projects.agentElixirHighlight')}</Highlight>{t(lang, 'projects.agentMid2')}
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
            {t(lang, 'projects.agentStackPre')}<Highlight><a href={links.references.elixir} target='_blank' rel='noopener noreferrer' class='text-link'>Elixir</a>{t(lang, 'projects.agentStackSep')}<a href={links.references.phoenix} target='_blank' rel='noopener noreferrer' class='text-link'>Phoenix</a>{t(lang, 'projects.agentStackSep')}<a href={links.references.pgvector} target='_blank' rel='noopener noreferrer' class='text-link'>PostgreSQL + pgvector</a>{t(lang, 'projects.agentStackSep')}<a href={links.references.ollama} target='_blank' rel='noopener noreferrer' class='text-link'>Ollama</a>{t(lang, 'projects.agentStackAnd')}<a href={links.references.mcp} target='_blank' rel='noopener noreferrer' class='text-link'>MCP</a></Highlight>{t(lang, 'projects.agentStackPost')}
          </div>
          <div class='grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-5'>
            <figure class='flex flex-col items-center'>
              <Img src='/static/projects/ai-agent-manager/chat.gif' alt={t(lang, 'projects.agentGifChatAlt')} width='882' height='628' class='rounded-lg border border-black/10 dark:border-white/10'/>
              <figcaption class='text-sm mt-2 text-center opacity-80'>{t(lang, 'projects.agentGifChatCaption')}</figcaption>
            </figure>
            <figure class='flex flex-col items-center'>
              <Img src='/static/projects/ai-agent-manager/events.gif' alt={t(lang, 'projects.agentGifEventsAlt')} width='882' height='628' class='rounded-lg border border-black/10 dark:border-white/10'/>
              <figcaption class='text-sm mt-2 text-center opacity-80'>{t(lang, 'projects.agentGifEventsCaption')}</figcaption>
            </figure>
          </div>
          <div class='text-xs mt-2 opacity-60 w-full text-center'>{t(lang, 'projects.agentGifNote')}</div>
        </div>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'>4.</Highlight></div>
          <div class='text-base text-justify w-full'>
            <a class='text-link' href={links.projects.item3} target='about:blank'>{t(lang, 'projects.item3LinkLabel')}</a>{t(lang, 'projects.item3Mid1')}
            <br/>
            {t(lang, 'projects.item3Block2')}
            <br/><br/>
            {t(lang, 'projects.item3Block3Pre')}<Highlight>{t(lang, 'projects.item3StackHighlight')}</Highlight>{t(lang, 'projects.item3Block3Mid')}<Highlight>{t(lang, 'projects.item3MernHighlight')}</Highlight>{t(lang, 'projects.item3Block3Post')}
          </div>
        </div>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'>5.</Highlight></div>
          <div class='text-base text-justify w-full'>
            <a class='text-link' href={links.projects.item4} target='about:blank'>{t(lang, 'projects.item4LinkLabel')}</a>{t(lang, 'projects.item4Mid1')}
            <br/>
            {t(lang, 'projects.item4Block2Pre')}<Highlight>{t(lang, 'projects.item4VLibrasHighlight')}</Highlight>{t(lang, 'projects.item4Block2Post')}
            <br/>
            <br/>
            {t(lang, 'projects.item4Block3Pre')}<Highlight>{t(lang, 'projects.item4ScrapingHighlight')}</Highlight>{t(lang, 'projects.item4Block3Mid')}<Highlight>{t(lang, 'projects.item4JsHighlight')}</Highlight>{t(lang, 'projects.item4Block3Post')}<a href={links.references.puppeteer} target='about:blank' class='text-link'>{t(lang, 'projects.item4PuppeteerLabel')}</a> e <a href={links.references.cheerio} target='about:blank' class='text-link'>{t(lang, 'projects.item4CheerioLabel')}</a>{t(lang, 'projects.item4Block3End')}
          </div>
        </div>
        <div class='flex flex-col items-center'>
          <div class='text-3xl mb-2'><Highlight class='font-medium'>{t(lang, 'projects.moreTitle')}</Highlight></div>
          <div class='text-lg text-center w-full'>
            {t(lang, 'projects.moreDescPre')}<a hx-boost='true' href={localePath(lang, 'contact')} class='text-link'>{t(lang, 'projects.moreDescContactLabel')}</a>{t(lang, 'projects.moreDescPost')}
          </div>
        </div>
      </div>
    </div>
    <Footer lang={lang} class='mt-auto' currentPage='projects'/>
  </Base>
)
