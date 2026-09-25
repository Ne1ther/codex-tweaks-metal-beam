// The soft paths are static SVG images. Their textures move as two composited
// layers; neither the paths nor blur filters are recalculated on pointer input.
function ribbon(path,colors){
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="72" viewBox="0 0 600 72" preserveAspectRatio="none"><defs><linearGradient id="silk"><stop stop-color="${colors[0]}" stop-opacity=".14"/><stop offset=".28" stop-color="${colors[1]}" stop-opacity=".6"/><stop offset=".62" stop-color="${colors[2]}" stop-opacity=".52"/><stop offset="1" stop-color="${colors[0]}" stop-opacity=".12"/></linearGradient><filter id="mist" x="-20%" y="-100%" width="140%" height="300%"><feGaussianBlur stdDeviation="9"/></filter></defs><path d="${path}" fill="none" stroke="url(#silk)" stroke-width="15" stroke-linecap="round" filter="url(#mist)"/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
}
const near=ribbon('M-50 36 C30 22 93 23 164 35 S275 50 349 35 S459 23 515 36 S599 49 657 32',['#bfd2df','#93bce4','#c2afe0']);
const far=ribbon('M-60 31 C16 48 93 50 164 34 S270 23 339 37 S459 49 528 32 S615 25 665 39',['#b9cfd7','#c9b7d7','#96cdd1']);
export const MODEL_HAZE_CSS=`
[data-codex-tweaks-mb-model] {isolation:isolate}
.ctmb-model-haze {position:absolute;z-index:-1;display:block;pointer-events:none;overflow:hidden;contain:strict;mask-image:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent),linear-gradient(0deg,transparent,#000 14%,#000 86%,transparent);mask-composite:intersect}
.ctmb-model-haze[hidden] {display:none}
.ctmb-model-haze i {display:block;position:absolute;left:-40%;top:0;width:180%;height:100%;background-image:${near};background-repeat:no-repeat;background-size:100% 100%;transform-origin:50% 50%;will-change:transform;animation:ctmb-model-silk 13s cubic-bezier(.42,0,.58,1) infinite alternate}
.ctmb-model-haze i + i {background-image:${far};animation-name:ctmb-model-silk-back;animation-duration:19s;animation-delay:-7s;opacity:.8}
[data-codex-tweaks-mb-model="light"] > .ctmb-model-haze {opacity:.8}
.ctmb-model-haze[data-paused="true"] i {animation-play-state:paused;will-change:auto}
@keyframes ctmb-model-silk {0%{transform:translate3d(-10%,0,0) scaleY(.9) rotate(-.5deg)}50%{transform:translate3d(0,-.5px,0) scaleY(1.16) rotate(.4deg)}100%{transform:translate3d(10%,.5px,0) scaleY(1.02) rotate(-.2deg)}}
@keyframes ctmb-model-silk-back {0%{transform:translate3d(9%,.5px,0) scaleY(1.05) rotate(.4deg)}50%{transform:translate3d(-1%,0,0) scaleY(.85) rotate(-.3deg)}100%{transform:translate3d(-9%,-.5px,0) scaleY(1.15) rotate(.2deg)}}
@media (prefers-reduced-motion:reduce){.ctmb-model-haze i{animation-play-state:paused!important}}
`;
