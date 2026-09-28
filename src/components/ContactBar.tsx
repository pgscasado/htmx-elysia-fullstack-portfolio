import render from '@core/render';
import type { Component } from '@root/types/component';
import brands from '@components/util/brands';
import { contacts } from '@components/util/contacts';
import { t, type Locale } from '@i18n';

// A compact row of contact icons (handle on hover) for pages other than the main one.
export const ContactBar: Component<{ lang: Locale, class?: string }> = ({ lang, class: classes }) => (
  <div class={`flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 ${classes ?? ''}`}>
    <span class='text-sm opacity-80'>{t(lang, 'footer.contactsLabel')}</span>
    <ul class='flex items-center gap-4 text-xl'>
      {contacts.map((c) => (
        <li>
          <a
            href={c.href}
            aria-label={c.label}
            class='group hover:text-interactive transition-colors'
            {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            <i class={brands[c.icon]}></i>
            <span class='tooltip group-hover:opacity-100'>{c.label}</span>
          </a>
        </li>
      )).join('')}
    </ul>
  </div>
)
