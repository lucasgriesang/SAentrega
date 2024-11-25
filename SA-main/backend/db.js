import 'dotenv/config';
import postgres from 'postgres';

const sql = postgres({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: 5432,
});

export { sql };
