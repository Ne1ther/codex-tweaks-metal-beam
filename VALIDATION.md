# 0.3.15 validation · 2026-09-29

Visible but unfocused windows now keep already decoded Metal rings moving at half playback speed. Beam's decoded textures crossfade more slowly, while text effects continue their small opacity changes. The shared WebGL loop, halo/reflection sampling and new ring-atlas baking stop. Hidden pages and Reduce Motion still pause all motion; uncached rings remain static until focus returns.

- `npm run build`, `npm test` (39/39), and `npm run package` passed. The package is Renderer-only API v3 with no new Node permission, settings route or native-window hook.
- The standalone fixture's full browser suite passed 108/108 in the Codex in-app browser. During simulated loss of focus, cached animations advanced at `playbackRate = 0.5` while shader frame count stayed constant, no render loop was scheduled, and no cache bake remained pending. Refocus reused the material and resumed the original rate.
- Four initial focus-style failures were caused by the fixture comparing keyboard-initiated `:focus-visible` at page load against pointer-initiated `:focus` after clicking Run. The check now measures the native baseline immediately before enabling the package under the same input modality; all four passed. This change is confined to the fixture.
- The installed Codex Tweaks package showed source and active version `0.3.15` after its own rebuild. Native Codex rendering and system-wide CPU/GPU percentages were not measured in this run, so the preview's zero shader frames must not be read as zero GPU cost or a guaranteed utilization target.

---

# 0.3.12 validation · 2026-09-27

The flow under test is empty composer primary voice → typed Send → running Stop → cleared input primary voice. All three states now use the existing cached Metal renderer. The separate voice-glow module, nodes and animation lifecycle were removed; the adjacent dictation microphone stays reflection-only.

- 39 Node checks and 101 browser checks passed. The browser suite was launched with the keyboard so its focus-visible comparison uses the same input modality as the native baseline. Checks include unchanged native clicks, disabled and pressed semantics, Chinese/English and home voice labels, one primary material, passive dictation reflection, same-instance and same-atlas reuse across all three states, replacement cleanup, blur/focus, themes, SVG wordmarks and complete teardown.
- In the state-transition fixture, the primary mount and decoded atlas remained the same objects; the ring-cache bake counter did not increase. During an isolated warmed voice sample the cached animation advanced with no live ring draws, additional cache bakes or target rescans. Low-rate reflection/halo work remains. This is not a whole-app GPU utilization measurement; adding Metal to the empty voice state costs more than its former opacity-only glow.
- The owned preview was exercised at http://127.0.0.1:48739/candidate through supported CUA and tab-scoped CDP. Page identity, meaningful rendering and console health passed, with no relevant errors or warnings. Actual browser typing, Send, Stop and clear actions returned to the expected primary-voice state.
- Dark 1280 × 720 (DPR 2) and light 390 × 844 (DPR 1) previews were visually inspected. Both had one primary Metal mount and decoded cache, no old voice light and zero composer overflow. Native button geometry remained unchanged during state transitions.
- Source changes remain renderer-only API v3, with no Node entrypoint, new permission, settings registration or host modification. Original Tweaks activation is checked separately from fixture rendering; the native Codex page was not instrumented.

---

# 0.3.11 validation · 2026-09-27

The target flow is the sidebar product heading and empty composer: native SVG logo → glyph-only color; primary voice → typed Send → running Stop → cleared input → primary voice again. No host app or private module is modified. The original Tweaks renderer API v3 is unchanged, with no Node permission or settings registration.

## Checks and visible behavior

- 39 Node checks and 99 browser checks passed. New cases cover SVG sanitization, unsupported-mask/reference fallback, exact fractional bounds, lifecycle and observer disposal, late-mounted headings, native path replacement, Codex/ChatGPT switching, unchanged arrow/menu/accessibility text, primary-voice versus dictation matching, empty/Send/Stop transitions, disabled/active voice, blur/focus, pause/resume, themes and repeated cleanup.
- The fixture was exercised through supported CUA and tab-scoped CDP at `http://127.0.0.1:48738/candidate`. Native typing, Send, Stop and clearing were also exercised through browser UI actions. The page was nonblank with the expected title and controls; no relevant console errors/warnings were observed after the final reload and interactions.
- Dark desktop and light 390 × 844 layouts were inspected. At DPR 2 the narrow composer had zero horizontal/vertical overflow, one primary-voice light, and aligned SVG/mask bounds. Temporary copies of the installed application's three actual wordmark geometries (Codex, ChatGPT, ChatGPT Work) also matched their native bounds in the fixture. These application assets are not redistributed; the committed preview uses original path-letter fixtures.
- Native SVGs, their accessible labels and arrows remain intact. The effect adds an accessibility-hidden, pointer-transparent glyph mask with fixed gradients. It does not animate SVG paths, blur, background positions or geometry. Invalid masks retain the native logo.
- Primary voice has one fixed, button-sized silver-blue field. Only its opacity changes; hover adds a short opacity transition. Label matching distinguishes realtime voice from the adjacent dictation microphone without reading the draft. Typing removes the voice light before adding Send metal; clearing removes Send metal before restoring voice light.

## Isolated animation cost

After initialization, a four-second desktop sample isolated the new SVG wordmark and primary-voice glow, removing other material surfaces and disabling Beam/model decoration in the owned fixture. Temporary counters were then restored and removed.

| Four-second sample | Observed |
| --- | ---: |
| JavaScript animation-frame requests | 0 |
| DOM geometry reads | 0 |
| WebGL draw calls | 0 |
| Canvas2D drawImage calls | 0 |
| Layout count / duration | 0 / 0 ms |
| Script duration | 0.003 ms |
| Main-thread task duration | 34.123 ms |

Both sampled opacities changed during the interval, so the zero drawing/callback counts do not come from paused animation. Browser style and composition still consume work; these metrics do not establish zero GPU use, a whole-app percentage, or a below-5% utilization guarantee. The earlier Metal renderer and its cache budget are unchanged.

Live Codex page internals were not instrumented. Fixture behavior and source compatibility are separate from activation in the original Tweaks host and from the user's final visual assessment.

---

# 0.3.10 validation · 2026-09-27

Compared the frozen 0.3.9 preview from commit b490ddc with the 0.3.10 implementation through supported CUA and tab-scoped CDP. The original Tweaks installation was disabled for the final measurements, then restored with the new version. Benchmark values below come from the local preview, not instrumentation inside the native Codex conversation.

## Behavior and appearance

- 28 Node checks and 75 browser checks passed. The new tests execute the baker with a controlled renderer and Canvas2D double, covering native sizes, memory/dimension limits, 300/360 px wide Retina sidebars, packing, bounded scheduling, cancellation during yielding/encoding, resource cleanup, PNG fallback and premultiplied-alpha seam blending. Browser checks exercise decoded images, moving cached rings without live ring draws, resize/theme invalidation, pause/blur, native interactions, context loss, failed image decoding and repeated teardown.
- The original Paper material function, presets, ring mesh and native pixel density are retained. Only temporal output changes: each atlas loops 128–320 native frames with a 40-frame blend into its starting phase. The blend uses weighted premultiplied RGBA addition, avoiding a dim transparent seam.
- Dark desktop and light 390 × 844 CSS-pixel layouts were inspected. The narrow composer had no overflow, kept one visible model-text leaf, and rebuilt both ring caches. A 360 px sidebar was exercised in the browser regression suite without reducing pixel density.
- In a separate two-second presentation sample, the browser delivered about 100 animation-frame opportunities per second; the atlas advanced through 122 distinct transforms, consistent with its 60 samples/second cadence. The previous ring renderer was paced by a 60 fps JavaScript target. This sample is not a guarantee of display refresh or frame rate on every host.
- In the normal desktop atlas, the final-to-first seam RMSE over nontransparent RGBA pixels was 3.99 for the sidebar and 3.30 for Send on a 0–255 scale. Typical adjacent-frame RMSE was 8.72 and 7.90 respectively. This checks a discontinuity at the seam, not perceptual equivalence to an indefinitely running shader.

## Main-thread and call-count measurements

Both versions used a focused, visible 1100 × 950 CSS-pixel viewport at DPR 2: two metal surfaces, one passive voice reflection, one Beam, model glyph color and the mode wordmark. Each mode has two 6.5-second windows per version, after a 2.5-second navigation warmup. Idle order was A/B/A/B; running order was B/A/A/B. Running mode toggles the preview's Send state and updates a sidebar status span's text/class at 20 Hz. Those native-like updates are included in the measurement.

CDP Performance metrics measure elapsed main-thread task/script time. A temporary wrapper counts draw and scheduling calls; it is absent from the package. Values are means, not Activity Monitor CPU percentages.

| Per 6.5-second window | 0.3.9 | 0.3.10 |
| --- | ---: | ---: |
| Idle main-thread task time | 353.6 ms | 236.7 ms |
| Idle script time | 51.6 ms | 26.2 ms |
| Idle plugin RAF requests | 366.5 | 78 |
| Idle WebGL draws | 686 | 39 |
| Running + sidebar updates: task time | 431.5 ms | 396.0 ms |
| Running + sidebar updates: script time | 73.0 ms | 57.2 ms |
| Running + sidebar updates: plugin RAF requests | 399 | 134 |
| Running + sidebar updates: WebGL draws | 716.5 | 58.5 |

The auxiliary source still supplies low-rate glow and voice reflection. Once the atlas is ready, visible ring draw counts stay fixed while image transforms advance. New rings may temporarily use the live path while baking or when the cache budget/size is exceeded.

## GPU timing and its boundary

Separate 6.5-second windows used EXT_disjoint_timer_query_webgl2 around each WebGL draw, in A/B/B/A order. All query results were available and GPU_DISJOINT_EXT stayed false. No draw-time queries or profiling hooks ship with the package.

| GPU query window | 0.3.9 | 0.3.10 |
| --- | ---: | ---: |
| First window | 50.536 ms / 686 draws | 4.445 ms / 37 draws |
| Second window | 82.040 ms / 686 draws | 3.966 ms / 37 draws |
| Mean elapsed GPU time inside draw queries | 66.288 ms | 4.206 ms |

This is about 94% less time inside the measured shader draws. It excludes clearing, texture uploads, browser raster/composition, PNG generation, WindowServer, and other apps. It must not be labeled a 94% reduction in whole-Codex GPU use.

Whole-device utilization was not stable enough to attribute a percentage: unrelated load was present in several windows. A separate diagnostic with the package off and only a 10 × 10 px opacity animation also produced appreciable device activity. Continuous presentation itself has a cost; this is not a lower-bound proof or a below-5% guarantee. No training workload was started, paused or killed for this release.

## Memory and initialization tradeoffs

Each atlas keeps native resolution with at most 32 MiB of logical RGBA pixels. The runtime conservatively reserves at most 64 MiB across rings. The normal two-ring preview reserved about 39.8 MiB; browser copies, staging surfaces and compressed data are additional. Wider controls use fewer columns/frames; unsupported geometry or failed decoding falls back to the live renderer.

The baker yields after at most four frames or approximately four milliseconds of accumulated synchronous work. Individual browser/driver/codec operations can exceed that budget. One cold preview observation reached two ready caches in about 0.9 seconds and included two roughly 100 ms main-thread long tasks during initialization. Original material remains visible during generation. First-load cost is therefore still present; the steady-state results above do not describe startup. Theme, pixel density and geometry changes rebuild affected caches. Pending work is aborted when hidden/disabled; completed images, animation handles and owned blob URLs are released on removal.

The implementation follows the principle of rendering expensive content once and animating cached layers, with explicit memory limits and measured fallback behavior. References: [Motion performance](https://motion.dev/docs/performance) and [web.dev animation properties/layer management](https://web.dev/articles/stick-to-compositor-only-properties-and-manage-layer-count).

---

# 0.3.9 validation · 2026-09-27

Compared the unchanged 0.3.8 preview from commit `8248c80` with the 0.3.9 source in the Codex in-app Chromium browser, using supported CUA and tab-scoped CDP. The installed package was temporarily disabled during the final comparison to avoid running two copies. Both versions used a focused, visible 1100 × 950 CSS-pixel viewport, DPR 2, two metal surfaces, one passive voice reflection, one composer Beam, model decoration and the mode wordmark. The final 0.3.9 candidate replaces the old model haze with glyph-only iridescence.

## Current regression checks

The four package checks and 67 browser checks cover native interactions, idle/running states, unchanged hover geometry, disabled Send, sidebar material reuse, absence of unintended outline/usage frames, theme changes, model text replacement, ellipsis and unchanged dimensions, blur/focus, pause/resume, context loss/recovery and repeated cleanup. New cases cover actual decoded Beam textures, resize rebaking, CSS fallback when image decoding fails, recovery after failure, and unrelated sidebar/scroll changes causing no rescans. Image caching introduces no runtime network request, Node permission, host modification or settings registration.

Dark desktop and light 390 × 844 layouts were visually inspected. The narrow composer has zero horizontal/vertical overflow, the model effect stays within its trigger, and the resized Beam cache is ready. No relevant console warnings or errors were recorded after the final checks.

The original Border Beam CSS is rasterized, not approximated with a different gradient. A dark first-phase pixel comparison at 646 × 114 CSS pixels and DPR 2 had RGBA RMSE 0.61 on a 0–255 scale; 99.15% of channel values differed by at most one level. Small edge rasterization differences remain. The Paper Metal fragment function and sampling resolution are unchanged.

The model effect now animates only opacity between two fixed gradients clipped to each native label. Its dedicated 6.5-second sample had zero plugin RAF callbacks, target rescans, geometry queries, canvases or WebGL draws. Sample-wide script time was 0.11 ms and task time 50.9 ms, including the harness and measurement activity; this is not a whole-Codex CPU/GPU percentage. The model button itself receives no new background, mask, outline or clipping override.

## Focused-window comparison

Each mode used two 6.5-second measurements per version, with 2.5 seconds of warmup after navigation. Version order was B/A/A/B (A = 0.3.8, B = the final 0.3.9 build). The update mode changes a sidebar status span's class at 20 Hz. Instrumentation counts DOM geometry queries and rendering calls; CDP Performance metrics measure main-thread task/script time. Table values are means of the two windows, not whole-application CPU utilization.

| Per 6.5-second window | 0.3.8 | 0.3.9 |
| --- | ---: | ---: |
| Idle main-thread task time | 369.3 ms | 353.0 ms |
| Updating sidebar: main-thread task time | 466.7 ms | 390.9 ms |
| Updating sidebar: script time | 116.5 ms | 67.0 ms |
| Updating sidebar: full rediscovery scans | 65 | 0 |
| Updating sidebar: geometry reads | 1,030 | 0 |
| GPU readPixels call time, idle | 6.2 ms | <0.1 ms |
| WebGL draws, idle and updating | 686 | 686–688 |
| Observed frame interval median | 20 ms | 20 ms |
| Observed frame interval p95 | 21.0–21.5 ms | 21.4–21.9 ms |

Script time during sidebar updates fell about 43%; main-thread task time fell about 4% idle and 16% while updating. The nearly identical draw count and frame intervals confirm that this release did not obtain those savings by reducing the Metal display rate. The display in this fixture presents the capped Metal loop at approximately 50 fps; this is not a universal refresh-rate guarantee.

`readPixels` now queues into a pixel-pack buffer. A later auxiliary tick checks the fence with zero timeout before `getBufferSubData`; the short call time above is CPU call time, not eliminated GPU work. Reflection canvases stay accelerated when the package's cursor occluder is disabled. Each Beam's twelve live CSS pseudo/bloom elements become four static RGBA images; only opacity animates. A four-image raster is capped at four million pixels and rebuilt only for size, DPR or theme changes.

Across the earlier and final samples, system GPU busy readings fluctuated around 48–69% and did not establish a stable, large total-GPU reduction. They include other windows, system composition and device frequency changes. This release therefore makes no whole-Codex GPU percentage or power claim. Training was not rerun. The prior training evidence below concerns 0.3.6 only.

## Historical 0.3.6 validation · 2026-09-25

Environment: original API v3 renderer entry, localhost standalone fixture in the Codex in-app Chromium browser via the supported CUA browser API. Desktop viewport 1280 × 900; narrow light viewport 390 × 844. No app modification, Node, private API or settings extension.

## Regression checks

- Four Node package checks pass: embedded bundle syntax, configuration normalization, control labels, and renderer-only distribution without UI/Node permissions or symlinks.
- 53 browser checks pass: native input/send/model/voice/account handlers, disabled Send, visible idle motion, fixed Beam gradients, passive voice reflection, mode-label replacement, unchanged hover geometry and instance count, composer overflow, expanded model light bounds, sidebar canvas reuse, pause/resume, remount, context loss and restoration, repeated cleanup and streaming text.
- The idle ring check observed 26 presented frames in 510 ms. Pause verifies that both auxiliary frames and direct frames stop and no animation remains scheduled. Cleanup verifies zero direct surfaces as well as the original GL state.
- Direct WebGL context loss was induced in the owned fixture: the existing 2D material becomes visible; restoring the context recreates its program and ring geometry, resumes direct output and hides the fallback. No GL error was reported.
- Window blur/focus is simulated in the fixture by overriding document.hasFocus and dispatching events, restoring the native function afterward. It is not a macOS occlusion measurement.
- Reduce Motion stops the continuous drawing loop; a final one-frame state update is allowed. The sampled 700 ms contained one final direct draw per surface and no auxiliary draws.
- Dark desktop and light narrow appearance inspected. At the narrow width the model band is 76.93 × 27.27 CSS px, left margin 3 px, right margin 19.80 px, vertical margins about 4.4 px. Composer scrollWidth/clientWidth and scrollHeight/clientHeight match. The arrow is outside the haze; the label remains legible.
- No relevant console warnings/errors observed after the browser checks. No Codex settings registration or UI manifest has been restored.

## Performance samples

Temporary wrappers count WebGL drawArrays/readPixels and Canvas2D clearRect/drawImage, then restore all original functions. Performance.getMetrics measures renderer-thread activity. The fixture has two metal surfaces, one reflected voice button, one composer Beam, account haze, model haze and the mode wordmark. These are short samples, with phase-dependent halo work rather than a deterministic benchmark.

At devicePixelRatio 2, each interval is approximately 8 seconds:

| Measurement | Installed 0.3.5 | 0.3.6 |
| --- | ---: | ---: |
| Visible ring updates, each surface | 47 | 400 |
| Visible update rate | 5.9 fps | 50.0 fps |
| Direct interval median / p95 / max | n/a | 20 / 21 / 21.7 ms |
| Auxiliary shared shader draws | 47 | 45 |
| GPU pixel readbacks | 6 | 5 |
| 2D clearRect calls | 215 | 225 |
| 2D drawImage calls | 296 | 360 |
| 2D copied destination pixels | 3.010 M | 3.192 M |
| LayoutCount | 8 | 6 |
| LayoutDuration | 0.514 ms | 0.349 ms |
| RecalcStyleCount | 325 | 569 |
| RecalcStyleDuration | 73.858 ms | 92.022 ms |
| ScriptDuration | 53.253 ms | 78.690 ms |
| Renderer TaskDuration | 0.365 s | 0.547 s |

A devicePixelRatio 1 sample also presented 400 frames per surface in 8 seconds, median 20 ms and p95 about 20.6 ms. Its renderer TaskDuration was 0.425 s against 0.222 s for the 0.3.5 sample.

The 0.3.6 result deliberately trades some extra work for much smoother motion: it does not claim lower total cost than a 6 fps renderer. High-rate output draws only ring geometry; expensive sampling and Canvas2D reflection work remain low-rate. The copied-pixel counts show that high-rate display did not multiply the auxiliary copying rate by the roughly 8.5× frame-rate increase. Layout occupies a tiny fraction of either sample and does not explain the 6 fps stepping.

## GPU draw timing

EXT_disjoint_timer_query_webgl2 was available. One in eight draw calls was sampled over 6 seconds, querying completed results and deleting all queries afterward. No disjoint flag was observed. At DPR 2, the two direct surfaces each drew 300 times; 37 samples per surface had median draw durations 0.1001 ms and 0.0983 ms, means 0.1404 ms and 0.1580 ms. The auxiliary source drew 33 times with four timed samples, mean 0.1711 ms. Individual maxima reached 0.752 ms and 1.471 ms, so the means are noisy.

These timer queries cover shader draw commands only, excluding canvas/compositor work, CSS masks/opacity layers, scheduling, other app windows and power use. They are not GPU utilization percentages. Real Codex whole-process GPU usage and visual acceptance remain distinct from this local-fixture evidence.

## Release

ct-metal-beam 0.3.6 has no UI extension declaration, Node entry or runtime fetch. The ZIP excludes node_modules and symlinks. Activation in the original Tweaks host is verified separately from fixture rendering.
