# Third-party sources

The visual engine is bundled locally; none of these packages is fetched at runtime.

| Source | Version | License | Use |
| --- | --- | --- | --- |
| MetalFx | 2.0.11 | MIT | Original metal shader compositor, glow, rim and proximity reflection |
| Border Beam | 1.4.1 | MIT | Original md / ocean perimeter light |
| @paper-design/shaders | 0.0.80 | Apache-2.0 | Original liquidMetal material function; adapted vertex crop and ring-only output stage |
| React / React DOM | 18.3.1 | MIT | Isolated decorative roots |
| Scheduler | 0.23.2 | MIT | React DOM runtime |

MetalFx and Border Beam sources were obtained from https://github.com/Jakubantalik/Libraries.dev at commit `f20116327f4e3b28d0fb70b04437dfd092bf88fe`. Reference pages: https://libraries.dev/metal and https://libraries.dev/beam . Upstream authors' full license notices are preserved under `licenses/`; Paper attribution is preserved in `NOTICE`.

The adapter preserves material rendering and adapts lifecycle, namespace and pointer interaction:

- Prefix MetalFx class names / data attributes with `ctmb-`.
- Move stylesheet and document visibility listener ownership from module import into activation; remove them at teardown.
- The bend source remains in vendor-src for attribution, but 0.3.1 no longer mounts it. Native click handling remains on Codex's button.
- Remove GL context listeners, pending reflection animation frames and bend stylesheet on teardown.
- Preserve and conditionally restore neighbor elements' prior inline position / isolation values.
- Optionally portal the original wide glow host to an owned overlay outside native scrolling containers. Border Beam is mounted in the same overlay and aligned with its native anchor. Material math and glow dimensions are preserved.

- Disable optional cursor light and pointer occluder tracking before mounting materials. Their disabled configurations now remove pointer listeners instead of leaving an idle listener attached. Native-control hover uses a small CSS opacity highlight.

The Paper material function, preset values, glow geometry, rim, sampling resolution and reflection shaders are not simplified. In 0.3.6, direct.ts renames the material main function, wraps its output in a rounded-ring alpha mask and crops the vertex coordinates to match the original shared texture mapping. A static narrow ring mesh avoids shading its empty centre; mask multiplication follows the material function so GLSL derivatives remain valid. Visible rings use small WebGL contexts, while a shared auxiliary source feeds low-rate reflections and glow sampling. Context loss falls back to the original 2D path. Reflection geometry is cached until a layout invalidation. The upstream Border Beam style generator is preserved; the 0.3.5 adapter renders four static ocean phases and animates only their opacity instead of its moving-angle component. The 0.3.6 Metal loop has up-to-60 fps presentation, 6/12 fps auxiliary activity pacing and an integrated slower idle clock; the opacity envelope uses a compositor transition. The adapter uses stock chromatic / circle settings, strength 0.9 and innerShadow, matching the approved study.

In 0.3.9 the four static Beam phases are flattened to cached PNG textures with the browser's own SVG/CSS renderer, retaining the generated CSS as a fallback. Metal color sampling uses a WebGL2 pixel-pack buffer and a nonblocking fence check; unused depth/stencil buffers are disabled. Reflection canvases request CPU backing only when the cursor-occlusion feature actually needs frequent pixel reads. These changes retain the material function, geometry, colors and presentation cadence.

In 0.3.10 the unchanged shader and ring mesh are used to bake native-resolution PNG frame atlases. Browser transform animations replay the frames, with a premultiplied-alpha smoothstep blend across the loop seam. Temporal output is a finite loop rather than the upstream unbounded phase progression. Memory/dimension limits and decoding failures retain live rendering; auxiliary glow and reflection sampling remain live at their existing lower rate.
