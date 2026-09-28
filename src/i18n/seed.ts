// One-off / re-runnable seed: upserts the bundled pt/en/es dictionaries into the
// `translations` table. Safe to re-run — existing rows are updated, not duplicated.
// Usage: bun run src/i18n/seed.ts
import { pt } from './dictionaries/pt';
import { en } from './dictionaries/en';
import { es } from './dictionaries/es';
import { flatten } from './flatten';
import { ensureSchema, getPool } from './db';
import { LOCALES, type Locale } from './locales';

const dictionaries: Record<Locale, typeof pt> = { pt, en, es };

const seed = async () => {
  await ensureSchema();
  const pool = getPool();

  const rows: [string, Locale, string][] = [];
  for (const locale of LOCALES) {
    const flat = flatten(dictionaries[locale]);
    for (const [key, value] of Object.entries(flat)) {
      rows.push([key, locale, value]);
    }
  }

  await pool.query(
    'INSERT INTO translations (`key`, locale, value) VALUES ? ON DUPLICATE KEY UPDATE value = VALUES(value)',
    [rows],
  );

  console.log(`Seeded ${rows.length} translation rows (${LOCALES.length} locales).`);
  await pool.end();
};

seed().catch((err) => {
  console.error('[i18n] seed failed:', err);
  process.exit(1);
});
