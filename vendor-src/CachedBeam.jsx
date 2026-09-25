import React, {useEffect, useId, useMemo, useRef} from 'react';
import {generateBeamCSS, sizePresets, sizeThemePresets} from './border-beam/styles';

// Keep the original ocean material, but rasterize four fixed lighting phases.
// Only their opacity changes during playback: no animated gradient, mask or blur.
export function CachedBeam({radius, theme, running, paused}) {
  const root=useRef(null),id=useId().replace(/:/g,'-');
  const frames=useMemo(()=>Array.from({length:4},(_,i)=>{
    const key=`ctmb-cache-${id}-${i}`,colors=sizeThemePresets.md[theme];
    const css=generateBeamCSS({id:key,size:'md',theme,colorVariant:'ocean',
      borderRadius:radius,borderWidth:sizePresets.md.borderWidth,duration:16,
      ...colors,staticColors:true,brightness:1.5,saturation:.9,hueRange:0,glowSize:1.3});
    return {key,css:css+`\n[data-beam="${key}"][data-active]{animation:none!important;--beam-angle-${key}:${i*90}deg;--beam-opacity-${key}:1}`};
  }),[id,radius,theme]);
  useEffect(()=>{
    for(const animation of root.current?.getAnimations({subtree:true})??[]){
      if(animation.animationName!=='ctmb-beam-crossfade')continue;
      animation.updatePlaybackRate(running?1.5:.8);
      if(paused)animation.pause();else animation.play();
    }
  },[paused,running,frames]);
  return <div ref={root} className="ctmb-cached-beam" style={{borderRadius:radius,opacity:running?1:.82}}>
    {frames.map(({key,css},i)=><React.Fragment key={key}>
      <style>{css}</style>
      <div className="ctmb-beam-frame" style={{animationDelay:`${-i*4}s`}}>
        <div data-beam={key} data-active="" style={{width:'100%',height:'100%',borderRadius:radius}}><div data-beam-bloom=""/></div>
      </div>
    </React.Fragment>)}
  </div>;
}
