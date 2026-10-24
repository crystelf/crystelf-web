import type { ProjectGroup, ProjectItem } from "@/data/types";

export const projectGroups: readonly ProjectGroup[] = ["crystelf", "mioku"];

export const projects: readonly ProjectItem[] = [
  {
    id: "leeklet",
    name: "leeklet",
    group: "crystelf",
    status: "stable",
    description: {
      "zh-CN": "大葱管理后台。",
      "en-US": "Leek admin dashboard.",
    },
    url: "https://github.com/crystelf/leeklet",
    tags: ["TypeScript", "GPL-3.0"],
  },
  {
    id: "leekapp",
    name: "leekapp",
    group: "crystelf",
    status: "preview",
    description: {
      "zh-CN": "移动端晶灵管理软件。",
      "en-US": "Mobile management app for Crystelf.",
    },
    url: "https://github.com/crystelf/leekapp",
    tags: ["MIT"],
  },
  {
    id: "crystelf-plugin",
    name: "crystelf-plugin",
    group: "crystelf",
    status: "archived",
    description: {
      "zh-CN":
        "适用于 TRSS-Yunzai 的多功能群娱乐插件，提供 60s 早报、入群验证、欢迎语、RSS 订阅、点歌与 AI 对话等功能。",
      "en-US":
        "A multi-purpose group-chat plugin for TRSS-Yunzai: daily news, join verification, welcome messages, RSS, music requests and AI chat.",
    },
    url: "https://github.com/Jerryplusy/crystelf-plugin",
    tags: ["JavaScript", "MIT"],
  },
  {
    id: "mioku",
    name: "mioku",
    group: "mioku",
    status: "stable",
    description: {
      "zh-CN": "以初音未来为主题，轻量、跨平台、插件式的机器人框架。",
      "en-US": "A lightweight, cross-platform, plugin-based bot framework themed around Hatsune Miku.",
    },
    url: "https://github.com/mioku-lab/mioku",
    tags: ["TypeScript", "MIT"],
  },
  {
    id: "mioku-app",
    name: "mioku-app",
    group: "mioku",
    status: "preview",
    description: {
      "zh-CN": "Mioku 智能体移动端。",
      "en-US": "Mobile app for Mioku agents.",
    },
    url: "https://github.com/mioku-lab/mioku-app",
    tags: ["MIT"],
  },
];
