import links from '@root/links.json';
import techs from '@components/util/techs';

export type Tech = keyof typeof techs;

export type Media = {
  kind: 'img' | 'video';
  src: string;
  width: string;
  height: string;
  // i18n suffix: projects.items.<key>.<media>Alt / <media>Caption
  key: string;
  // code screenshots open full size in a new tab; demos are framed instead
  zoom?: boolean;
};

export type Project = {
  slug: string;
  // i18n key under projects.items
  key: string;
  stack: Tech[];
  link: { href: string, kind: 'repo' | 'doc' };
  details: number;
  media: Media[];
  note?: boolean;
};

// Display order. Text lives in the dictionaries (projects.items.<key>.*); adding a project is
// an entry here plus its copy there.
export const projects: Project[] = [
  {
    slug: 'portfolio', key: 'portfolio', stack: ['bun', 'htmx', 'typescript', 'tailwindcss', 'html5', 'css3'],
    link: { href: links.projects.htmxElysia, kind: 'repo' }, details: 3,
    media: [
      { kind: 'img', src: '/static/projects/portfolio/render.png', width: '855', height: '692', key: 'render', zoom: true },
      { kind: 'img', src: '/static/projects/portfolio/navbar.png', width: '695', height: '560', key: 'nav', zoom: true },
      { kind: 'img', src: '/static/projects/portfolio/router.png', width: '762', height: '472', key: 'router', zoom: true },
    ],
  },
  {
    slug: 'cli-authenticator', key: 'cliAuthenticator', stack: ['nodejs', 'javascript'],
    link: { href: links.projects.cliAuthenticator, kind: 'repo' }, details: 3, note: true,
    media: [
      { kind: 'img', src: '/static/projects/cli-authenticator/live.gif', width: '792', height: '560', key: 'live' },
      { kind: 'video', src: '/static/projects/cli-authenticator/camera.mp4', width: '792', height: '560', key: 'camera' },
    ],
  },
  {
    slug: 'ai-agent-manager', key: 'agentManager', stack: ['ai', 'elixir', 'postgresql'],
    link: { href: links.projects.aiAgentManager, kind: 'repo' }, details: 3, note: true,
    media: [
      { kind: 'img', src: '/static/projects/ai-agent-manager/chat.gif', width: '882', height: '628', key: 'chat' },
      { kind: 'img', src: '/static/projects/ai-agent-manager/events.gif', width: '882', height: '628', key: 'events' },
    ],
  },
  {
    slug: 'protocols', key: 'protocols', stack: ['angularjs', 'react', 'materialui', 'html5', 'css3', 'nodejs', 'nestjs', 'express', 'mongodb', 'redis'],
    link: { href: links.projects.item3, kind: 'doc' }, details: 2, media: [],
  },
  {
    slug: 'word-signification', key: 'signification', stack: ['javascript'],
    link: { href: links.projects.item4, kind: 'doc' }, details: 3, media: [],
  },
];

// Work experience, newest first (the about timeline). Text lives in about.jobs.<id>.*; the stack
// lets the projects filter also answer "where did he use X" for tech with no public project.
export type Job = { id: string, stack: Tech[] };
export const jobs: Job[] = [
  { id: 'shk', stack: ['typescript', 'javascript', 'nodejs', 'react', 'materialui', 'nestjs', 'express', 'html5', 'css3', 'postgresql', 'redis', 'amazonwebservices'] },
  { id: 'vinta', stack: ['ai', 'typescript', 'nodejs', 'react', 'tailwindcss', 'html5', 'css3', 'postgresql', 'redis', 'amazonwebservices'] },
  { id: 'teddy', stack: ['ai', 'typescript', 'javascript', 'nodejs', 'nestjs', 'postgresql', 'redis', 'amazonwebservices'] },
  { id: 'elife', stack: ['ai', 'typescript', 'javascript', 'nodejs', 'bun', 'react', 'tailwindcss', 'html5', 'css3', 'express', 'postgresql', 'mongodb', 'redis', 'amazonwebservices', 'googlecloud'] },
  { id: 'ifpb', stack: ['angularjs'] },
];

// The filter bar, in this order: what should be seen first. Anything a project or job uses that
// is missing here goes at the end, so a new stack entry never vanishes from the bar.
const techOrder: Tech[] = [
  'ai', 'typescript', 'react', 'nestjs', 'nodejs', 'bun', 'htmx', 'materialui', 'tailwindcss',
  'elixir', 'postgresql', 'redis', 'amazonwebservices', 'googlecloud', 'express', 'angularjs', 'mongodb', 'javascript',
  'html5', 'css3',
];
const usedTechs = new Set([...projects, ...jobs].flatMap((x) => x.stack));
export const projectTechs: Tech[] = [...new Set([...techOrder, ...usedTechs])].filter((s) => usedTechs.has(s));

export const findProject = (slug: string) => projects.find((p) => p.slug === slug);
export const isProjectTech = (tech: unknown): tech is Tech => projectTechs.includes(tech as Tech);

// Display names for the tech icons (captions, filter labels). Brand names, not translated.
export const techName: Partial<Record<Tech, string>> = {
  typescript: 'TypeScript', javascript: 'JavaScript', tailwindcss: 'Tailwind CSS', nodejs: 'Node.js',
  elixir: 'Elixir', postgresql: 'PostgreSQL', angularjs: 'Angular', express: 'Express', mongodb: 'MongoDB',
  nestjs: 'NestJS', denojs: 'Deno', docker: 'Docker', redis: 'Redis', amazonwebservices: 'AWS',
  html5: 'HTML', css3: 'CSS', react: 'React', nextjs: 'Next.js', googlecloud: 'Google Cloud',
  bun: 'Bun', htmx: 'HTMX', materialui: 'Material UI', ai: 'AI',
};
