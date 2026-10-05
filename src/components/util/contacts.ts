import brands from '@components/util/brands';
import links from '@root/links.json';

export type Contact = {
  icon: keyof typeof brands;
  name: string;
  href: string;
  label: string;
  external: boolean;
};

// Hrefs and labels derived from src/links.json. Edit that file, not this one.
export const contact = {
  discord: { icon: 'discord', name: 'Discord', href: `https://discord.com/users/${links.discord.userId}`, label: links.discord.handle, external: true },
  github: { icon: 'github', name: 'GitHub', href: `https://github.com/${links.github}`, label: `@${links.github}`, external: true },
  linkedin: { icon: 'linkedin', name: 'LinkedIn', href: `https://linkedin.com/in/${links.linkedin}`, label: `in/${links.linkedin}`, external: true },
  email: { icon: 'google', name: 'Email', href: `mailto:${links.email}`, label: links.email, external: false },
  whatsapp: { icon: 'whatsapp', name: 'WhatsApp', href: `https://api.whatsapp.com/send?phone=${links.whatsapp.phone}`, label: links.whatsapp.display, external: true },
} satisfies Record<string, Contact>;

// Single source for every place that lists contacts (main page, footer bar, contact page),
// in order of preference.
export const contacts: Contact[] = [contact.email, contact.whatsapp, contact.linkedin, contact.github, contact.discord];
