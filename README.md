# 金属与流光 · Metal & Beam

[English](README.en.md) · [下载](https://github.com/Ne1ther/codex-tweaks-metal-beam/releases/latest) · [开发说明](docs/DEVELOPMENT.md) · [性能说明](docs/PERFORMANCE.md)

为 **Codex 桌面应用**添加液态金属光影、输入框边缘流光和文字柔雾。通过原版 [Codex Tweaks](https://github.com/codex-tweaks/codex-tweaks) 加载，无需改应用、额外启动命令或 Node 后台授权。

这是第三方外观功能包，包名为 `ct-metal-beam`，使用 Tweaks API v3。

## 光效出现在哪里

| 位置 | 效果 |
| --- | --- |
| 发送 / 停止按钮 | 空闲时也保持液态金属光影；空输入时仍遵守原生按钮的禁用状态 |
| 空输入时的主语音按钮 | 淡银蓝柔光缓慢呼吸，悬停稍亮；输入文字后自动切回发送键金属效果 |
| 旁边的语音输入按钮 | 被动接受发送按钮的邻近反光，不单独挂载金属动画 |
| 输入框 | Border Beam 边缘流光，运行时增强；装饰不进入输入框的滚动布局 |
| 侧栏当前选中项 | 金属光影；切换选中项时复用已有材质画布 |
| 侧栏其他任务行 | 轻量悬停亮度变化 |
| 模型与档位文字 | 仅文字笔画内缓慢交融的银白、淡蓝与浅紫；按钮背景和下拉箭头保持原样 |
| 左上 Codex / ChatGPT 名称 | 只在字形内交融的淡彩，兼容新版 SVG 字标；箭头与菜单保持原样 |

装饰层不接管点击、发送、语音或模型选择操作。动画在窗口失焦、页面隐藏或系统开启“减少动态效果”时暂停，回到窗口后恢复。它不提供原生窗口透明、Ghostty 式背景模糊或 HDR 输出。

对话目录刻度、顶部用量组件、通用工具栏和菜单保留原来的外观，不再统一添加悬停边框。键盘导航的原生焦点提示保留。

## 安装

需要已经能正常运行的 **Codex 桌面应用和 Codex Tweaks API v3 宿主**。本项目不是浏览器扩展，也不是 Codex 自带插件商店的插件。

### 从 Git 安装（推荐）

1. 打开原版 Codex Tweaks → **功能包** → **从 Git 安装**。
2. 填入仓库地址：`https://github.com/Ne1ther/codex-tweaks-metal-beam.git`。
3. 选择发布标签 `v0.3.11`，或选择最新语义化版本标签以接收后续版本。
4. 安装和编译完成后，打开 **ct-metal-beam** 的开关。
5. 回到 Codex，让窗口获得焦点，即可看到空闲状态下的光效。

### 从 ZIP 安装

在 [Releases](https://github.com/Ne1ther/codex-tweaks-metal-beam/releases/latest) 下载 **ct-metal-beam-0.3.11.zip**，然后在 Tweaks 功能包页面选择“安装本地包”。这个 ZIP 根目录直接包含 `package.json`，不包含宿主应用、依赖目录或符号链接。

已有本地版本时，先确认它的包名同样是 `ct-metal-beam`，使用宿主提供的更新流程。避免同时启用多份相同效果的副本。

## 怎么使用、开关在哪里

启用后自动识别适用控件，新安装默认开启上述效果。**总开关在 Codex Tweaks 的功能包页面，不在 Codex 设置里。**本版本没有向 Codex 注册设置页，也没有后台 Node 进程。

旧版本保存的本地偏好会继续保留。仓库中的 `preview/standalone.html` 可以离线打开，预览不同状态；它的设置面板只控制该预览，不是 Codex 内的设置入口。

要停止效果，关闭 Tweaks 中的 `ct-metal-beam` 开关。停用时释放插件自己的画布、观察器、监听器、动画、样式与装饰节点，恢复修改前的控件属性。

## 性能与兼容

0.3.11 新增的 SVG 字标和主语音柔光只改变小范围渐变层的透明度，没有新增 WebGL、逐帧 JavaScript 或动态模糊。字标尺寸或路径变化时才重建字形蒙版；不支持的 SVG 保留原样。语音识别依据控件标签，不读取草稿。

0.3.10 将原始金属材质按原像素密度预生成一段动画，再用浏览器的位移动画播放。缓存就绪后，金属环不再逐帧运行 JavaScript 或着色器；反光与柔光保留低频采样。金属帧间隔仍为 1/60 秒，悬停不创建新实例，也不改变按钮位置。

相对 0.3.9，固定 Retina 预览的两轮空闲对照中，主线程用时下降约 **33%**、脚本用时下降约 **49%**；独立 GPU 计时测得着色器执行时间下降约 **94%**。最后一项只计算着色器，不能当作整个 Codex 的 GPU 使用率降幅。缓存有首次生成和内存成本，详细数据及历史训练测试见 [性能说明](docs/PERFORMANCE.md)。

- 当前验证平台为 macOS；Windows / Linux 未验证。
- 支持浅色、深色及系统减少动态效果。WebGL2 不可用时不挂载金属画布，保留原生控件。
- 金属缓存每实例最多 32 MiB、合计最多 64 MiB 逻辑 RGBA 数据；浏览器副本和临时数据另计。尺寸、像素比或主题改变时重建，超限或解码失败时回退到实时渲染。
- 最多五个金属实例、两个输入框流光；画布像素比上限为 2。多个窗口、不同分辨率及其他外观插件会影响开销。
- 控件定位依赖 Codex 页面中可观察的语义和 DOM 标记。Codex 更新后，个别位置可能需要重新适配。
- 单个光效被其他面板遮挡、控件离开可见区域或窗口失焦时，可能隐藏或暂停。

已有版本的验证记录保留在 [VALIDATION.md](VALIDATION.md)，与真实 Codex 的兼容性验收分开记录。

## 权限与隐私

- **Renderer：**读取控件标签、尺寸、焦点、可见性和运行状态，并添加可移除的装饰。
- **内容：**功能代码不读取草稿、对话正文或账号姓名；模式文字匹配仅限 Codex / ChatGPT / ChatGPT Work 标签。
- **Node：**不使用。运行时不访问文件系统、不启动子进程。
- **网络：**运行时不发起网络请求；材质代码随包提供。安装或开发构建的依赖下载由宿主 / npm 处理。
- **存储：**视觉偏好保存在本机页面的 localStorage，不上传遥测数据。

## 开发

仓库自带预构建材质，安装者无需构建。修改源码时，使用 Node.js 22 或更高版本：

```sh
npm ci --prefix tooling --ignore-scripts
npm run build
npm test
npm run package
```

最后一步需要 `zip` 命令，生成 `dist/ct-metal-beam-0.3.11.zip` 和校验文件。目录结构、预览、发布以及安装版和源码版的关系见 [开发说明](docs/DEVELOPMENT.md)。

## 致谢与许可

材质参考并适配自 [Libraries.dev Metal](https://libraries.dev/metal) 与 [Border Beam](https://libraries.dev/beam)，液态金属着色器来自 [Paper Shaders](https://github.com/paper-design/shaders)。本项目不代表这些项目或 OpenAI 的官方产品。

本项目采用 [MIT License](LICENSE)。第三方组件保留各自的 MIT / Apache-2.0 许可，完整来源、版本及改动见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)、[NOTICE](NOTICE) 和 [licenses/](licenses/)。
