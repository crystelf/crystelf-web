import type { Locale } from "@/locales";

export type LocalizedText = Record<Locale, string>;

export interface ServiceItem {
  id: string;
  name: string;
  description: LocalizedText;
  url: string;
  tags?: readonly string[];
}

export type ProjectGroup = "crystelf" | "mioku";

export type ProjectStatus = "stable" | "preview" | "archived";

export interface ProjectItem {
  id: string;
  name: string;
  description: LocalizedText;
  url: string;
  group: ProjectGroup;
  status: ProjectStatus;
  tags?: readonly string[];
}
