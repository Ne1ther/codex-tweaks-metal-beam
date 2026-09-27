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
