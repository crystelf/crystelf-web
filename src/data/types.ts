import type { Locale } from "@/locales";

export type LocalizedText = Record<Locale, string>;

export type ServiceGroup = "crystelf" | "fograin";

export interface ServiceItem {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  group: ServiceGroup;
  url?: string;
  requiresJoin?: boolean;
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
