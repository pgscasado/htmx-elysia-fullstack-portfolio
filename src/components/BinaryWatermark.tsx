import render from '@core/render';
import type { Component } from '@root/types/component';

// literal class names so Tailwind picks them up
const sizes = ['text-xl', 'text-2xl', 'text-3xl'];

// Sparse 0s and 1s scattered behind the hero. A jittered grid keeps them spread out
// (no clumps, no big holes) while each render gets a fresh layout. The parent needs
// `relative isolate overflow-hidden`.
export const BinaryWatermark: Component<{ cols?: number, rows?: number, density?: number }> = ({ cols = 6, rows = 5, density = 0.55 }) => {
  const digits: string[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (Math.random() > density) continue;
      // keep a margin inside each cell so neighbours never touch
      const left = ((c + 0.15 + Math.random() * 0.7) / cols) * 100;
      const top = ((r + 0.15 + Math.random() * 0.7) / rows) * 100;
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      digits.push(
        <span class={`absolute ${size}`} style={`left:${left.toFixed(1)}%;top:${top.toFixed(1)}%`}>
          {Math.random() < 0.5 ? '0' : '1'}
        </span>
      );
    }
  }
  return (
    <div aria-hidden='true' class='absolute inset-0 -z-10 pointer-events-none select-none font-source-code text-base-light-800/[.20] dark:text-base-dark-400/[.20]'>
      {digits.join('')}
    </div>
  );
};
