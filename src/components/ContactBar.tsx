import render from '@core/render';
import type { Component } from '@root/types/component';
import brands from '@components/util/brands';
import { contacts } from '@components/util/contacts';
import type { Locale } from '@i18n';

// A compact row of contact icons (handle on hover) for the footer of pages other than the main one.
export const ContactBar: Component<{ lang: Locale, class?: string }> = ({ class: classes }) => (
  <ul class={`flex items-center gap-5 text-xl ${classes ?? ''}`}>
    {contacts.map((c) => (
      <li>
        <a
          href={c.href}
          aria-label={`${c.name}: ${c.label}`}
          class='group hover:text-interactive transition-colors'
          {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          <i class={brands[c.icon]}></i>
          <span class='tooltip group-hover:opacity-100'>{c.label}</span>
        </a>
      </li>
    )).join('')}
  </ul>
)
