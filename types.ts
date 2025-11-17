export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

export interface NavLink {
  name: string;
  href: string;
  pingUrl?: string;
  description: string;
}

export interface Project {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export enum PingStatus {
  Loading,
  Online,
  Offline,
}
