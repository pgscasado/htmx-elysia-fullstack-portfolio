import { getPool } from './db';
import { flatten, type DotPaths } from './flatten';
import { pt, type Dictionary } from './dictionaries/pt';
import { en } from './dictionaries/en';
import { es } from './dictionaries/es';
import { LOCALES, type Locale } from './locales';

export type Key = DotPaths<Dictionary>;

const fallback: Record<Locale, Record<string, string>> = {
  pt: flatten(pt),
  en: flatten(en),
  es: flatten(es),
};

// Served from memory on every request — the DB is only touched at boot and on
// refresh, never on the hot path, so this stays as fast as hardcoded strings.
let cache: Record<Locale, Record<string, string>> = fallback;

type Row = { key: string; locale: Locale; value: string };

export const refreshCache = async (): Promise<void> => {
  try {
    const pool = getPool();
    const [rows] = await pool.query('SELECT `key`, locale, value FROM translations');
    const next: Record<Locale, Record<string, string>> = { pt: {}, en: {}, es: {} };
    for (const row of rows as Row[]) {
      if (!next[row.locale]) continue;
      next[row.locale][row.key] = row.value;
    }
    // Only swap in the fresh set if every locale actually came back with rows —
    // otherwise keep serving the last-known-good cache (or the bundled fallback).
    if (LOCALES.every((l) => Object.keys(next[l]).length > 0)) {
      cache = next;
    } else {
      console.warn('[i18n] refresh returned incomplete data, keeping previous cache');
    }
  } catch (err) {
    console.error('[i18n] failed to refresh translations from DB, keeping last-good cache:', err);
  }
};

export const startAutoRefresh = (intervalMs = 5 * 60 * 1000): void => {
  const timer = setInterval(refreshCache, intervalMs);
  timer.unref?.();
};

export const t = (locale: Locale, key: Key): string => {
  const value = cache[locale]?.[key] ?? fallback[locale]?.[key];
  if (value === undefined) {
    console.warn(`[i18n] missing key "${key}" for locale "${locale}"`);
    return key;
  }
  return value;
};
