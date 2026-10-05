import render from '@core/render';
import { Navbar } from '@components';
import { Footer } from '@components/Footer';
import { ProjectList } from '@components/ProjectList';
import { Base } from '@pages';
import type { Tech } from '@components/util/projects';
import { t, localePath, type Locale } from '@i18n';

// `tech` filters the list, `open` renders one project already expanded (/projects/<slug>)
export default ({ lang, tech, open }: { lang: Locale, tech?: Tech, open?: string }) => (
  <Base lang={lang} page='projects' class='flex flex-col min-h-[100svh]'>
    <Navbar lang={lang} active='projects'/>
    <main class='flex-1 mx-auto w-[90vw] md:w-[70vw] pt-[6vh] pb-24'>
      <h1 class='mb-12 font-roboto-serif font-light leading-tight text-[clamp(2.25rem,6vw,3.75rem)] text-secondary dark:text-primary'>{t(lang, 'projects.title')}</h1>
      <ProjectList lang={lang} tech={tech} open={open}/>
      <p class='mt-20 opacity-80'>{t(lang, 'projects.moreText')} <a hx-boost='true' class='text-link' href={localePath(lang, 'contact')}>{t(lang, 'projects.moreLink')}</a></p>
    </main>
    <Footer lang={lang} currentPage='projects'/>
    <script>
      {`
        // Swaps the server's estimate in the portfolio row for the JavaScript this visit actually
        // received: script files as the browser measured them, plus the inline scripts. Cached
        // files can report 0 bytes, in which case the estimate stays.
        if (!window.__jsKb) {
          window.__jsKb = () => {
            const files = performance.getEntriesByType('resource').filter((e) => e.initiatorType === 'script')
            if (!files.length || files.some((e) => !(e.encodedBodySize || e.transferSize))) return
            let bytes = files.reduce((n, e) => n + (e.encodedBodySize || e.transferSize), 0)
            for (const s of document.scripts) if (!s.src && (!s.type || /javascript|module/.test(s.type))) bytes += s.text.length
            const kb = new Intl.NumberFormat(document.documentElement.lang, { maximumFractionDigits: 1 }).format(bytes / 1024)
            for (const el of document.querySelectorAll('[data-js-kb]')) el.textContent = kb + ' KB'
          }
          addEventListener('load', window.__jsKb)
          document.addEventListener('htmx:afterSettle', window.__jsKb)
        }
      `}
    </script>
  </Base>
)
