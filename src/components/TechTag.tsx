import render from '@core/render';
import type { Component } from '@root/types/component';
import techs from '@components/util/techs';
import { techName, type Tech } from '@components/util/projects';

// A small labelled tech pill (project rows, about timeline). `match` lights it up, e.g. when it
// is the tech the projects list is filtered by.
export const TechTag: Component<{ tech: Tech, match?: boolean }> = ({ tech, match }) => (
  <span class={`tech-tag${match ? ' match' : ''}`}><i class={techs[tech]} aria-hidden='true'></i>{techName[tech] ?? tech}</span>
);

export const TechTags: Component<{ stack: Tech[], match?: Tech, class?: string }> = ({ stack, match, class: classes }) => (
  <span class={`flex flex-wrap gap-2${classes ? ' ' + classes : ''}`}>
    {stack.map((s) => <TechTag tech={s} match={s === match}/>).join('')}
  </span>
);
