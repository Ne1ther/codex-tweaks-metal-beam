// One fixed, button-sized color field. Only opacity changes; no canvas, blur,
// geometry animation, timer or frame callback is needed for the idle voice state.
export const VOICE_GLOW_CSS=`
[data-codex-tweaks-mb-voice] {isolation:isolate}
.ctmb-voice-light {position:absolute;inset:0;border-radius:inherit;pointer-events:none!important;z-index:-1;overflow:hidden;contain:paint;opacity:.84;transition:opacity 180ms ease}
.ctmb-voice-light::before {content:'';position:absolute;inset:0;border-radius:inherit;background:radial-gradient(ellipse at 28% 18%,rgba(222,244,255,.78),transparent 68%),radial-gradient(ellipse at 76% 84%,rgba(123,176,222,.56),transparent 73%);opacity:.26;animation:ctmb-voice-breathe 7s cubic-bezier(.45,0,.55,1) -2s infinite alternate}
[data-codex-tweaks-mb-voice="light"] .ctmb-voice-light::before {background:radial-gradient(ellipse at 28% 18%,rgba(122,178,215,.48),transparent 68%),radial-gradient(ellipse at 76% 84%,rgba(117,149,197,.4),transparent 73%)}
[data-codex-tweaks-mb-voice]:is(:hover,:focus-visible) > .ctmb-voice-light {opacity:1}
[data-codex-tweaks-mb-voice-paused="true"] .ctmb-voice-light::before {animation-play-state:paused}
@keyframes ctmb-voice-breathe {from{opacity:.26}to{opacity:.7}}
@media(prefers-reduced-motion:reduce){.ctmb-voice-light::before{animation-play-state:paused!important}.ctmb-voice-light{transition:none}}
@media(forced-colors:active){.ctmb-voice-light{display:none!important}}
`;
