import links from '@root/links.json';
import { contact } from '@components/util/contacts';
import { asset } from '@core/asset';
import { LOCALES, DEFAULT_LOCALE, localeToHtmlLang, localePath, t, type Key, type Locale, type PageId } from '@i18n';

export const PAGE_IDS: PageId[] = ['', 'about', 'projects', 'contact'];

const ogLocale: Record<Locale, string> = { pt: 'pt_BR', en: 'en_US', es: 'es_ES' };

const escapeAttr = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const absoluteUrl = (path: string) => `${links.site}${path}`;

// versioned like every other asset, so LinkedIn/WhatsApp re-scrape the preview when it changes
const ogImage = absoluteUrl(asset('og.png'));

// Tells Google who the site is about, and ties it to the GitHub/LinkedIn profiles.
const structuredData = () => JSON.stringify({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': absoluteUrl('/#person'),
      name: 'Pedro Casado',
      url: absoluteUrl('/'),
      image: ogImage,
      jobTitle: 'Full-stack Developer',
      address: { '@type': 'PostalAddress', addressLocality: 'Maringá', addressRegion: 'PR', addressCountry: 'BR' },
      sameAs: [contact.github.href, contact.linkedin.href],
    },
    {
      '@type': 'WebSite',
      '@id': absoluteUrl('/#website'),
      name: 'Pedro Casado',
      url: absoluteUrl('/'),
      inLanguage: LOCALES.map((l) => localeToHtmlLang[l]),
      publisher: { '@id': absoluteUrl('/#person') },
    },
  ],
}).replace(/</g, '\\u003c');

// Everything search engines and link previews read from <head>, per page and language.
export const seoHead = (lang: Locale, page: PageId) => {
  const title = escapeAttr(t(lang, `seo.${page || 'main'}Title` as Key));
  const description = escapeAttr(t(lang, `seo.${page || 'main'}Description` as Key));
  const url = absoluteUrl(localePath(lang, page));
  const alternates = LOCALES.map((l) => `<link rel="alternate" hreflang="${localeToHtmlLang[l]}" href="${absoluteUrl(localePath(l, page))}" />`).join('\n  ');
  return `<title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${url}" />
  ${alternates}
  <link rel="alternate" hreflang="x-default" href="${absoluteUrl(localePath(DEFAULT_LOCALE, page))}" />
  <meta property="og:type" content="${page ? 'website' : 'profile'}" />
  <meta property="og:site_name" content="Pedro Casado" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:image" content="${ogImage}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:locale" content="${ogLocale[lang]}" />
  ${LOCALES.filter((l) => l !== lang).map((l) => `<meta property="og:locale:alternate" content="${ogLocale[l]}" />`).join('\n  ')}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${ogImage}" />
  <script type="application/ld+json">${structuredData()}</script>`;
};

export const robotsTxt = () => `User-agent: *
Allow: /

Sitemap: ${absoluteUrl('/sitemap.xml')}
`;

export const sitemapXml = () => {
  const urls = PAGE_IDS.flatMap((page) => LOCALES.map((lang) => `  <url>
    <loc>${absoluteUrl(localePath(lang, page))}</loc>
${LOCALES.map((l) => `    <xhtml:link rel="alternate" hreflang="${localeToHtmlLang[l]}" href="${absoluteUrl(localePath(l, page))}"/>`).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(localePath(DEFAULT_LOCALE, page))}"/>
  </url>`));
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
};
