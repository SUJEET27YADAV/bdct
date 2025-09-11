import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// await pool.query(`DROP TABLE IF EXISTS players;`);

// //Create table if not exists
// await pool.query(`
//   CREATE TABLE IF NOT EXISTS players (
//   id SERIAL PRIMARY KEY,
//   category cat_enum NOT NULL DEFAULT 'Corporate',
//   role role_enum NOT NULL DEFAULT 'Batsman',
//   name VARCHAR(100) NOT NULL,
//   age INTEGER NOT NULL,
//   email VARCHAR(100) NOT NULL UNIQUE,
//   phone VARCHAR(13) NOT NULL UNIQUE,
//   trialdate VARCHAR(10) NOT NULL,
//   trialslot INTEGER NOT NULL,
//   haspaid BOOLEAN NOT NULL DEFAULT FALSE
// );
// `);

// await pool.query(`
//   INSERT INTO players (
//   category,role,name,age,email,phone,trialdate,trialslot,haspaid) VALUES ('Corporate','Fast Bowler','Rishabh',24,'rishabh@rl.com','9998889999','22-09-2025','0',false)
// `);

export const db = drizzle(pool, { schema });
