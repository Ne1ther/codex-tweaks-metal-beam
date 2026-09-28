# Metal & Beam

[中文](README.md) · [Downloads](https://github.com/Ne1ther/codex-tweaks-metal-beam/releases/latest) · [Development](docs/DEVELOPMENT.md) · [Performance](docs/PERFORMANCE.md)

Liquid-metal highlights, a soft composer border beam, and soft text iridescence for the **Codex desktop app**, loaded through the original [Codex Tweaks](https://github.com/codex-tweaks/codex-tweaks) host. No app patch, custom launcher, or Node backend is required.

This is an independent, third-party **API v3** package with the stable ID `ct-metal-beam`.

## What changes

| Surface | Effect |
| --- | --- |
| Primary voice / Send / Stop button | The same liquid-metal effect in all three states; reuses the material cache even when Codex replaces a button of the same size, preserving disabled behavior |
| Adjacent dictation microphone | Passive reflected light from the primary button, without its own metal animation |
| Composer | Border Beam around the edge, stronger while running |
| Selected sidebar item | Metal light with canvas reuse when selection changes |
| Other sidebar navigation rows | Subtle hover highlights |
| Model and effort label | Silver, pale blue and violet blending inside the native text glyphs; no button background or chevron effect |
| Codex / ChatGPT heading | Color within the native glyphs, including the new SVG wordmarks; no arrow or menu decoration |

Decorations do not handle clicks or replace native actions. When a visible window loses focus, decoded Metal frames and lightweight opacity effects keep moving while live shaders, reflections, and new cache baking stop. Hidden pages and Reduce Motion pause all motion. This package does not implement native window transparency, Ghostty-style background blur, or HDR output.

Conversation outline ticks, the usage widget, generic toolbars, and menus retain their original appearance without extra hover frames. Native keyboard focus indicators are preserved.

## Install

You need the Codex desktop app and a working Codex Tweaks API v3 host. This is a Tweaks package, not a browser extension or a package for the built-in Codex plugin marketplace.

1. In Codex Tweaks, open **Packages → Install from Git**.
2. Use `https://github.com/Ne1ther/codex-tweaks-metal-beam.git`.
3. Select the released `v0.3.15` tag, or the latest semantic-version tag selector for updates.
4. After installation and compilation, enable **ct-metal-beam**.
5. Return to Codex to see the idle animation; decoded frames continue at a gentler pace when the window is visible but unfocused.

Alternatively, download **ct-metal-beam-0.3.15.zip** from [Releases](https://github.com/Ne1ther/codex-tweaks-metal-beam/releases/latest) and use the host's local package installer. The archive contains `package.json` at its root, with no host application, `node_modules`, or symlinks.

For an existing installation, use the host's update flow for the same package ID. Avoid enabling duplicate copies of the effect.

## Controls

The main switch is on the **Codex Tweaks packages page**. This version does not register a Codex settings page. New installations enable all visual effects; existing local preferences remain in effect.

Open `preview/standalone.html` for an offline demonstration. Its settings panel affects only the preview. Disabling the package removes its decorations and releases its observers, listeners, animation work, and graphics contexts.

## Performance and compatibility

Version 0.3.15 keeps decoded Metal frames and lightweight opacity effects flowing in visible but unfocused windows. It stops live shaders, reflections, and new atlas baking; uncached rings hold a static frame until focus returns. Hidden pages and Reduce Motion still pause everything.

Version 0.3.14 avoids full control discovery on every sidebar scroll event. Visible effects still reposition at display refresh rate, then targets are rediscovered once scrolling settles. Unrelated conversation autoscroll no longer searches its subtree. The new usage ring is excluded from Metal decoration.

Version 0.3.13 transfers the existing canvas and frame cache when Codex replaces the native button during Voice/Send transitions. With unchanged geometry, the cached Metal frames do not need to be baked again.

Version 0.3.12 gives primary voice the same cached Metal renderer as Send and Stop, removing the separate breathing glow. State changes reuse the material and atlas when the native button and geometry are unchanged. Matching uses control labels without reading drafts; the adjacent dictation microphone receives only reflection. Compared with the previous simple voice glow, Metal has cache generation and rendering costs.

The SVG wordmark still animates only fixed layers' opacity. Native shape/size changes rebuild its mask; unsupported SVGs stay native.

Version 0.3.10 bakes the original Metal shader into native-resolution frame atlases and plays them through transform animations with 1/60-second samples. Cached rings need no per-frame JavaScript or shader draw. Reflections retain their low-rate source; model labels and Beam keep their fixed-texture opacity animations. Hover never moves native buttons.

Two idle Retina-preview windows per version measured about **33% less main-thread time** and **49% less script time** than 0.3.9. Separate GPU timer queries measured about **94% less shader execution time**; that excludes composition and is not a whole-Codex GPU-utilization reduction. Atlas data is capped at 32 MiB per ring and 64 MiB per runtime, excluding browser copies and staging. First generation/rebuilding has a cost; oversized or failed caches retain live rendering. See [methodology, tradeoffs and historical training results](docs/PERFORMANCE.md).

macOS has been exercised; Windows and Linux have not. Light/dark appearance and reduced motion are handled. Metal rendering needs WebGL2. Control matching uses observable Codex DOM markers and may need updating after app changes. Multiple windows and overlapping theme packages can increase cost or change appearance.

## Permissions

- **Renderer:** reads control metadata, geometry, focus, visibility, and task state; adds removable decoration.
- **Content:** feature code does not read drafts, conversation text, or account names. Mode-heading matching is limited to public Codex / ChatGPT labels.
- **Node / filesystem / processes:** not used at runtime.
- **Network:** no runtime requests or telemetry; material dependencies are bundled locally. Installation and developer builds may download dependencies through the host or npm.
- **Storage:** visual preferences stay in localStorage on the device.

## Development

Prebuilt assets are committed, so installation does not require a developer build. With Node.js 22 or later:

```sh
npm ci --prefix tooling --ignore-scripts
npm run build
npm test
npm run package
```

Packaging requires the `zip` command and creates a ZIP plus checksum under `dist/`. See [development notes](docs/DEVELOPMENT.md), [validation history](VALIDATION.md), and [release notes](CHANGELOG.md).

## Credits and license

Adapted from [Libraries.dev Metal](https://libraries.dev/metal) and [Border Beam](https://libraries.dev/beam), using the [Paper Shaders](https://github.com/paper-design/shaders) liquid-metal material. This project is not affiliated with or endorsed by OpenAI or those projects.

The adapter is [MIT licensed](LICENSE). Third-party MIT / Apache-2.0 notices and modifications are documented in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md), [NOTICE](NOTICE), and [licenses/](licenses/).
