import render from '@core/render';
import type { Component } from '@root/types/component';

const escape = (c: string) => c === '&' ? '&amp;' : c === '<' ? '&lt;' : c;

// Types `text` in one character at a time with a caret riding along, which stays blinking at the
// end (see .typed in input.css). Each character is a span whose animation-delay is its index
// times the speed, so it's CSS only and wraps like normal text even in a proportional font.
// A zero-width space (​) becomes a <wbr>, a line break opportunity that isn't typed.
// Short headlines type at 0.1s per character, long ones speed up to 0.05s.
export const Typed: Component<{ text: string }> = ({ text }) => {
  const chars = [...text];
  const count = chars.filter((c) => c !== '​').length;
  const speed = Math.min(0.1, Math.max(0.05, 1.5 / count));
  let i = 0;
  return (
    <span class='typed' style={`--type-speed:${speed.toFixed(3)}s`}>
      <span class='sr-only'>{escape(text.replace(/​/g, ''))}</span>
      <span aria-hidden='true'>
        {chars.map((c) => c === '​'
          ? '<wbr>'
          : <span class={`typed-c${i === count - 1 ? ' typed-end' : ''}`} style={`--i:${i++}`}>{escape(c)}</span>
        ).join('')}
      </span>
    </span>
  );
};
