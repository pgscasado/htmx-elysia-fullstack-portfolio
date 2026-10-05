import render from '@core/render';
import type { Component } from '@root/types/component';

export type IconRowItem = {
  icon: string;
  caption: string;
  // read before the caption by screen readers only, e.g. the platform behind a handle
  srPrefix?: string;
  href?: string;
  external?: boolean;
  current?: boolean;
  // extra attributes for the link (htmx, ids)
  attrs?: Record<string, string>;
};

// A row of icons sharing one caption line (see .icon-row in input.css): with a mouse, hovering
// or focusing an icon shows its caption below the row and fades the others; on touch every
// caption is visible. `compact` lays touch screens out as a grid instead of a list.
export const IconRow: Component<{ items: IconRowItem[], compact?: boolean, class?: string }> = ({ items, compact, class: classes }) => (
  <ul class={`icon-row${compact ? ' compact' : ''}${classes ? ' ' + classes : ''}`}>
    {items.map((item) => {
      const inner = (
        <i class={item.icon} aria-hidden='true'></i>
      ) + (
        <span class='caption'>{item.srPrefix ? <span class='sr-only'>{`${item.srPrefix} `}</span> : ''}{item.caption}</span>
      );
      return (
        <li>
          {item.href
            ? <a
                href={item.href}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                {...(item.current ? { 'aria-current': 'true' } : {})}
                {...(item.attrs ?? {})}
              >{inner}</a>
            : <span>{inner}</span>}
        </li>
      );
    }).join('')}
  </ul>
);
