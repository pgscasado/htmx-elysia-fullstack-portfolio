import brands from '@components/util/brands';
import links from '@root/links.json';

export type Contact = {
  icon: keyof typeof brands;
  href: string;
  label: string;
  external: boolean;
};

// Hrefs and labels derived from src/links.json — edit that file, not this one.
export const contact = {
  discord: { icon: 'discord', href: `https://discord.com/users/${links.discord.userId}`, label: `${links.discord.handle} · ${links.discord.tag}`, external: true },
  github: { icon: 'github', href: `https://github.com/${links.github}`, label: `@${links.github}`, external: true },
  linkedin: { icon: 'linkedin', href: `https://linkedin.com/in/${links.linkedin}`, label: `in/${links.linkedin}`, external: true },
  email: { icon: 'google', href: `mailto:${links.email}`, label: links.email, external: false },
  whatsapp: { icon: 'whatsapp', href: `https://api.whatsapp.com/send?phone=${links.whatsapp.phone}`, label: links.whatsapp.display, external: true },
} satisfies Record<string, Contact>;

// Single source for every place that lists contacts (main page, footer bar).
export const contacts: Contact[] = [contact.discord, contact.github, contact.linkedin, contact.email, contact.whatsapp];
