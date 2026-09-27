// Small original path-letter fixtures. Production always uses the native logo's
// own geometry; no Codex application assets are redistributed in this package.
const glyphs={
  C:'M12 5C3 0 0 7 0 12S3 24 12 19',
  o:'M6 9C-1 9-1 21 6 21S13 9 6 9Z',
  d:'M12 2V21M12 12C5 4 0 10 0 15S6 24 12 18',
  e:'M0 15H12C12 6 0 6 0 15S7 24 12 19',
  x:'M0 9L12 21M12 9L0 21',
  h:'M0 2V21M0 13C5 6 12 8 12 14V21',
  a:'M0 10C9 6 12 10 12 15V21M12 14C-3 11-3 24 9 20L12 18',
  t:'M5 3V18Q5 23 11 20M0 9H11',
  G:'M13 6C2-2-2 8 0 15S9 25 14 19V13H8',
  P:'M0 21V3H7C17 3 17 13 7 13H0',
  T:'M0 3H14M7 3V21',
  W:'M0 3L3 21L8 8L13 21L16 3',
  r:'M0 9V21M0 13Q5 7 11 10',
  k:'M0 2V21M11 9L0 16L12 21',
};
export function svgWordmark(name){
  let x=2;
  const paths=[...name].map(char=>{if(char===' '){x+=7;return '';}const path=glyphs[char];const at=x;x+=char==='W'?20:17;return path?`<path d="${path}" transform="translate(${at} 0)"/>`:'';}).join('');
  return `<span class="sr-only">${name}</span><svg class="native-wordmark" aria-hidden="true" data-no-autosize="true" viewBox="0 0 ${x} 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
}
