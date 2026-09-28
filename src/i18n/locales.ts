export const LOCALES = ['pt', 'en', 'es'] as const;
export type Locale = typeof LOCALES[number];
export const DEFAULT_LOCALE: Locale = 'pt';

export const localeToHtmlLang: Record<Locale, string> = {
  pt: 'pt-BR',
  en: 'en',
  es: 'es',
};

export const localeLabel: Record<Locale, string> = {
  pt: 'PT',
  en: 'EN',
  es: 'ES',
};

export type PageId = '' | 'about' | 'projects' | 'contact';

// pt-BR keeps today's bare paths (/, /about, ...); en/es get a locale prefix.
export const localePath = (lang: Locale, page: PageId = ''): string => {
  const suffix = page ? `/${page}` : '';
  return lang === DEFAULT_LOCALE ? (suffix || '/') : `/${lang}${suffix}`;
};
