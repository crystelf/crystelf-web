# Crystelf Web

晶灵工作室(Crystelf)官方网站,单页应用,中英双语,深浅双主题。

## 技术栈

- React 19 + TypeScript
- Vite 6(`@vitejs/plugin-react`)
- Tailwind CSS 4,CSS-first 配置,经 `@tailwindcss/postcss` 接入
- ESLint 10(flat config)
- pnpm

运行时依赖只有 `react` 与 `react-dom`。动效全部由 CSS 实现,没有动画库;字体使用系统字体栈,不加载远程字体。

## 命令

需要 Node.js `^20.19.0`、`^22.13.0` 或 `>=24`(由 ESLint 10 决定),以及 pnpm。

| 命令 | 作用 |
| --- | --- |
| `pnpm install` | 安装依赖 |
| `pnpm dev` | 开发服务器,默认 `http://localhost:3000` |
| `pnpm build` | 生产构建,输出到 `dist/` |
| `pnpm preview` | 预览构建产物,默认 `http://localhost:3777` |
| `pnpm typecheck` | TypeScript 类型检查(应用代码与 `vite.config.ts`) |
| `pnpm lint` | ESLint |

## 目录结构

```text
src/
├── App.tsx                 页面结构:SkipLink → Header → Hero → 公益服务 → 开源项目 → 关于 → Footer
├── main.tsx                入口,挂载主题与语言 Provider
├── index.css               样式入口,导入 Tailwind 与 styles/
├── components/
│   ├── layout/             Header、MobileNav、Footer、SkipLink、ThemeToggle、LanguageSwitcher
│   ├── sections/           HeroSection、ServicesSection、ProjectsSection、AboutSection
│   ├── ui/                 Button、IconButton、SectionHeader、EmptyState、ItemCard 等基础组件
│   └── icons/              内联 SVG 图标
├── contexts/               主题与语言 Context
├── data/                   services.ts、projects.ts(列表数据)、site.ts(站点常量)
├── hooks/                  useReveal(入场动效)、useActiveSection(导航高亮)、useScrolled
├── locales/                zh-CN.ts(基准)、en-US.ts(同构)
└── styles/                 tokens.css、base.css、motion.css
docs/
├── design.md               设计规范
└── glossary.md             术语表
```

## 设计系统

界面只使用 `src/styles/` 定义的 token 和 [docs/design.md](docs/design.md) 中的组件规范。Tailwind 默认调色板、圆角、阴影已清空,写默认颜色类不会生效。

## 文案与多语言

- 组件不写硬编码文案,统一通过 `useLanguage().t` 读取 `src/locales/`。
- `zh-CN.ts` 是基准,`en-US.ts` 的类型就是 `typeof zhCN`,缺键或多键会导致 typecheck 失败。
- 用词以 [docs/glossary.md](docs/glossary.md) 为准。

## 添加公益服务或开源项目

两个列表目前为空,页面显示「即将上线」。往 `src/data/services.ts` 或 `src/data/projects.ts` 的数组里添加条目即可,类型见 `src/data/types.ts`:

```ts
{
  id: "example",
  name: "Example",
  description: { "zh-CN": "中文简介", "en-US": "English description" },
  url: "https://example.com",
  tags: ["TypeScript"],
}
```

数组非空时,板块自动改为卡片网格。只添加已经核实的条目与链接。

## 许可

[MIT](LICENSE)
