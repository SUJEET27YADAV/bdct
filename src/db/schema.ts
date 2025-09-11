import { catEnum, roleEnum } from "@/types";
import {
  pgTable,
  serial,
  varchar,
  integer,
  boolean,
} from "drizzle-orm/pg-core";

export const players = pgTable("players", {
  id: serial("id").primaryKey(),
  category: catEnum("category").notNull().default("Corporate"),
  role: roleEnum("role").notNull().default("Batsman"),
  name: varchar("name", { length: 100 }).notNull(),
  age: integer("age").notNull(),
  email: varchar("email", { length: 100 }).notNull().unique(),
  phone: varchar("phone", { length: 13 }).notNull().unique(),
  trialdate: varchar("trialdate", { length: 10 }).notNull(),
  trialslot: integer("trialslot").notNull(),
  hasPaid: boolean("haspaid").notNull().default(false),
});
