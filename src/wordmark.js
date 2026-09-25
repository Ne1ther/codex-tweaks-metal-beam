// Only the native label's glyphs receive the softly blended color field.
// Keep the native text sharp. A decorative, accessibility-empty pseudo-element
// crossfades a second fixed color field; neither field is repainted per frame.
export const WORDMARK_CSS=`
[data-codex-tweaks-mb-wordmark] {
  position:relative;
  --ctmb-word-ink:#d7dce7;--ctmb-word-blue:#91d2e7;--ctmb-word-violet:#ccafe8;--ctmb-word-rose:#e2bfce;
  background-image:radial-gradient(ellipse at 30% 35%,var(--ctmb-word-blue),transparent 57%),radial-gradient(ellipse at 70% 62%,var(--ctmb-word-violet),transparent 58%),linear-gradient(110deg,var(--ctmb-word-ink) 8%,var(--ctmb-word-rose) 49%,var(--ctmb-word-ink) 90%);
  background-size:210% 220%,230% 210%,180% 100%;background-position:0% 45%,100% 55%,25% 50%;background-repeat:no-repeat;
  -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;
}
[data-codex-tweaks-mb-wordmark]::after {
  content:attr(data-codex-tweaks-mb-wordmark-text) / "";
  position:absolute;inset:0;pointer-events:none;font:inherit;letter-spacing:inherit;white-space:inherit;
  background-image:radial-gradient(ellipse at 75% 60%,var(--ctmb-word-blue),transparent 65%),radial-gradient(ellipse at 22% 35%,var(--ctmb-word-rose),transparent 65%),linear-gradient(110deg,var(--ctmb-word-violet),var(--ctmb-word-ink));
  -webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;
  opacity:.18;animation:ctmb-wordmark-mist 14s cubic-bezier(.45,0,.55,1) infinite alternate;
}
[data-codex-tweaks-mb-wordmark="light"] {--ctmb-word-ink:#4f5265;--ctmb-word-blue:#36778b;--ctmb-word-violet:#765592;--ctmb-word-rose:#94617e}
[data-codex-tweaks-mb-wordmark-paused="true"]::after {animation-play-state:paused}
@keyframes ctmb-wordmark-mist {from{opacity:.18}to{opacity:.9}}
@media (prefers-reduced-motion:reduce){[data-codex-tweaks-mb-wordmark]::after{animation-play-state:paused!important}}
@media (forced-colors:active){[data-codex-tweaks-mb-wordmark]{background:none!important;-webkit-text-fill-color:currentColor!important}[data-codex-tweaks-mb-wordmark]::after{display:none!important}}
`;
