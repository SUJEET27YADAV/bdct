import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Create table if not exists
await pool.query(`
  CREATE TABLE IF NOT EXISTS players (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INTEGER NOT NULL,
    team VARCHAR(100) NOT NULL,
    contact VARCHAR(20) NOT NULL,
    haspaid BOOLEAN NOT NULL DEFAULT FALSE
  );
`);

export const db = drizzle(pool, { schema });
