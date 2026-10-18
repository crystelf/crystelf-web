export const NAV_ITEMS = [
  { id: "services", index: "01" },
  { id: "projects", index: "02" },
  { id: "about", index: "03" },
] as const;

export type NavId = (typeof NAV_ITEMS)[number]["id"];

export const NAV_IDS: readonly NavId[] = NAV_ITEMS.map((item) => item.id);
