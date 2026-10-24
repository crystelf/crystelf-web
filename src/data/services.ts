import type { ServiceGroup, ServiceItem } from "@/data/types";

export const serviceGroups: readonly ServiceGroup[] = ["crystelf", "fograin"];

export const services: readonly ServiceItem[] = [
  {
    id: "crystelf-lab",
    name: { "zh-CN": "Crystelf Lab 社区", "en-US": "Crystelf Lab" },
    group: "crystelf",
    description: {
      "zh-CN": "基于 Misskey 搭建的开源去中心化社区，为开发者和用户提供交流与讨论的平台。",
      "en-US":
        "An open-source, decentralized community built on Misskey, where developers and users can talk and share.",
    },
    url: "https://lab.crystelf.top",
    tags: ["Misskey"],
  },
  {
    id: "qq-bot",
    name: { "zh-CN": "公益 QQ 机器人", "en-US": "Community QQ bot" },
    group: "crystelf",
    description: {
      "zh-CN": "非营利的 QQ 机器人服务，为群友提供更好的聊天体验。",
      "en-US": "A non-profit QQ bot service that makes group chats more fun and useful.",
    },
  },
  {
    id: "bot-hosting",
    name: { "zh-CN": "公益代挂机器人服务", "en-US": "Community bot hosting" },
    group: "crystelf",
    requiresJoin: true,
    description: {
      "zh-CN": "面向社区的公益机器人代挂服务，需要先加入交流群。",
      "en-US": "A free bot-hosting service for the community. Join our group to get access.",
    },
  },
  {
    id: "fograin-mc",
    name: { "zh-CN": "雾雨 MC 服务器", "en-US": "Fograin Minecraft server" },
    group: "fograin",
    description: {
      "zh-CN": "雾雨的 Minecraft 服务器，为玩家提供友好的游玩环境。",
      "en-US": "Fograin's Minecraft server, a friendly place for players to hang out.",
    },
    url: "https://mc.crystelf.top",
    tags: ["Minecraft"],
  },
];
