import { pgEnum } from "drizzle-orm/pg-core";

const catVals = ["Corporate", "Professional"] as const;
export const catEnum = pgEnum("category", catVals);
export type Category = (typeof catVals)[number];

const roleVals = [
  "All Rounder",
  "Batsman",
  "Fast Bowler",
  "Spinner",
  "Wicket Keeper",
] as const;
export const roleEnum = pgEnum("role", roleVals);
export type Role = (typeof roleVals)[number];

export interface Player {
  id: string;
  category: Category;
  role: Role;
  name: string;
  email: string;
  age: number;
  phone: string;
  trialdate: string;
  trialslot: number;
  haspaid: boolean;
}

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  src: string;
};
