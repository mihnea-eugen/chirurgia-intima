export * from "./proceduri-a";
import { proceduriA } from "./proceduri-a";
import { proceduriB } from "./proceduri-b";
import type { Procedure } from "./proceduri-a";

export const proceduri: Procedure[] = [...proceduriA, ...proceduriB];

export const getProcedureBySlug = (slug: string): Procedure | undefined =>
  proceduri.find((p) => p.slug === slug);

export const getAllProcedureSlugs = (): string[] => proceduri.map((p) => p.slug);
