import render, { renderFragment } from '@core/render';
import { Component } from '@root/types/component';
import techsObj from '@components/util/techs';
import brandsObj from '@components/util/brands';

type techName = keyof typeof techsObj;
type brandName = keyof typeof brandsObj;
type iconName = techName | brandName;

export const IconStack: Component<{
  icons: (iconName | { icon: iconName, href: string, children: string })[],
  class?: string
}> = ({ icons, class: classes }) => (
  <>
    {
      icons.map(icon => {
        if (typeof icon === 'object') {
          return (
            <a href={icon.href} class='group'>
              <i class={`${techsObj[icon.icon as techName] ? techsObj[icon.icon as techName] : brandsObj[icon.icon as brandName]}${classes ? ' ' + classes : ''}`}></i>
              { icon.children ? icon.children : '' }
            </a>
          )
        } else {
          return (
            <i class={`${techsObj[icon as techName] ? techsObj[icon as techName] : brandsObj[icon as brandName]}${classes ? ' ' + classes : ''}`}></i>
          )
        }
      }).join('\n')
    }
  </>
)
