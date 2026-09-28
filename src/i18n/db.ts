import mysql from 'mysql2/promise';

let pool: mysql.Pool | null = null;

export const getPool = (): mysql.Pool => {
  if (!pool) {
    const url = process.env.DATABASE_URL;
    if (!url) throw new Error('DATABASE_URL is not set');
    pool = mysql.createPool(url);
  }
  return pool;
};

export const TRANSLATIONS_TABLE_SQL = `
CREATE TABLE IF NOT EXISTS translations (
  \`key\` VARCHAR(191) NOT NULL,
  locale VARCHAR(5) NOT NULL,
  value TEXT NOT NULL,
  PRIMARY KEY (\`key\`, locale)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
`;

export const ensureSchema = async (): Promise<void> => {
  await getPool().query(TRANSLATIONS_TABLE_SQL);
};
