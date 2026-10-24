import type { LocalizedText } from "@/data/types";

export const GITHUB_ORG_URL = "https://github.com/crystelf";

export const GITHUB_ORG_HANDLE = "github.com/crystelf";

export interface QqGroup {
  id: string;
  number: string;
  name: LocalizedText;
}

export const QQ_GROUPS: readonly QqGroup[] = [
  {
    id: "chat",
    number: "884788970",
    name: { "zh-CN": "闲聊群", "en-US": "Chat group" },
  },
  {
    id: "dev",
    number: "1023625838",
    name: { "zh-CN": "开发者咕咕群", "en-US": "Developer group" },
  },
];
