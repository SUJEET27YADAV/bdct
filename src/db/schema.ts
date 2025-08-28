import {
  pgTable,
  serial,
  varchar,
  integer,
  boolean,
} from "drizzle-orm/pg-core";

export const players = pgTable("players", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  age: integer("age").notNull(),
  team: varchar("team", { length: 100 }).notNull(),
  contact: varchar("contact", { length: 20 }).notNull(),
  hasPaid: boolean("haspaid").notNull().default(false),
});
