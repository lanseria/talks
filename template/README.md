# Template

新 talk 的模板。创建一场新 talk：

1. 复制 `template/`（不含 `node_modules`）到以日期命名的新目录 `YYYY-MM-DD/`
2. 修改 `src/package.json` 中的 `build` / `export`，把 `YYYY` / `slug` 占位替换为语义化 slug（如 `/2026/data-infra/`），**不要**直接用日期目录作为 base
3. 编辑 `src/slides.md`：改 `title`、`head` 中的 `og:title`，以及正文内容
4. 在 `src/` 下执行 `pnpm install && pnpm dev` 预览

## 注意事项

- **不要创建 `src/index.html`**：Slidev 会自动生成入口页并警告忽略自带的；字体 / favicon / og 信息统一写在 `slides.md` 的 frontmatter `head` 中
- `src/vite.config.ts` 从根配置导入时**必须带 `.ts` 扩展名**（`'../../vite.config.ts'`），否则 Vite native config loader 会警告
- 幻灯片备注（`<!-- -->` 注释块）即演讲者备注，导出/演示时可见

## 发布到 Netlify（手工维护，勿跑 `pnpm update`）

`netlify.toml` 由人工维护，发布时手动追加（详见根目录 `AGENTS.md`）：

```toml
[[redirects]]
from = "/YYYY/slug/*"
to = "/YYYY/slug/index.html"
status = 200
```

并在根 `README.md` 对应年份标题下添加条目。
