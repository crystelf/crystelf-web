# 晶灵工作室 / Crystelf 设计规范

> 一句话:藏青底 + 蓝图细网格 + 1px 线框 + 等宽字体标注的「蓝图/终端风」,品牌色只有主蓝与深蓝,所有颜色、字体、间距、动效都从 `src/styles/` 的 token 取用。

本文档描述蓝图终端风的设计规范,实现位于 `src/components/`。波次 2 已用新组件整体替换迁移时保留的旧板块与旧布局组件。

## 1. 文件地图与使用方式

| 文件 | 内容 |
| --- | --- |
| `src/index.css` | 汇总入口:导入 Tailwind(`source(none)`)与三个样式文件,`@source` 声明扫描范围(`index.html`、`src/**`) |
| `src/styles/tokens.css` | `@theme` / `@theme inline`(生成 Tailwind 工具类)、`:root` 亮色变量、`.dark` 暗色变量、`dark` 变体 |
| `src/styles/base.css` | 页面唯一背景、网格变量、滚动条、焦点环、选区、标题换行、锚点偏移、模态滚动锁定;工具类 `blueprint-grid`、`corner-marks`、`label-mono` |
| `src/styles/motion.css` | 动效 token、减少动效降级、`[data-reveal]` 入场机制、`term-cursor` 光标 |
| `src/hooks/useReveal.ts` | 入场动画的唯一入口(全页共享一个 IntersectionObserver) |
| `src/hooks/useActiveSection.ts` | 导航当前板块高亮(Header 调用一次,桌面导航与抽屉共用同一个 IntersectionObserver) |
| `src/components/icons/` | 全部图标,`index.ts` 统一导出 |
| `src/contexts/` | `ThemeProvider` / `useTheme`、`LanguageProvider` / `useLanguage` |

波次 2 需要新增 token、工具类或图标时,在自己的汇报里提出,由主代理协调,不要在 `src/styles/` 或 `src/components/icons/` 里自行添加。

### 1.1 Tailwind 配置方式:CSS-first(已删除 `tailwind.config.js`)

- `@import "tailwindcss" source(none)` 关闭自动扫描,只扫描 `index.html` 与 `src/`。`docs/` 里出现的类名不会被生成。
- `dark:` 变体是 class 策略:`@custom-variant dark (&:where(.dark, .dark *))`,`dark` class 挂在 `<html>` 上。
- 已清空 Tailwind 默认的颜色、圆角、阴影、模糊、动画主题(`--color-*: initial` 等)。`bg-slate-900`、`text-blue-600`、`text-white`、`rounded-lg`、`shadow-lg`、`backdrop-blur-md`、`animate-ping` 这类类名**不会生成任何样式**。写了不报错,但不生效。这是有意的约束:只能用下文列出的 token。
- 选择理由:Tailwind 4 推荐 CSS-first;token 和工具类出自同一处,不会出现 JS 配置与 CSS 变量两份定义;收窄扫描范围避免误生成。

### 1.2 使用 token 的规则

- 组件只用语义工具类:`bg-surface`、`text-fg-muted`、`border-line`、`text-accent` 等。
- 颜色不用默认调色板、不写任意值(`bg-[#0b1d36]`、`text-[var(--cf-fg)]`)、不写 `style={{ color }}`。
- 切换主题不需要写 `dark:` 前缀:语义 token 自己随主题变化。
- 透明度修饰可用,例如 `bg-canvas/80`。
- 任意值只允许用于布局尺寸(`max-w-[85vw]`、`grid-cols-[minmax(0,1fr)_20rem]`),不得用于颜色、阴影、圆角、字体。
- `--cf-blue-400` 这类原色变量只在 `tokens.css` 内部使用,没有对应工具类,组件不要直接引用。

## 2. 色板

品牌色只有两族:**主蓝**(blue)与**深蓝/藏青**(暗色主题的 navy;亮色主题对应墨蓝 ink 与蓝图纸 paper)。没有第三种强调色。

### 2.1 原色

| 变量 | 值 |
| --- | --- |
| `--cf-blue-200` / `-400` / `-600` / `-700` / `-800` / `-900` | `#9cc6ff` / `#6aa8ff` / `#2563eb` / `#1d4ed8` / `#1e40af` / `#1e3a8a` |
| `--cf-navy-50` / `-200` / `-300` / `-500` / `-700` / `-800` / `-900` / `-950` | `#e6eefb` / `#a9bbd6` / `#8aa0c2` / `#4a73ad` / `#1c3760` / `#112a4d` / `#0b1d36` / `#071426` |
| `--cf-paper-50` / `-100` / `-200` / `-300` | `#f8fbff` / `#eef3fa` / `#e2eaf5` / `#c6d4e8` |
| `--cf-ink-500` / `-600` / `-700` / `-900` | `#6a84ab` / `#4c638a` / `#344d75` / `#0b1f3f` |

### 2.2 语义 token(工具类写法:`bg-<名>`、`text-<名>`、`border-<名>`)

| 名称 | 暗色(主视觉) | 亮色 | 用途 |
| --- | --- | --- | --- |
| `canvas` | `#071426` | `#eef3fa` | 页面底色。base.css 的 `body` 已使用;组件里只有 Header(`bg-canvas`)和抽屉遮罩(`backdrop:bg-canvas/80`)可以用 |
| `surface` | `#0b1d36` | `#f8fbff` | 面板、终端窗口、空状态框、抽屉 |
| `surface-muted` | `#112a4d` | `#e2eaf5` | 面板标题条、图标按钮悬停底、按下态 |
| `fg` | `#e6eefb` | `#0b1f3f` | 正文、标题 |
| `fg-muted` | `#a9bbd6` | `#344d75` | 副标题、说明、未选中的导航项 |
| `fg-subtle` | `#8aa0c2` | `#4c638a` | 等宽标签、序号、元信息、版权行 |
| `accent` | `#6aa8ff` | `#1d4ed8` | 链接、强调词、强调图标、选中态文字、角标 |
| `accent-hover` | `#9cc6ff` | `#1e3a8a` | 链接/强调文字的悬停色 |
| `accent-solid` | `#2563eb` | `#1d4ed8` | 实心主按钮底色,每屏最多一个 |
| `accent-solid-hover` | `#1d4ed8` | `#1e40af` | 实心主按钮悬停 |
| `on-accent` | `#ffffff` | `#ffffff` | 实心按钮上的文字和图标 |
| `accent-soft` | blue-400 的 14% | blue-700 的 10% | 选中态底色(当前语言、导航当前项) |
| `line` | `#1c3760` | `#c6d4e8` | 装饰性 1px 线框、分隔线 |
| `line-strong` | `#4a73ad` | `#6a84ab` | 交互控件边框、空状态虚线框 |
| `focus` | `#9cc6ff` | `#1d4ed8` | 焦点环(base.css 已全局设置) |
| `success` / `warning` / `danger` | `#4ade80` / `#facc15` / `#f87171` | `#166534` / `#854d0e` / `#b91c1c` | 只用于确有语义的状态。当前页面没有使用场景,不得当装饰色 |

另有:选区 `--cf-selection`(暗 blue-400 35%,亮 blue-700 20%);网格线 `--cf-grid-minor` / `--cf-grid-major`(暗色为主蓝 7% / 13%,亮色为 6% / 11%)。

`theme-color`:暗 `#071426`,亮 `#eef3fa`。`ThemeProvider` 运行时从 `--cf-canvas` 读取;`index.html` 首屏脚本里写死了这两个值,改 canvas 色时要同步。

### 2.3 对比度自检

方法:WCAG 2.x 相对亮度,sRGB;半透明色先按 sRGB 混合到 `canvas` 上再计算;`grid-major` 指网格粗线所在像素,是文字背后最差的情况。下表为脚本实测,全部达标。

| 前景 token | 背景 | 用途 | 暗色 | 亮色 | 要求 |
| --- | --- | --- | --- | --- | --- |
| `fg` | `canvas` | 正文 | 15.82 ✓ | 14.69 ✓ | ≥ 4.5:1 |
| `fg` | `grid-major` | 正文 | 12.86 ✓ | 12.47 ✓ | ≥ 4.5:1 |
| `fg` | `surface` | 正文 | 14.47 ✓ | 15.78 ✓ | ≥ 4.5:1 |
| `fg` | `surface-muted` | 正文 | 12.30 ✓ | 13.51 ✓ | ≥ 4.5:1 |
| `fg-muted` | `canvas` | 次级文字 | 9.47 ✓ | 7.64 ✓ | ≥ 4.5:1 |
| `fg-muted` | `grid-major` | 次级文字 | 7.70 ✓ | 6.49 ✓ | ≥ 4.5:1 |
| `fg-muted` | `surface` | 次级文字 | 8.66 ✓ | 8.21 ✓ | ≥ 4.5:1 |
| `fg-muted` | `surface-muted` | 次级文字 | 7.36 ✓ | 7.03 ✓ | ≥ 4.5:1 |
| `fg-subtle` | `canvas` | 元信息/等宽标签 | 6.94 ✓ | 5.45 ✓ | ≥ 4.5:1 |
| `fg-subtle` | `grid-major` | 元信息/等宽标签 | 5.64 ✓ | 4.62 ✓ | ≥ 4.5:1 |
| `fg-subtle` | `surface` | 元信息/等宽标签 | 6.34 ✓ | 5.85 ✓ | ≥ 4.5:1 |
| `fg-subtle` | `surface-muted` | 元信息/等宽标签 | 5.39 ✓ | 5.01 ✓ | ≥ 4.5:1 |
| `accent` | `canvas` | 链接/强调文字 | 7.61 ✓ | 6.01 ✓ | ≥ 4.5:1 |
| `accent` | `grid-major` | 链接/强调文字 | 6.19 ✓ | 5.10 ✓ | ≥ 4.5:1 |
| `accent` | `surface` | 链接/强调文字 | 6.96 ✓ | 6.46 ✓ | ≥ 4.5:1 |
| `accent` | `surface-muted` | 链接/强调文字 | 5.92 ✓ | 5.53 ✓ | ≥ 4.5:1 |
| `accent-hover` | `canvas` | 链接悬停 | 10.50 ✓ | 9.29 ✓ | ≥ 4.5:1 |
| `accent-hover` | `grid-major` | 链接悬停 | 8.53 ✓ | 7.89 ✓ | ≥ 4.5:1 |
| `accent-hover` | `surface` | 链接悬停 | 9.60 ✓ | 9.98 ✓ | ≥ 4.5:1 |
| `accent-hover` | `surface-muted` | 链接悬停 | 8.16 ✓ | 8.54 ✓ | ≥ 4.5:1 |
| `on-accent` | `accent-solid-hover` | 实心按钮悬停文字 | 6.70 ✓ | 8.72 ✓ | ≥ 4.5:1 |
| `on-accent` | `accent-solid` | 实心按钮文字 | 5.17 ✓ | 6.70 ✓ | ≥ 4.5:1 |
| `fg` | `selection` | 选中文字 | 7.93 ✓ | 10.81 ✓ | ≥ 4.5:1 |
| `accent` | `accent-soft` | 选中态文字(accent-soft 底) | 6.04 ✓ | 5.20 ✓ | ≥ 4.5:1 |
| `fg` | `accent-soft` | 正文(accent-soft 底) | 12.56 ✓ | 12.70 ✓ | ≥ 4.5:1 |
| `success` | `canvas` | 成功 | 10.60 ✓ | 6.40 ✓ | ≥ 4.5:1 |
| `success` | `surface` | 成功 | 9.69 ✓ | 6.87 ✓ | ≥ 4.5:1 |
| `warning` | `canvas` | 警告 | 12.06 ✓ | 6.15 ✓ | ≥ 4.5:1 |
| `warning` | `surface` | 警告 | 11.03 ✓ | 6.60 ✓ | ≥ 4.5:1 |
| `danger` | `canvas` | 错误 | 6.68 ✓ | 5.80 ✓ | ≥ 4.5:1 |
| `danger` | `surface` | 错误 | 6.11 ✓ | 6.23 ✓ | ≥ 4.5:1 |
| `line-strong` | `canvas` | 交互控件边框 | 3.82 ✓ | 3.42 ✓ | ≥ 3.0:1 |
| `line-strong` | `surface` | 交互控件边框 | 3.50 ✓ | 3.68 ✓ | ≥ 3.0:1 |
| `focus` | `canvas` | 焦点环 | 10.50 ✓ | 6.01 ✓ | ≥ 3.0:1 |
| `focus` | `surface` | 焦点环 | 9.60 ✓ | 6.46 ✓ | ≥ 3.0:1 |
| `focus` | `surface-muted` | 焦点环 | 8.16 ✓ | 5.53 ✓ | ≥ 3.0:1 |
| `accent-solid` | `canvas` | 实心按钮底色(作为控件边界) | 3.57 ✓ | 6.01 ✓ | ≥ 3.0:1 |
| `accent-solid` | `surface` | 实心按钮底色(作为控件边界) | 3.27 ✓ | 6.46 ✓ | ≥ 3.0:1 |
| `line` | `canvas` | 装饰线框(非必需信息,无硬性要求) | 1.55 ✓ | 1.35 ✓ | 无(装饰) |
| `line` | `surface` | 装饰线框(非必需信息,无硬性要求) | 1.42 ✓ | 1.45 ✓ | 无(装饰) |

要求:文字 ≥ 4.5:1;非文字 UI(控件边框、焦点环)≥ 3:1。`line` 只做装饰,不承载必要信息;需要靠边框辨认的控件必须用 `line-strong`。

## 3. 背景与网格

- 页面背景只有一个来源:`base.css` 里的 `body`(`canvas` 色加蓝图网格)。`App`、`main`、`section` 都不设背景色,不加渐变、光斑或背景图。
- 网格:细线每 24px(`--cf-grid-cell`),粗线每 120px(`--cf-grid-major-cell`),线宽 1px,颜色是低透明度的主蓝,随页面滚动。
- `blueprint-grid` 工具类复用同一套网格,只给**一个**"绘图区"用(Hero 终端窗口的主体),而且必须和 `bg-surface` 一起写:`bg-surface blueprint-grid`。
- `blueprint-grid` 与 `corner-marks` 都占用 `background-image`,不能放在同一个元素上。
- 卡片和面板用 `bg-surface`;Header 用 `bg-canvas`,把网格挡在导航条之外。

## 4. 字体

不加载远程字体或字体文件,只用系统字体栈。

| token | 字体栈 | 用途 |
| --- | --- | --- |
| `font-sans`(默认) | `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans CJK SC", "Source Han Sans SC", "Helvetica Neue", Arial, sans-serif` 加 emoji 字体 | 正文、标题 |
| `font-mono` | `ui-monospace, "SF Mono", SFMono-Regular, Menlo, "Cascadia Mono", Consolas, "Liberation Mono", "Noto Sans Mono CJK SC", "PingFang SC", "Microsoft YaHei", monospace` | 标签、序号、命令行、按钮、导航、终端窗口 |

拉丁字体排在中文字体前面:英文用系统 UI 字体,中文字符回落到苹方或雅黑。

字号层级(Tailwind 默认字号;`text-sm` / `text-base` / `text-lg` 的行高已在 token 中调为 1.6 / 1.75 / 1.75,适合中文):

| 层级 | 类 | 备注 |
| --- | --- | --- |
| 页面主标题 `h1`(仅 Hero 一个) | `text-4xl font-semibold tracking-tight md:text-6xl` | 标题行高由 base.css 设为 1.25 |
| 板块标题 `h2` | `text-2xl font-semibold tracking-tight md:text-4xl` | |
| 小标题 `h3` | `text-lg font-medium md:text-xl` | |
| 引导段落 | `text-base text-fg-muted md:text-lg` | 最大宽度 `max-w-text`(40rem) |
| 正文 | `text-base text-fg` | |
| 辅助文字 | `text-sm text-fg-muted` | |
| 等宽标签 | `label-mono` | 12px,字距 0.06em,`fg-subtle` |
| 按钮、导航 | `font-mono text-sm` | |

规则:

- 字重只用 400、500(`font-medium`)、600(`font-semibold`)。
- `tracking-tight` 只用于 `h1`、`h2`。中文正文不加字距;等宽标签的字距已内置。
- 不用 `uppercase`。命令和路径保持小写,例如 `ls ./projects`。
- 段落限宽 `max-w-text`。标题已设 `text-wrap: balance`,段落已设 `text-wrap: pretty`。

## 5. 间距、布局与断点

- 基础单位 4px(Tailwind 默认 `--spacing`)。布局间距取 8px 的倍数,即 Tailwind 单位 `2 4 6 8 10 12 16 20 24 28`。
- 内容容器:`mx-auto w-full max-w-content px-4 md:px-8`(`max-w-content` = 72rem = 1152px)。Header、各板块、Footer 用同一写法,左边缘对齐。
- 板块:`<section id="…" class="border-t border-line">`,内部容器加 `py-20 md:py-28`。Hero 不要顶部分隔线,用 `py-16 md:py-24`。
- 板块标题区与内容之间:`mb-10 md:mb-14`。网格间距:`gap-6 md:gap-8`。
- Header 高度固定 `h-16`(64px),等于 `--cf-header-height`。base.css 给所有带 `id` 的元素设了 `scroll-margin-top: header 高度 + 16px`,锚点跳转不会被 Header 遮住。改 Header 高度时同步改这个变量。
- 层级:Header `z-40`;抽屉 `<dialog>` 处于浏览器顶层,不需要 z-index;skip link 聚焦时 `z-50`。

断点用 Tailwind 默认值,不修改:

| 断点 | 最小宽度 | 验收宽度 | 布局 |
| --- | --- | --- | --- |
| 默认 | 0 | 375 | 单列;Header 只显示品牌和菜单按钮;导航、语言、主题都在抽屉里;Hero 按钮纵向排列、`w-full` |
| `sm` | 640px | — | Hero 按钮改为横向 |
| `md` | 768px | 768 | Header 显示完整导航和操作按钮,隐藏菜单按钮;Hero 仍单列 |
| `lg` | 1024px | — | Hero 两列;"关于"两列 |
| `xl` | 1280px | 1440 | 容器已到 1152px 并居中,不再变化 |

320px 宽度下也不能出现横向滚动条。base.css 已设 `overflow-wrap: break-word`,但长英文、路径和命令行仍要逐一检查,终端窗口内不要用 `whitespace-nowrap`。

## 6. 线框、圆角、阴影

- 线宽一律 1px(`border`)。分隔线 `border-line`;交互控件边框 `border-line-strong`;悬停或当前态可以变为 `border-accent`。
- 圆角只有三档:`rounded-none`(默认,大多数元素)、`rounded-xs`(2px,按钮、标签)、`rounded-sm`(4px,上限)。`rounded-full` 只用于 12px 以下的状态点。其余圆角已清空。
- 阴影只有一个:`shadow-offset`(向右下 4px 的实心偏移,颜色为 `line`),只给 Hero 终端窗口。
- 不用模糊、渐变、半透明叠加做"玻璃"效果。
- `corner-marks`:在元素四角画 10px 的 L 形定位标(颜色 `accent`)。全页只用在"关于"的联系面板上。
- 虚线 `border-dashed` 只用于空状态框,表示"预留位置"。

## 7. 终端式标注

装饰符号(`//`、`$`、`./`、序号 `01`)可以直接写在组件里,并加 `aria-hidden="true"`。其余所有可读文字都来自 locales。

| 场景 | 写法 |
| --- | --- |
| 板块标签 | `<p className="label-mono"><span className="text-accent" aria-hidden="true">// 01</span> {t.services.label}</p>`;序号:公益服务 01、开源项目 02、关于 03 |
| 命令行 | `<p className="font-mono text-sm text-fg"><span className="text-accent" aria-hidden="true">$ </span>{命令文案}</p>` |
| 输出行 | `font-mono text-sm text-fg-muted` |
| 光标 | 最后一条命令行末尾放 `<span className="term-cursor" aria-hidden="true" />`;全页只出现一次(Hero) |
| 元信息 | `label-mono`,例如 Footer 版权行 |
| 抽屉导航序号 | 每项前加 `<span className="label-mono" aria-hidden="true">01</span>` |

## 8. 动效

### 8.1 token(`motion.css`)

| 变量 | 默认 | `prefers-reduced-motion: reduce` |
| --- | --- | --- |
| `--motion-duration-fast` | 120ms | 不变(只驱动颜色过渡) |
| `--motion-duration-base` | 200ms | 不变 |
| `--motion-duration-reveal` | 480ms | 160ms |
| `--motion-ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` | 不变 |
| `--motion-ease-emphasized` | `cubic-bezier(0.22, 1, 0.36, 1)` | 不变 |
| `--motion-reveal-distance` | 8px | 0px |
| `--motion-reveal-stagger` | 60ms | 0ms |
| `--motion-cursor` | 1.1s 步进闪烁 | `none`(光标常亮) |

Tailwind 对应写法:`ease-standard`、`ease-emphasized`。`transition`、`transition-colors` 的默认时长和缓动已经指向 `--motion-duration-fast` / `--motion-ease-standard`,通常直接写 `transition-colors`。需要别的时长时写 `duration-(--motion-duration-base)`。

### 8.2 只允许三种动效

1. **入场**:淡入加上移 8px,每个元素只播一次。
2. **光标闪烁**:`term-cursor`,全页一个。
3. **状态过渡**:悬停、焦点、选中时的文字色、边框色、背景色过渡(`transition-colors`)。

不允许:hover 放大、上浮、旋转(`hover:scale-*`、`hover:-translate-y-*`、`hover:rotate-*`)、视差、无限循环的装饰动画、滚动驱动动画、JS 动画库。

### 8.3 入场用法

```tsx
import { useReveal } from "@/hooks/useReveal";

function HeroCopy() {
  const title = useReveal<HTMLHeadingElement>();
  const lead = useReveal<HTMLParagraphElement>(1);
  const actions = useReveal<HTMLDivElement>(2);
  return (
    <>
      <h1 {...title}>…</h1>
      <p {...lead}>…</p>
      <div {...actions}>…</div>
    </>
  );
}
```

- `useReveal(index)` 返回 `{ ref, "data-reveal", style }`,整体展开到元素上。`index` 控制错峰(每级 60ms),同一组最多到 4。
- 全页共享一个 IntersectionObserver:元素进入视口(底部留 8%)后加 `data-revealed`,随即停止观察。浏览器没有 IntersectionObserver 时直接显示。
- 只给"块"用:Hero 文案组、Hero 终端窗口、各板块标题区、空状态框、关于正文、联系面板。Header、Footer、导航、单个按钮不加。
- 带 `data-reveal` 的元素上不要再写 `transition-*`、`opacity-*`、`translate-*`,否则互相覆盖;需要时外面包一层。
- 返回值里的 `style` 会占用元素的 `style` 属性;元素还需要别的内联样式时手动合并。
- 减少动效时,token 自动切换为"无位移、160ms 淡入、无错峰、光标常亮"。组件不需要额外代码,也不要写 `motion-reduce:` 清零。
- 平滑滚动只在 `prefers-reduced-motion: no-preference` 下开启,motion.css 已处理。
- 抽屉和下拉的开关不做位移动画;需要时只用 `transition-opacity duration-(--motion-duration-base)`。

## 9. 组件清单与状态

通用要求:可交互元素最小 44×44px(`h-11` / `size-11`)。焦点样式由 base.css 的 `:focus-visible` 统一提供(2px `focus` 色实线,外偏移 2px),**不要**写 `outline-none`、`focus:ring-*` 去覆盖。

### 9.1 基础配方(T3 在 `src/components/ui/` 实现,T2 可以直接复用同样的类名)

| 组件 | 类 | 状态 |
| --- | --- | --- |
| 主按钮 `Button variant="primary"` | `inline-flex h-11 items-center justify-center gap-2 rounded-xs bg-accent-solid px-5 font-mono text-sm text-on-accent transition-colors` | hover / active:`bg-accent-solid-hover`;每屏最多一个 |
| 描边按钮 `variant="secondary"` | `inline-flex h-11 items-center justify-center gap-2 rounded-xs border border-line-strong px-5 font-mono text-sm text-fg transition-colors` | hover:`border-accent text-accent`;active:`bg-surface-muted` |
| 图标按钮 `IconButton` | `inline-flex size-11 items-center justify-center rounded-xs text-fg-muted transition-colors`,图标 `size-5` | hover:`bg-surface-muted text-accent`;`aria-pressed="true"` 时 `text-accent`;必须有 `aria-label` |
| 行内链接 | `text-accent underline decoration-1 underline-offset-4 transition-colors` | hover:`text-accent-hover` |
| 外链 | 在对应链接样式上加 `ExternalLinkIcon`(`size-3.5`)、`target="_blank"`、`rel="noopener noreferrer"`,并附 `sr-only` 文字"在新标签页打开"(来自 locales) | 同所属样式 |
| 面板 `Panel` | `border border-line bg-surface` | 静态,无 hover |
| 面板标题条 | `flex items-center gap-2 border-b border-line bg-surface-muted px-4 py-2 label-mono` | — |

禁用态(当前没有使用场景):`disabled:cursor-not-allowed disabled:opacity-50`。

### 9.2 布局组件(T2,`src/components/layout/`)

**SkipLink**

- 页面第一个可聚焦元素:`<a href="#main">`,文字来自 locales。
- 类:`sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-accent-solid focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-on-accent`。
- 主内容 `<main id="main" tabIndex={-1} className="outline-none">`。这是全站唯一允许去掉焦点环的元素,因为它只是跳转目标。

**Header**

- `<header className="sticky top-0 z-40 border-b border-line bg-canvas">`,内部容器(第 5 节写法)加 `flex h-16 items-center justify-between gap-4`。
- 左:品牌链接 `href="#hero"`,类 `inline-flex items-center gap-2 font-mono text-sm font-medium text-fg transition-colors hover:text-accent`;`CrystelfLogo` 用 `size-6 text-accent`;名称来自 locales(中文"晶灵工作室",英文"Crystelf")。
- 中(`md` 起):`<nav aria-label={…}>` 里 `<ul className="hidden items-center gap-6 md:flex">`;链接 `font-mono text-sm text-fg-muted transition-colors hover:text-accent`。三项依次为 `#services` 公益服务、`#projects` 开源项目、`#about` 关于。当前板块高亮由 `useActiveSection` 提供:当前项设 `aria-current="true"` 和 `text-accent`(抽屉里另加 `bg-accent-soft`)。
- 右(`md` 起):`LanguageSwitcher`、`ThemeToggle`、GitHub 图标按钮(`href="https://github.com/crystelf"`,外链,`aria-label` 来自 locales)。这是 Header 唯一的外链。
- `md` 以下:只显示菜单按钮(`IconButton` + `MenuIcon`,`aria-expanded`、`aria-controls="mobile-nav"`)。
- 滚动态只改颜色:页面在顶部时底边框为 `border-transparent`,滚动后变为 `border-line`(`transition-colors`)。不做滚动后变形,不加阴影或模糊。

**MobileNav(抽屉)**

- 用原生 `<dialog id="mobile-nav">` 和 `showModal()`:自带焦点约束、Esc 关闭、背景不可交互。base.css 已在模态 `dialog` 打开时锁定页面滚动。
- 类:`fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-none w-80 max-w-[85vw] border-l border-line bg-surface p-0 text-fg backdrop:bg-canvas/80`。
- 结构:顶部标题条(品牌加关闭按钮 `CloseIcon`,`aria-label` 来自 locales);导航列表,每项 `flex min-h-11 items-center gap-3 border-b border-line px-4 py-3 font-mono text-base text-fg hover:text-accent`,前置序号;底部放 `LanguageSwitcher`、`ThemeToggle` 和 GitHub 链接。
- 关闭时机:点关闭按钮、按 Esc、点遮罩(`event.target === dialog`)、点任一导航项、窗口宽度达到 `md`。
- 关闭后焦点必须回到菜单按钮;浏览器没有自动还原时手动 `focus()`。

**LanguageSwitcher**

- `<div role="group" aria-label={t.language.select} className="inline-flex rounded-xs border border-line-strong">`,内含两个按钮,类 `h-11 min-w-11 px-3 font-mono text-sm transition-colors`,第二个按钮加 `border-l border-line-strong`。
- 可见文字为 `中文` / `EN`;`aria-label` 用完整名称 `t.language.chinese` / `t.language.english`;按钮分别设 `lang="zh-CN"` / `lang="en"`。
- 当前语言 `aria-pressed="true"`,类 `bg-accent-soft text-accent`;另一个 `text-fg-muted hover:text-accent`。
- 点击调用 `setLocale`。不做下拉菜单。

**ThemeToggle**

- `IconButton`,`aria-label` 固定为"深色模式 / Dark mode"(来自 locales),`aria-pressed={theme === "dark"}`。
- 浅色主题显示 `MoonIcon`,深色主题显示 `SunIcon`。点击调用 `toggleTheme()`。

**Footer**

- `<footer className="border-t border-line">`,容器加 `flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between`。
- 左:`label-mono` 版权行 `© {new Date().getFullYear()} Crystelf`。
- 右:GitHub 文字链接(`GitHubIcon size-4` 加文字),`inline-flex min-h-11 items-center gap-2 text-sm text-fg-muted transition-colors hover:text-accent`,外链。Footer 只有这一个外链。

### 9.3 内容组件(T3,`src/components/sections/`、`src/components/ui/`)

**SectionHeader(ui)**

- props:`index`(如 `"01"`)、`label`、`title`、`subtitle?`、`titleId`(供 section 的 `aria-labelledby`)。
- 结构:标签行(第 7 节)→ `<h2 id={titleId} className="mt-3 …">` → 副标题 `<p className="mt-4 max-w-text text-base text-fg-muted md:text-lg">`。
- 外层 `mb-10 md:mb-14`,外层整体 `useReveal()`。

**EmptyState(ui)**

- props:`command?`(如 `ls ./services`,文字来自 locales)、`title`、`description?`。
- 外层:`flex flex-col items-start gap-3 border border-dashed border-line-strong bg-surface px-6 py-10 md:items-center md:px-10 md:py-16 md:text-center`,整体 `useReveal()`。
- 命令行 `font-mono text-sm text-fg-subtle`,前缀 `$ ` 用 `text-accent` 并 `aria-hidden`;标题 `text-lg font-medium text-fg`(即将上线 / Coming soon);说明 `text-sm text-fg-muted`。
- 不加 `role="status"`,它不是动态内容。

**Hero(sections)**

- `<section id="hero" aria-labelledby="hero-title">`,容器加 `grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:items-center`。
- 左列:标签行(`label-mono`,文字来自 locales)、`<h1 id="hero-title">`(强调词用 `text-accent`)、引导段落(`mt-6`)、按钮组 `mt-8 flex flex-col gap-3 sm:flex-row`。主按钮跳 `#services`;描边按钮链接 `https://github.com/crystelf`(外链)。左列四块依次 `useReveal(0)` 到 `useReveal(3)`。
- 右列终端窗口,`useReveal(4)`:
  - 外框 `border border-line bg-surface shadow-offset`。
  - 标题条:三个 `size-2.5 border border-line-strong` 小方块(不上色)加 `label-mono` 的路径文字,类 `flex items-center gap-2 border-b border-line px-4 py-2`。
  - 主体 `blueprint-grid p-5 font-mono text-sm md:p-6`,若干命令行和输出行,最后一行以 `term-cursor` 结尾。
  - 窗口里的文字只能来自 locales 的品牌文案;不写数字、统计、在线状态、版本号、延迟。
  - 窗口内容只是重复左列文案时,整个窗口加 `aria-hidden="true"`。
  - 375px 时宽度 100%,文字允许换行。

**公益服务 / 开源项目(sections)**

- `<section id="services">` / `<section id="projects">`,`aria-labelledby` 指向各自 `h2`,内容为 `SectionHeader` 加列表区。
- 数据来自 `src/data/services.ts` / `src/data/projects.ts`(当前为空数组),两个板块共用 `CatalogSection`。数组为空时渲染 `EmptyState`;非空时渲染 `ItemGrid`(`<ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">`,整体 `useReveal()`),每项一个 `ItemCard`。
- `ItemCard(ui)`:`<article className="flex h-full flex-col gap-3 border border-line bg-surface p-6">`,静态无 hover;`h3` 名称(`text-lg font-medium md:text-xl`)、`text-sm text-fg-muted` 简介、可选标签行(`label-mono rounded-xs border border-line px-2 py-1`)、底部行内外链(文字来自 locales 的 `itemAction`,附 `sr-only` 条目名与"在新标签页打开")。

**关于(sections)**

- `<section id="about">`,`SectionHeader` 之后 `grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]`。
- 左:正文段落 `max-w-text text-base text-fg-muted`。
- 右:联系面板 `border border-line bg-surface p-6 corner-marks`,`h3` 标题加文案"联系方式即将上线 / Contact details coming soon"。不放任何链接、按钮或二维码。

### 9.4 图标(`src/components/icons/`)

- 统一 API:`<GitHubIcon className="size-5" />`,接受全部 SVG 属性;默认 `width` / `height` 为 `1em`、`aria-hidden="true"`,颜色继承 `currentColor`。
- 尺寸:行内 `size-4`,按钮内 `size-5`,Header 品牌 logo `size-6`。
- 图标单独作为按钮或链接内容时,名称写在按钮的 `aria-label` 上,图标保持 `aria-hidden`。
- 当前有:`CrystelfLogo`、`GitHubIcon`、`SunIcon`、`MoonIcon`、`MenuIcon`、`CloseIcon`、`ExternalLinkIcon`。旧板块专用图标和失去引用的 `GlobeIcon`、`ChevronDownIcon`、`CheckIcon` 已在波次 2 删除。
- 新图标:独立文件,属性用 camelCase,加入 `index.ts`。

## 10. 无障碍要求

- 文字对比度 ≥ 4.5:1,使用 token 即满足(见 2.3);控件边界与焦点环 ≥ 3:1。
- 全页一个 `h1`(Hero);板块标题 `h2`;面板内 `h3`。每个 `section` 用 `aria-labelledby` 指向自己的标题。
- 地标:`header`、带 `aria-label` 的 `nav`、`main#main`、`footer`;skip link 跳到 `#main`。
- 图标按钮必须有 `aria-label`;开关按钮用 `aria-pressed`;菜单按钮用 `aria-expanded` 和 `aria-controls`。
- 键盘:Tab 顺序与视觉顺序一致;抽屉打开后焦点进入抽屉,Esc 关闭,关闭后焦点回到菜单按钮;所有操作都能用 Enter 或 Space 完成。
- 焦点环由 base.css 提供,不得移除;唯一例外是 `main#main`。
- 触控目标 ≥ 44×44px。
- `<html lang>` 随语言切换(`LanguageProvider` 已处理);页面里混排的另一种语言文字(例如中文界面里的 `EN` 按钮)加 `lang` 属性。
- 外链附"在新标签页打开"的 `sr-only` 文字。
- 网格、角标、`//`、`$`、序号、光标等装饰元素用 `aria-hidden="true"` 或纯 CSS 实现。
- 减少动效偏好由 motion token 自动处理。

## 11. 主题与语言基建(已完成,直接使用)

**主题**

- `import { useTheme } from "@/contexts/ThemeContext"`,得到 `{ theme: "light" | "dark", toggleTheme }`。
- 初始值:`localStorage.theme`(`"light"` / `"dark"`)优先,否则跟随系统。用户手动切换前,系统主题变化会实时跟随;切换后写入 localStorage。
- `index.html` 的内联脚本在 React 挂载前按同一规则设置 `<html class="dark">`、`color-scheme` 和 `theme-color`,避免闪白。改规则时两处同步。

**语言**

- `import { useLanguage } from "@/contexts/LanguageContext"`,得到 `{ locale: "zh-CN" | "en-US", setLocale, t }`。
- 初始值:`localStorage.language` 优先;否则浏览器语言以 `zh` 开头用中文,其余用英文。只有用户手动切换才写入 localStorage。
- `LanguageProvider` 同步 `<html lang>`、`document.title`(`t.meta.title`)、`meta[name="description"]`、`og:title`、`og:description`(`t.meta.description`)和 `og:locale`。
- `index.html` 里的静态 title、description、og 是中文默认值,给不执行 JS 的抓取器用;改 `meta` 文案时一并更新。

## 12. 文案键接口(给 T4 的建议,以 T4 提交为准)

locales 以 `zh-CN` 为准,`en-US` 同构。与本规范相关的键:

- 已有:`meta.title`、`meta.description`(T1 放的占位文案)、`nav.services` / `nav.projects` / `nav.about`、`language.select` / `language.chinese` / `language.english`。
- 建议新增:品牌名、skip link 文字、"在新标签页打开"、打开 / 关闭菜单、主导航的 `aria-label`、深色模式开关、GitHub 链接名、三个板块的标签、空状态("即将上线 / Coming soon")与空状态命令、联系空状态("联系方式即将上线 / Contact details coming soon")、Hero 标签行与终端窗口文字。

## 13. 禁止清单

- 默认调色板颜色、任意值颜色、内联颜色样式。
- 第三种强调色。
- 玻璃拟态、模糊、渐变、光斑、发光、大阴影。
- 卡片或按钮 hover 放大、上浮、旋转。
- 大于 4px 的圆角(`rounded-full` 状态点除外)。
- 伪造的数字、在线状态、延迟、统计、版本号、用户数;任何用 `Math.random` 生成的展示数据。
- 远程字体、图标字体、新的运行时依赖、动画库。
- 在 `App`、`main`、`section` 上设背景色或背景图。
- 移除焦点样式(`main#main` 除外)。
- 用 `!important` 或 `motion-reduce:*` 清零动效。
