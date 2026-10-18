# 术语表 / Glossary

文案以 `src/locales/zh-CN.ts` 为准,`src/locales/en-US.ts` 键结构与之完全一致(`enUS` 的类型就是 `typeof zhCN`,缺键或多键都无法通过 typecheck)。新增或修改文案时先查本表,保持同一概念只用一种说法。

## 品牌

| 中文 | English | 说明 |
| --- | --- | --- |
| 晶灵工作室 | Crystelf | 英文只写 Crystelf,不译「工作室」,不写 Crystelf Studio。首字母大写 |
| `crystelf` | `crystelf` | 仅用于路径、命令、组织名等代码场景,例如 `~/crystelf`、`github.com/crystelf` |

## 板块与导航

| 中文 | 英文导航 | 英文标题/正文 | 说明 |
| --- | --- | --- | --- |
| 公益服务 | Services | community services / non-profit services | 不用 public services(英语里指政府公共服务),不用 public welfare |
| 开源项目 | Projects | open-source projects | |
| 关于 | About | About Crystelf | |

## 固定译法

| 中文 | English | 说明 |
| --- | --- | --- |
| 社区驱动的 | community-driven | |
| 开源 | open source(名词)/ open-source(定语) | 「open-source software」「built in the open」 |
| 为爱发电 | non-profit | 英文不直译,表达为非营利、志愿维护 |
| 贡献者 | contributors | |
| 即将上线 | Coming soon | 空状态标题,两个列表板块共用 |
| 联系方式即将上线 | Contact details coming soon | 「关于」里的联系区块 |
| 深色模式 | Dark mode | 主题开关的 aria-label,配合 `aria-pressed` |
| 跳到主要内容 | Skip to main content | skip link |
| （在新标签页打开） | (opens in a new tab) | 外链的读屏补充文字 |
| 打开菜单 / 关闭菜单 | Open menu / Close menu | |
| 主导航 | Main | `nav` 的 aria-label,读屏会自动补上「导航」 |
| 简体中文 / English | 简体中文 / English | 语言名称始终用该语言自身书写 |

## 书写规则

- 界面文案的中文使用全角标点(`，。、：；（）`),中英文之间加一个空格,例如「在 GitHub 查看」。
- 英文标题用句首大写(sentence case),例如「Open-source projects」,不用 Title Case。
- 终端标注、命令、路径一律小写,例如 `ls ./projects`、`cat ./contact`;不用 CSS `uppercase`。
- 不写未经核实的事实、数字、状态或链接;未知内容用空状态文案。
