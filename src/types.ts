export enum Category {
  Corporate = "Corporate",
  Professional = "Professional",
}
export enum Role {
  AllRounder = "All Rounder",
  Batsman = "Batsman",
  FastBowler = "Fast Bowler",
  Spinner = "Spinner",
  WicketKeeper = "Wicket Keeper",
}

export interface Player {
  category: Category;
  role: Role;
  name: string;
  email: string;
  age: number;
  phone: string;
  trialDate: string;
  trialSlot: number;
  hasPaid: boolean;
}

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  src: string;
};
