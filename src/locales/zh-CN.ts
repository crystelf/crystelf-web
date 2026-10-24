export const zhCN = {
  meta: {
    title: "晶灵工作室 | Crystelf",
    description:
      "晶灵工作室（Crystelf）是一个社区驱动的组织，开发开源软件，维护面向社区的公益服务。",
    ogTitle: "晶灵工作室 Crystelf",
    ogDescription: "社区驱动的开源软件与公益服务。",
  },
  brand: {
    name: "晶灵工作室",
    latinName: "Crystelf",
  },
  a11y: {
    skipToContent: "跳到主要内容",
    openInNewTab: "（在新标签页打开）",
    mainNav: "主导航",
    menu: "站点菜单",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    githubLink: "晶灵工作室的 GitHub",
  },
  nav: {
    services: "公益服务",
    projects: "开源项目",
    about: "关于",
  },
  theme: {
    dark: "深色模式",
  },
  language: {
    select: "选择语言",
    chinese: "简体中文",
    english: "English",
    chineseShort: "中文",
    englishShort: "EN",
  },
  hero: {
    label: "社区驱动的开源组织",
    titleLead: "构建开源的",
    titleAccent: "公益服务",
    lead: "晶灵工作室由社区驱动，开发开源软件、维护公益服务，为社区与开发者提供软硬件支持，让创作工具与项目更高效。",
    primaryAction: "浏览公益服务",
    secondaryAction: "在 GitHub 查看",
    terminal: {
      title: "~/crystelf",
      session: [
        { command: "whoami", output: ["晶灵工作室 Crystelf"] },
        {
          command: "cat ./mission.txt",
          output: ["开发开源软件。", "维护公益服务。", "让创作工具与项目更高效。"],
        },
        { command: "ls", output: ["公益服务/  开源项目/  关于/"] },
      ],
    },
  },
  services: {
    label: "公益服务",
    title: "为爱发电的公益服务",
    subtitle: "由晶灵工作室与社区成员共同维护，不以营利为目的。",
    emptyCommand: "ls ./services",
    itemAction: "访问服务",
    tabsLabel: "服务分组",
    groups: {
      crystelf: { name: "Crystelf", description: "晶灵工作室运营的公益服务" },
      fograin: { name: "Fograin", description: "有雾雨的公益服务" },
    },
    countOne: "项服务",
    countOther: "项服务",
    joinRequired: "需加群",
  },
  projects: {
    label: "开源项目",
    title: "我们的开源项目",
    subtitle:
      "从面向开发者与社区的工具，到面向用户的前端应用，我们以开源的方式构建每一个项目。",
    emptyCommand: "ls ./projects",
    itemAction: "查看源码",
    tabsLabel: "项目分组",
    groups: {
      crystelf: { name: "Crystelf", description: "晶灵工作室的开源项目" },
      mioku: { name: "Mioku", description: "Mioku Lab 的机器人框架与应用" },
    },
    countOne: "个项目",
    countOther: "个项目",
    status: {
      stable: "stable",
      preview: "preview",
      archived: "archived",
    },
  },
  emptyState: {
    comingSoon: "即将上线",
    description: "内容正在整理中，上线后会在这里公布。",
  },
  about: {
    label: "关于",
    title: "关于晶灵工作室",
    body: [
      "晶灵工作室是一个社区驱动的组织，专注于开源软件与公益服务。我们希望做出强大、高效的工具，并让尽可能多的人免费使用。",
      "我们相信协作的力量，欢迎不同背景的贡献者参与进来，一起营造友好的社区氛围。",
    ],
    contactCommand: "cat ./contact",
    contactComingSoon: "联系方式即将上线",
    contactDescription: "对外联系渠道正在整理中，确定后会在这里公布。",
  },
  footer: {
    owner: "Crystelf",
    rights: "All rights reserved",
    github: "GitHub",
  },
};
