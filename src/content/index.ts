import { vi } from "./vi";
import { en } from "./en";
import type { Content, Lang } from "./types";

export const content: Record<Lang, Content> = { vi, en };
export type { Content, Lang } from "./types";
