import render from '@core/render';
import { readFileSync } from 'fs';
import type { Component } from '@root/types/component';
import { Icon } from '@components/Icon';
import { TechTags } from '@components/TechTag';
import { Img, Video } from '@components/Img';
import techs from '@components/util/techs';
import { projects, jobs, projectTechs, techName, type Project, type Tech } from '@components/util/projects';
import { t, localePath, localeToHtmlLang, type Key, type Locale } from '@i18n';

const tp = (lang: Locale, project: Project, field: string) => t(lang, `projects.items.${project.key}.${field}` as Key);

export const projectsPath = (lang: Locale, slug?: string) => `${localePath(lang, 'projects')}${slug ? `/${slug}` : ''}`;

// What the page ships as script files, gzipped: the server-side value of the readout, which the
// browser then replaces with what it actually received (see the script in pages/Projects.tsx)
const shippedKb = ['htmx.min.js', 'htmx.json-enc.js']
  .reduce((n, f) => n + Bun.gzipSync(new Uint8Array(readFileSync(`public/${f}`))).length, 0) / 1024;
const formatKb = (lang: Locale, kb: number) =>
  `${new Intl.NumberFormat(localeToHtmlLang[lang], { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(kb)} KB`;

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
const ProjectRow: Component<{ lang: Locale, project: Project, open: boolean, tech?: Tech }> = ({ lang, project, open, tech }) => {
  const path = projectsPath(lang, project.slug);
  const body = `p-${project.slug}-body`;
  // the readout is green like everything live on the site, with a hover note on where it comes
  // from; the script in pages/Projects.tsx counts it up from zero on load
  const kb = <span class='group'><span class='font-medium tabular-nums whitespace-nowrap text-interactive-600 dark:text-interactive' data-js-kb={shippedKb.toFixed(2)}>{formatKb(lang, shippedKb)}</span><span class='tooltip left-align group-hover:opacity-100'>{t(lang, 'projects.kbTooltip')}</span></span>;
  const line = tp(lang, project, 'line').replace('{kb}', kb);
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
          <TechTags stack={project.stack} match={tech} class='mt-3'/>
        </span>
        <Icon name='chevron-down' class='chevron mt-3'/>
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
// ?tech=..., so it works the same without JS (plain links) and keeps the URL shareable. A filter
// also lists the jobs that used the tech, so work-only stack (React, Nest...) isn't a dead end.
export const ProjectList: Component<{ lang: Locale, tech?: Tech, open?: string }> = ({ lang, tech, open }) => {
  const base = projectsPath(lang);
  const visible = tech ? projects.filter((p) => p.stack.includes(tech)) : projects;
  const work = tech ? jobs.filter((j) => j.stack.includes(tech)) : [];
  const name = tech ? techName[tech] ?? tech : '';
  const job = (id: string, field: string) => t(lang, `about.jobs.${id}.${field}` as Key);
  const chip = (href: string, current: boolean, id: string, label: string, icon?: string) => (
    <li>
      <a
        href={href}
        class='tech-chip'
        id={`filter-${id}`}
        hx-get={href}
        hx-target='#project-list'
        hx-swap='outerHTML'
        hx-push-url='true'
        {...(current ? { 'aria-current': 'true' } : {})}
      >{icon ? <i class={icon} aria-hidden='true'></i> : ''}{label}</a>
    </li>
  );
  return (
    <div id='project-list'>
      <nav aria-label={t(lang, 'projects.filterLabel')}>
        {/* the active filter links back to the full list, so clicking it again clears it */}
        <ul class='flex flex-wrap gap-2'>
          {chip(base, !tech, 'all', t(lang, 'projects.filterAll'))}
          {projectTechs.map((s) => chip(s === tech ? base : `${base}?tech=${s}`, s === tech, s, techName[s] ?? s, techs[s])).join('')}
        </ul>
      </nav>
      <div class='results'>
        {visible.length
          ? <ul class='mt-10 flex flex-col'>
              {visible.map((p) => <li><ProjectRow lang={lang} project={p} open={p.slug === open} tech={tech}/></li>).join('')}
            </ul>
          : <p class='mt-10 opacity-70'>{t(lang, 'projects.noProjects').replace('{tech}', name)}</p>}
        {work.length
          ? <section class='mt-14'>
              <h2 class='mb-2 opacity-60'>{t(lang, 'projects.workTitle').replace('{tech}', name)}</h2>
              <ul>
                {work.map(({ id }) => (
                  <li class='grid md:grid-cols-[11rem_1fr] gap-x-6 gap-y-1 py-3 items-baseline'>
                    <span class='text-sm opacity-60 tabular-nums'>{job(id, 'dates')}</span>
                    <span>
                      <a class='text-link text-xl' href={`${localePath(lang, 'about')}#job-${id}`}>{job(id, 'company')}</a>
                      <span class='block md:inline md:ml-3 opacity-70'>{job(id, 'role')}</span>
                    </span>
                  </li>
                )).join('')}
              </ul>
            </section>
          : ''}
      </div>
    </div>
  );
};
