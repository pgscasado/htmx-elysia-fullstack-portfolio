type NestedStrings = { [key: string]: string | NestedStrings };

export const flatten = (obj: NestedStrings, prefix = ''): Record<string, string> => {
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (typeof v === 'string') out[path] = v;
    else Object.assign(out, flatten(v, path));
  }
  return out;
};

// Dot-path key union derived from a nested string dictionary, e.g. 'main.heroGreetingPre'.
export type DotPaths<T, P extends string = ''> = T extends string
  ? P
  : { [K in keyof T & string]: DotPaths<T[K], P extends '' ? K : `${P}.${K}`> }[keyof T & string];
