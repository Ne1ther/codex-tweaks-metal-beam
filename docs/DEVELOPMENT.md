# 开发与发布

## 两份目录的职责

这个 Git 仓库是可维护、可发布的源码。Codex Tweaks 的 `packages` 目录中是宿主实际加载的安装副本。**修改本仓库不会自动改变已启用的效果**；构建并通过宿主更新后才生效。

以当前安装版 0.3.6 为基线整理本仓库。首次 GitHub 发布补充文档、仓库元数据和打包工具，不改变该版本的视觉行为，也不重新运行训练基准。

## 目录

```text
package.json                Tweaks API v3 清单及开发命令
src/                        页面识别、生命周期、样式和预构建材质
src/vendor/material-runtime.js
                            宿主加载的独立材质 bundle
vendor-src/                 上游材质源码与本地适配
preview/                   模拟界面、交互检查和离线预览
tooling/                   锁定的构建依赖、构建与打包脚本
tests/                     Node 包级检查
docs/                      开发和性能说明
licenses/                  第三方许可证全文
dist/                      生成的安装 ZIP 与校验文件，不入 Git
```

`src/settings.js` 只由独立预览使用；生产入口没有设置页注册。`vendor-src` 中保留的上游功能不一定会被运行时挂载，具体适配见第三方来源说明。

## 构建与检查

需要 Node.js 22+；打包另需 `zip` 命令。根清单没有 npm 运行时依赖；构建依赖单独锁定在 `tooling/package-lock.json`。

```sh
npm ci --prefix tooling --ignore-scripts
npm run build
npm test
```

构建生成 `src/vendor/material-runtime.js` 与 `preview/standalone.html`。两者必须与源码一同提交，Git 安装才能直接使用预构建材质。依赖安装不执行生命周期脚本。构建明确从锁定的 tooling 目录解析 React 等依赖，并拒绝混入仓库外的依赖，防止上级工作空间导致重复 React。

打开 `preview/standalone.html` 可以检查深浅色、空闲 / 运行、侧栏切换、模型文字和原生按钮行为。展开“兼容性检查”可运行页面里的已有回归检查。预览的控件是模拟控件；通过预览不等于验证了新版本 Codex 的全部 DOM。

需要真实宿主验证时，用原版 Tweaks 安装本地包 / ZIP，再启用当前版本。不要改写 Codex 或 Tweaks 应用，也不要用私有模块和未声明的后台接口补缺。

## 修改约定

- 保持稳定包名 `ct-metal-beam`，API 版本为 3。
- 装饰节点使用包命名空间，保持 `pointer-events: none`。
- 观察器、监听器、定时器、动画、外部 DOM 修改和 GPU 资源都要在停用时释放或恢复。
- 不读取草稿、对话或账号姓名；不加入遥测、运行时远程资源或 Node 权限。
- 材质修改优先更新 `vendor-src` 后重建，不直接编辑压缩 bundle。
- 保留第三方许可和改动记录。发布前区分源码检查、预览观察与实际 Codex 验证。

## 打包与发布

```sh
npm run package
```

只把白名单内的源码、文档、预览和许可证放入 ZIP。打包脚本拒绝符号链接和特殊文件，排除 `node_modules`、Git 元数据和历史产物。输出目录含安装 ZIP 和 `SHA256SUMS`。

首次发布使用 `v0.3.6` 标签。后续发行时同步更新清单、状态诊断版本、预览版本、测试期望值和更新记录，重新构建并检查。已发布的版本标签应保持不变；修复以新版本发布。

GitHub Release 附加安装 ZIP 与校验文件，安装者也可通过发布标签从 Git 安装。本仓库不是 npm 发布包，无需执行 `npm publish`。
