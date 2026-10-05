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
    slug: 'portfolio', key: 'portfolio', stack: ['typescript', 'tailwindcss'],
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
    slug: 'ai-agent-manager', key: 'agentManager', stack: ['elixir', 'postgresql'],
    link: { href: links.projects.aiAgentManager, kind: 'repo' }, details: 3, note: true,
    media: [
      { kind: 'img', src: '/static/projects/ai-agent-manager/chat.gif', width: '882', height: '628', key: 'chat' },
      { kind: 'img', src: '/static/projects/ai-agent-manager/events.gif', width: '882', height: '628', key: 'events' },
    ],
  },
  {
    slug: 'protocols', key: 'protocols', stack: ['angularjs', 'nodejs', 'express', 'mongodb'],
    link: { href: links.projects.item3, kind: 'doc' }, details: 2, media: [],
  },
  {
    slug: 'word-signification', key: 'signification', stack: ['javascript'],
    link: { href: links.projects.item4, kind: 'doc' }, details: 3, media: [],
  },
];

// every tech some project uses, in first-seen order: the filter bar
export const projectTechs: Tech[] = [...new Set(projects.flatMap((p) => p.stack))];

export const findProject = (slug: string) => projects.find((p) => p.slug === slug);
export const isProjectTech = (tech: unknown): tech is Tech => projectTechs.includes(tech as Tech);

// Display names for the tech icons (captions, filter labels). Brand names, not translated.
export const techName: Partial<Record<Tech, string>> = {
  typescript: 'TypeScript', javascript: 'JavaScript', tailwindcss: 'Tailwind CSS', nodejs: 'Node.js',
  elixir: 'Elixir', postgresql: 'PostgreSQL', angularjs: 'Angular', express: 'Express', mongodb: 'MongoDB',
  nestjs: 'NestJS', denojs: 'Deno', docker: 'Docker', redis: 'Redis', amazonwebservices: 'AWS',
  html5: 'HTML', css3: 'CSS', react: 'React', nextjs: 'Next.js', googlecloud: 'Google Cloud',
};
