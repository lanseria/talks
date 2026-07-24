## 项目概览

这是一个基于 **Slidev** 的演示文稿仓库，按日期组织多场 talk。每场 talk 是独立的 package，拥有自己的 slides 和依赖，通过 pnpm workspaces 管理。

## 架构

- **Monorepo 结构**：使用 pnpm workspaces，每场 talk 是一个独立的 package
- **包管理器**：pnpm (v10.13.1)
- **构建工具**：Vite
- **样式方案**：UnoCSS，使用 `@unocss/preset-wind` 预设
- **框架**：Vue 3 + Slidev

## 目录结构

```
talks/
├── template/           # 新 talk 的模板（slides.md、package.json）
├── scripts/
│   ├── picker.ts       # talk 的交互式 dev server 选择器
│   ├── redirects.ts    # 生成 netlify.toml 重定向规则
│   └── random-icons.ts # 随机图标生成工具
├── dist/               # 生产构建产物（GitHub Pages/Netlify）
└── [YYYY-MM-DD]/       # 各场 talk 的目录
    ├── slides.md
    ├── package.json
    └── ...
```

## 常用命令

```bash
# 为根目录和所有 workspaces 安装依赖
pnpm install

# 交互式 dev server 选择器（打开 VS Code + dev server）
pnpm dev

# 直接运行某场 talk 的 dev
pnpm dev:2025-01-03    # 或任意 talk 日期

# 构建所有 talk 用于生产
pnpm build

# 构建指定 talk
pnpm build:2025-01-03

# 类型检查
pnpm typecheck

# 代码检查
pnpm lint

# 更新重定向规则
pnpm update
```

## Workspace 配置

- **根目录**：使用 `vite.config.ts` 进行 dev server 和构建编排
- **Talks**：每场 talk 有自己的 `package.json`，包含 Slidev 依赖
- **依赖**：共享依赖通过 pnpm catalog 特性提升到根目录（见 `pnpm-workspace.yaml`）

## 重要文件

- `vite.config.ts` - Vite 配置，包含自定义构建逻辑
- `uno.config.ts` - UnoCSS 配置
- `netlify.toml` - Netlify 部署配置（手动维护 —— 见下方「将 Talk 发布到 Netlify」）
- `scripts/picker.ts` - 交互式 dev server 选择器
- `pnpm-workspace.yaml` - Workspace 配置，包含共享的 catalog 依赖

> ⚠️ **不要运行 `pnpm update`（即 `scripts/redirects.ts`）** 来刷新 `netlify.toml`。该脚本会重新生成整个文件并覆盖手动维护的值（例如把 `NODE_VERSION` 从 `24` 重置回 `20`、丢失末尾换行符，还会添加我们不使用的额外 `src`/`301` 重定向）。`netlify.toml` **由人工维护** —— 按照下方的模式手动追加条目。

## 将 Talk 发布到 Netlify

`netlify.toml` 是手动维护的。要让某场 talk 在 Netlify 上可访问（例如 `https://lanseria-talks.netlify.app/<年份>/<slug>`），需要更新**三处**。约定（参考 `2026-01-04`）是使用**语义化 slug**，如 `/2026/work-end/`，而**不是**原始日期目录。

### 1. Talk 的 `src/package.json` —— 设置 base 路径和输出目录

使用语义化的 base 路径（`/<年份>/<slug>/`）和对应的输出目录：

```diff
- "build": "slidev build --base /2026-07-22/ --out ../../dist/2026-07-22",
+ "build": "slidev build --base /2026/zhoushan-bus/ --out ../../dist/2026/zhoushan-bus",
```

参考：`2026-01-04/src/package.json` → `--base /2026/work-end/`。

### 2. `netlify.toml` —— 追加一条 SPA 重定向规则

在文件末尾添加一个 `[[redirects]]` 块，让客户端路由正常工作：

```toml
[[redirects]]
from = "/2026/zhoushan-bus/*"
to = "/2026/zhoushan-bus/index.html"
status = 200
```

保持 `NODE_VERSION = "24"`。不要引入 `src` 或 `301` 重定向 —— 只需要上面这条 `/*` → `/index.html`（status 200）规则。

### 3. `README.md` —— 在对应年份下添加列表条目

在匹配的 `###### <年份>` 标题下添加一行：

```markdown
- [zh] [舟山汽车票：官方小程序 VS 第三方平台](./2026-07-22) - 舟山汽车票：官方小程序 VS 第三方平台 https://lanseria-talks.netlify.app/2026/zhoushan-bus
```

链接指向的目录保持为日期目录（`./2026-07-22`）；末尾的 URL 使用语义化 slug。

### 验证

在该 talk 的 `src/` 目录下运行 `pnpm run build`，确认构建产物输出到 `dist/<年份>/<slug>/`。

## 创建新 Talk

创建新 talk 的步骤：

1. 将 `template/` 目录复制到一个以日期格式 `YYYY-MM-DD` 命名的新目录
2. 更新 `package.json`，设置正确的 base 路径
3. 编辑 `slides.md` 填入内容
4. 准备发布时，按照上方「将 Talk 发布到 Netlify」的步骤操作（**不要**运行 `pnpm update`）

新 talk 的示例结构：
```
2026-02-15/
├── src/
│   ├── slides.md       # 主要 slide 内容
│   └── package.json    # talk 专属依赖
├── README.md           # talk 描述
└── *.pdf              # （可选）导出的 PDF
```
