import {MODEL_HAZE_CSS} from './model-haze.js';
import {WORDMARK_CSS} from './wordmark.js';
export const OWN='data-codex-tweaks-mb-owned';
export const METAL='data-codex-tweaks-mb-metal';
export const POSITION='data-codex-tweaks-mb-position';
export const SURFACE_MARK='data-codex-tweaks-mb-surface';
export const CSS=`
${MODEL_HAZE_CSS}
${WORDMARK_CSS}
[data-codex-tweaks-mb-position] { position:relative!important }
[data-codex-tweaks-mb-metal] {
  isolation:isolate!important; overflow:visible!important;
  background:transparent!important; border-color:transparent!important;
  color:#f8f8f8!important;
}
[data-codex-tweaks-mb-metal="light"] {color:#1d1d1d!important}
[data-codex-tweaks-mb-metal]:is(:disabled,[aria-disabled="true"]){opacity:1!important;color:rgba(248,248,248,.4)!important}
[data-codex-tweaks-mb-metal="light"]:is(:disabled,[aria-disabled="true"]){color:rgba(29,29,29,.4)!important}
[data-codex-tweaks-mb-owned], [data-codex-tweaks-mb-owned] *,
[data-ctmb-metal-fx-reflection], [data-ctmb-metal-fx-reflection] * {
  pointer-events:none!important;
}
.ctmb-metal-mount {position:absolute;inset:0;z-index:-1;contain:layout paint style;overflow:clip;overflow-clip-margin:12px;border-radius:inherit}
.ctmb-metal-mount > .ctmb-metal-fx-root {display:flex}
.ctmb-metal-mount::after {content:'';position:absolute;inset:0;z-index:5;border-radius:inherit;pointer-events:none;background:linear-gradient(135deg,rgba(231,239,255,.10),transparent 60%);box-shadow:inset 0 0 0 1px rgba(204,220,255,.24);opacity:0;transition:opacity 180ms cubic-bezier(.2,.7,.2,1)}
[data-codex-tweaks-mb-metal]:is(:hover,:focus-visible):not(:disabled,[aria-disabled="true"]) > .ctmb-metal-mount::after {opacity:1}
.ctmb-overlay {position:fixed!important;inset:0!important;z-index:2147483000!important;overflow:clip!important;pointer-events:none!important;contain:strict;isolation:isolate}
.ctmb-glow-portal,.ctmb-beam-mount {position:absolute;left:0;top:0;overflow:visible;pointer-events:none!important}
.ctmb-cached-beam {position:absolute;inset:0;pointer-events:none;transition:opacity .35s ease}
.ctmb-beam-frame {position:absolute;inset:0;border-radius:inherit;opacity:0;will-change:opacity;animation:ctmb-beam-crossfade 16s linear infinite}
@keyframes ctmb-beam-crossfade {0%,100%{opacity:1}25%,75%{opacity:0}}
.ctmb-beam-mount {box-shadow:inset 0 0 0 1px rgba(161,184,216,.15)}
.ctmb-beam-mount[data-theme="light"] {box-shadow:inset 0 0 0 1px rgba(72,99,132,.14)}
[data-codex-tweaks-mb-surface="control"]:is(:hover,:focus-visible):not([data-codex-tweaks-mb-metal]):not([data-codex-tweaks-mb-surface="sidebar-row"] *) {box-shadow:inset 0 0 0 1px rgba(162,183,214,.25)}
[data-codex-tweaks-mb-surface="sidebar-row"] {isolation:isolate}
.ctmb-sidebar-light {position:absolute;inset:0;z-index:-1;pointer-events:none;border-radius:inherit;opacity:0;background:linear-gradient(115deg,rgba(182,208,244,.09),rgba(187,171,225,.025));box-shadow:inset 0 0 0 1px rgba(172,194,225,.18);transition:opacity 170ms cubic-bezier(.2,.7,.2,1);contain:paint}
[data-codex-tweaks-mb-surface="sidebar-row"]:is(:hover,:focus-visible) > .ctmb-sidebar-light {opacity:1}
[data-codex-tweaks-mb-metal] > .ctmb-sidebar-light {visibility:hidden}
[data-codex-tweaks-mb-account] {isolation:isolate}
.ctmb-account-haze {position:absolute;inset:0;z-index:-1;overflow:hidden;contain:strict;pointer-events:none;border-radius:inherit;background:linear-gradient(100deg,rgba(95,134,204,.025),rgba(186,145,196,.055),rgba(106,160,185,.03))}
.ctmb-account-haze i {position:absolute;inset:-35% -15%;display:block;pointer-events:none;will-change:transform;transform-origin:50% 70%;background:radial-gradient(ellipse 50% 85% at 18% 85%,rgba(104,154,231,.26),rgba(107,150,228,.1) 40%,transparent 76%),radial-gradient(ellipse 38% 70% at 75% 40%,rgba(173,147,218,.22),rgba(172,149,209,.07) 45%,transparent 80%);animation:ctmb-account-drift 18s cubic-bezier(.45,0,.55,1) infinite alternate}
.ctmb-account-haze i + i {background:radial-gradient(ellipse 55% 65% at 64% 92%,rgba(128,185,203,.24),rgba(124,177,204,.07) 45%,transparent 80%),radial-gradient(ellipse 36% 80% at 95% 72%,rgba(201,175,186,.15),transparent 76%);animation-duration:24s;animation-delay:-11s;animation-direction:alternate-reverse}
[data-codex-tweaks-mb-account="light"] > .ctmb-account-haze {opacity:.72}
.ctmb-account-haze[data-paused="true"] i {animation-play-state:paused;will-change:auto}
@keyframes ctmb-account-drift {from{transform:translate3d(-6%,-3%,0) scale(1.02)}to{transform:translate3d(6%,4%,0) scale(1.13)}}
[data-codex-tweaks-mb-surface="panel"] {box-shadow:inset 0 0 0 1px rgba(162,183,214,.18)}
.ctmb-beam-mount [data-beam],.ctmb-beam-mount [data-beam]>* {pointer-events:none!important}
.ctmb-beam-mount[data-paused="true"] *, .ctmb-beam-mount[data-paused="true"] *::before,
.ctmb-beam-mount[data-paused="true"] *::after {animation-play-state:paused!important}
.ctmb-settings {font:inherit;color:inherit;max-width:680px;padding:20px}
.ctmb-settings h2{font-size:20px;font-weight:600;margin:0 0 12px}
.ctmb-settings p{line-height:1.65;opacity:.72;font-size:13px}
.ctmb-settings label{display:flex;justify-content:space-between;align-items:center;gap:24px;padding:14px 0;border-bottom:1px solid color-mix(in srgb,currentColor 10%,transparent)}
.ctmb-settings select,.ctmb-settings button{font:inherit;color:inherit;background:color-mix(in srgb,currentColor 6%,transparent);border:1px solid color-mix(in srgb,currentColor 15%,transparent);border-radius:8px;padding:8px 12px}
.ctmb-settings output{display:block;white-space:pre-line;font-size:12px;line-height:1.7;margin-top:12px;opacity:.7}
@media (prefers-reduced-motion:reduce){.ctmb-beam-mount *, .ctmb-beam-mount *::before,.ctmb-beam-mount *::after,.ctmb-account-haze i{animation-play-state:paused!important}.ctmb-metal-mount::after,.ctmb-sidebar-light{transition:none}}
`;
