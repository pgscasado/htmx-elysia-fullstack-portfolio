import render from '@core/render';
import type { Component } from '@root/types/component';

export const Highlight: Component<{ children?: string, class?: string, interactive?: boolean }> = ({ children, class: classes, interactive }) => (
  <span class={`${interactive ? 'text-interactive-600' : 'text-secondary'} ${interactive ? 'dark:text-interactive' : 'dark:text-primary'}${classes ? ' '+classes : ''}`}>{children}</span>
)