# 0.3.6 validation · 2026-09-25

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
