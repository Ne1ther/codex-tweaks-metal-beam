# Metal & Beam

[中文](README.md) · [Downloads](https://github.com/Ne1ther/codex-tweaks-metal-beam/releases/latest) · [Development](docs/DEVELOPMENT.md) · [Performance](docs/PERFORMANCE.md)

Liquid-metal highlights, a soft composer border beam, and flowing text haze for the **Codex desktop app**, loaded through the original [Codex Tweaks](https://github.com/codex-tweaks/codex-tweaks) host. No app patch, custom launcher, or Node backend is required.

This is an independent, third-party **API v3** package with the stable ID `ct-metal-beam`.

## What changes

| Surface | Effect |
| --- | --- |
| Send / Stop button | Liquid-metal light, including while idle; the native disabled state still applies |
| Adjacent voice button | Passive reflected light, without its own metal animation |
| Composer | Border Beam around the edge, stronger while running |
| Selected sidebar item | Metal light with canvas reuse when selection changes |
| Other eligible controls | Subtle hover highlights |
| Account footer | Soft animated haze across the whole footer |
| Model and effort label | A feathered band around the text center, inside the button and clear of the chevron |
| Codex / ChatGPT heading | Color within the text glyphs only |

Decorations do not handle clicks or replace native actions. Motion pauses when the window loses focus, the page is hidden, or Reduce Motion is enabled. This package does not implement native window transparency, Ghostty-style background blur, or HDR output.

## Install

You need the Codex desktop app and a working Codex Tweaks API v3 host. This is a Tweaks package, not a browser extension or a package for the built-in Codex plugin marketplace.

1. In Codex Tweaks, open **Packages → Install from Git**.
2. Use `https://github.com/Ne1ther/codex-tweaks-metal-beam.git`.
3. Select the released `v0.3.6` tag, or the latest semantic-version tag selector for updates.
4. After installation and compilation, enable **ct-metal-beam**.
5. Focus the Codex window to see the idle animation.

Alternatively, download **ct-metal-beam-0.3.6.zip** from [Releases](https://github.com/Ne1ther/codex-tweaks-metal-beam/releases/latest) and use the host's local package installer. The archive contains `package.json` at its root, with no host application, `node_modules`, or symlinks.

For an existing installation, use the host's update flow for the same package ID. Avoid enabling duplicate copies of the effect.

## Controls

The main switch is on the **Codex Tweaks packages page**. This version does not register a Codex settings page. New installations enable all visual effects; existing local preferences remain in effect.

Open `preview/standalone.html` for an offline demonstration. Its settings panel affects only the preview. Disabling the package removes its decorations and releases its observers, listeners, animation work, and graphics contexts.

## Performance and compatibility

Small WebGL canvases draw narrow metal rings at up to 60 fps. Reflections share a lower-rate source; haze and beam effects use cached textures and compositor-friendly motion where possible. Hover does not create new material instances or move native buttons.

A six-pair, short-window saturated-training experiment on an Apple M3 Max measured approximately **1.6% lower training throughput**, with the real rendering code running at about **50 fps in a fixed preview layout**. This is not a whole-Codex benchmark, a long-run guarantee, or a promise of GPU usage below 5%. See [methodology and limitations](docs/PERFORMANCE.md).

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
