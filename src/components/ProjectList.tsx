import render from '@core/render';
import { readFileSync } from 'fs';
import type { Component } from '@root/types/component';
import { Icon } from '@components/Icon';
import { TechTags } from '@components/TechTag';
import { Img, Video, versioned } from '@components/Img';
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
    {/* the command to try a CLI, in the site's green. One click selects all of it (select-all),
        and the "$" prompt stays out of what gets copied */}
    {project.npx
      ? <p class='flex flex-wrap items-center gap-x-3 gap-y-2'>
          <span class='text-sm opacity-70'>{t(lang, 'projects.tryIt')}</span>
          <code class='font-source-code text-sm md:text-base px-3.5 py-2 rounded-lg border border-interactive-600/30 bg-interactive-600/10 text-interactive-800 dark:border-interactive/30 dark:bg-interactive/10 dark:text-interactive select-all'><span class='select-none opacity-50'>$ </span>{project.npx}</code>
        </p>
      : ''}
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
                {m.zoom ? <a href={versioned(m.src)} target='_blank' rel='noopener noreferrer' class='w-full'>{el}</a> : el}
                <figcaption class='text-sm mt-2 opacity-70'>{tp(lang, project, `${m.key}Caption`)}</figcaption>
              </figure>
            );
          }).join('')}
        </div>
      : ''}
    {project.note ? <p class='text-xs opacity-60'>{tp(lang, project, 'note')}</p> : ''}
    <p class='flex flex-wrap gap-x-6 gap-y-2'>
      {[project.link, ...(project.extra ?? [])].map((l) => (
        <a class='text-link w-fit' href={l.href} target='_blank' rel='noopener noreferrer'>{t(lang, linkLabel[l.kind])}</a>
      )).join('')}
    </p>
  </div>
);

const linkLabel: Record<Project['link']['kind'] | NonNullable<Project['extra']>[number]['kind'], Key> = {
  repo: 'projects.repoLink',
  doc: 'projects.docLink',
  site: 'projects.siteLink',
  npm: 'projects.npmLink',
};

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
      class='disclosure glide-row -mx-4 px-4 rounded-xl scroll-mt-4'
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
// how many tech chips a phone shows before "show all"
const FOLDED_AFTER = 13;

export const ProjectList: Component<{ lang: Locale, tech?: Tech, open?: string }> = ({ lang, tech, open }) => {
  const base = projectsPath(lang);
  const visible = tech ? projects.filter((p) => p.stack.includes(tech)) : projects;
  const work = tech ? jobs.filter((j) => j.stack.includes(tech)) : [];
  const name = tech ? techName[tech] ?? tech : '';
  const job = (id: string, field: string) => t(lang, `about.jobs.${id}.${field}` as Key);
  const chip = (href: string, current: boolean, id: string, label: string, icon?: string, extra?: boolean) => (
    <li class={extra ? 'extra' : ''}>
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
        {/* the active filter links back to the full list, so clicking it again clears it. On
            phones only the first FOLDED_AFTER techs show until the last chip, a CSS-only checkbox, unfolds the rest
            (.tech-filter in input.css); the active one always shows */}
        <ul class='tech-filter flex flex-wrap gap-2'>
          {chip(base, !tech, 'all', t(lang, 'projects.filterAll'))}
          {projectTechs.map((s, i) => chip(s === tech ? base : `${base}?tech=${s}`, s === tech, s, techName[s] ?? s, techs[s], i >= FOLDED_AFTER && s !== tech)).join('')}
          {projectTechs.length > FOLDED_AFTER
            ? <li class='more'>
                <label class='tech-chip'>
                  <input type='checkbox' class='sr-only'/>
                  <span class='when-folded'>{t(lang, 'projects.showAllTechs').replace('{n}', String(projectTechs.length - FOLDED_AFTER))}</span>
                  <span class='when-unfolded'>{t(lang, 'projects.showFewerTechs')}</span>
                </label>
              </li>
            : ''}
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
