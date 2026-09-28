import brands from '@components/util/brands';

export type Contact = {
  icon: keyof typeof brands;
  href: string;
  label: string;
  external: boolean;
};

// Single source for every place that lists contacts (main page, footer bar).
export const contacts: Contact[] = [
  { icon: 'discord', href: 'https://discordapp.com/users/188142088691384330', label: '@zeroone · zero-one#8699', external: true },
  { icon: 'github', href: 'https://github.com/pgscasado', label: '@pgscasado', external: true },
  { icon: 'linkedin', href: 'https://linkedin.com/in/pgscasado', label: 'in/pgscasado', external: true },
  { icon: 'google', href: 'mailto:pgscasado.pessoal@gmail.com', label: 'pgscasado.pessoal@gmail.com', external: false },
  { icon: 'whatsapp', href: 'https://api.whatsapp.com/send?phone=5583981661966', label: '+55 (83) 98166-1966', external: true },
];
