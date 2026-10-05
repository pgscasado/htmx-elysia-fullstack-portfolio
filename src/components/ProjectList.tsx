import render from '@core/render';
import { readFileSync } from 'fs';
import type { Component } from '@root/types/component';
import { Icon } from '@components/Icon';
import { IconRow } from '@components/IconRow';
import { Img, Video } from '@components/Img';
import techs from '@components/util/techs';
import { projects, projectTechs, techName, type Project, type Tech } from '@components/util/projects';
import { t, localePath, localeToHtmlLang, type Key, type Locale } from '@i18n';

const tp = (lang: Locale, project: Project, field: string) => t(lang, `projects.items.${project.key}.${field}` as Key);

export const projectsPath = (lang: Locale, slug?: string) => `${localePath(lang, 'projects')}${slug ? `/${slug}` : ''}`;

// What the page ships as script files, gzipped: the server-side value of the readout, which the
// browser then replaces with what it actually received (see the script in pages/Projects.tsx)
const shippedKb = ['htmx.min.js', 'htmx.json-enc.js']
  .reduce((n, f) => n + Bun.gzipSync(new Uint8Array(readFileSync(`public/${f}`))).length, 0) / 1024;
const formatKb = (lang: Locale, kb: number) =>
  `${new Intl.NumberFormat(localeToHtmlLang[lang], { maximumFractionDigits: 1 }).format(kb)} KB`;

// The expanded part of a project row. Served on its own when htmx opens a row, and inline when
// /projects/<slug> is loaded directly.
export const ProjectDetails: Component<{ lang: Locale, project: Project }> = ({ lang, project }) => (
  <div class='project-details flex flex-col gap-6 pt-1 pb-10'>
    <ul class='flex flex-col gap-2 max-w-prose'>
      {Array.from({ length: project.details }, (_, i) => <li>{tp(lang, project, `d${i + 1}`)}</li>).join('')}
    </ul>
    {project.media.length
      ? <div class='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {project.media.map((m, i) => {
            const alt = tp(lang, project, `${m.key}Alt`);
            const frame = m.zoom ? undefined : 'rounded-lg border border-black/10 dark:border-white/10';
            const el = m.kind === 'video'
              ? <Video src={m.src} label={alt} width={m.width} height={m.height} class={frame}/>
              : <Img src={m.src} alt={alt} width={m.width} height={m.height} class={frame}/>;
            // an odd one out at the end gets centered on its own line
            const last = project.media.length % 2 === 1 && i === project.media.length - 1 && project.media.length > 1;
            return (
              <figure class={`flex flex-col${last ? ' md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}>
                {m.zoom ? <a href={m.src} target='_blank' rel='noopener noreferrer' class='w-full'>{el}</a> : el}
                <figcaption class='text-sm mt-2 opacity-70'>{tp(lang, project, `${m.key}Caption`)}</figcaption>
              </figure>
            );
          }).join('')}
        </div>
      : ''}
    {project.note ? <p class='text-xs opacity-60'>{tp(lang, project, 'note')}</p> : ''}
    <a class='text-link w-fit' href={project.link.href} target='_blank' rel='noopener noreferrer'>
      {t(lang, project.link.kind === 'repo' ? 'projects.repoLink' : 'projects.docLink')}
    </a>
  </div>
);

// One project: a native <details> (so it opens and closes without JS) whose body htmx fetches
// the first time it opens, pushing /projects/<slug> to the address bar.
const ProjectRow: Component<{ lang: Locale, project: Project, open: boolean }> = ({ lang, project, open }) => {
  const path = projectsPath(lang, project.slug);
  const body = `p-${project.slug}-body`;
  const line = tp(lang, project, 'line').replace('{kb}', `<span data-js-kb>${formatKb(lang, shippedKb)}</span>`);
  return (
    <details
      id={`p-${project.slug}`}
      class='disclosure'
      {...(open
        ? { open: '' }
        : { 'hx-get': path, 'hx-trigger': 'toggle once', 'hx-target': `#${body}`, 'hx-push-url': 'true' })}
    >
      <summary class='grid grid-cols-[1fr_auto] gap-x-6 py-5'>
        <span>
          <span class='block font-roboto-serif font-light text-2xl md:text-3xl'>{tp(lang, project, 'name')}</span>
          <span class='block mt-1 max-w-prose opacity-70'>{line}</span>
        </span>
        <span class='flex items-center gap-4 h-fit pt-2'>
          <span class='hidden sm:flex gap-3 text-xl opacity-60' aria-hidden='true'>
            {project.stack.map((s) => <i class={techs[s]}></i>).join('')}
          </span>
          <Icon name='chevron-down' class='chevron'/>
        </span>
      </summary>
      <div id={body}>
        {open
          ? <ProjectDetails lang={lang} project={project}/>
          : <noscript><a class='text-link' href={path}>{t(lang, 'projects.openDetails')}</a></noscript>}
      </div>
    </details>
  );
};

// The tech filter and the list. Filtering asks the server for this fragment again with
// ?tech=..., so it works the same without JS (plain links) and keeps the URL shareable.
export const ProjectList: Component<{ lang: Locale, tech?: Tech, open?: string }> = ({ lang, tech, open }) => {
  const base = projectsPath(lang);
  const visible = tech ? projects.filter((p) => p.stack.includes(tech)) : projects;
  return (
    <div id='project-list'>
      <nav aria-label={t(lang, 'projects.filterLabel')}>
        <IconRow compact class='text-2xl' items={projectTechs.map((s) => {
          // the active filter links back to the full list, so clicking it again clears it
          const href = s === tech ? base : `${base}?tech=${s}`;
          return {
            icon: techs[s], caption: techName[s] ?? s, href, current: s === tech,
            attrs: { id: `filter-${s}`, 'hx-get': href, 'hx-target': '#project-list', 'hx-swap': 'outerHTML', 'hx-push-url': 'true' },
          };
        })}/>
      </nav>
      <ul class='mt-10 flex flex-col'>
        {visible.map((p) => <li><ProjectRow lang={lang} project={p} open={p.slug === open}/></li>).join('')}
      </ul>
    </div>
  );
};
