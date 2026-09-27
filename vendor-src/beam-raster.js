// Flatten the unchanged, static Border Beam CSS once per size/theme. During
// playback Chromium only blends four RGBA images, not twelve masked/filter
// surfaces. No app content, external image or network request enters the SVG.
export async function rasterizeBeam(frames,width,height,dpr){
  const scale=Math.min(dpr,2,Math.sqrt(4_000_000/(width*height*frames.length)));
  const w=Math.max(1,Math.ceil(width*scale)),h=Math.max(1,Math.ceil(height*scale));
  return Promise.all(frames.map(async({key,css})=>{
    const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.setAttribute('width',String(w));svg.setAttribute('height',String(h));
    svg.setAttribute('viewBox',`0 0 ${width} ${height}`);
    const foreign=document.createElementNS(svg.namespaceURI,'foreignObject');
    foreign.setAttribute('width',String(width));foreign.setAttribute('height',String(height));
    const host=document.createElement('div');host.style.cssText='width:100%;height:100%;color-scheme:normal';
    const style=document.createElement('style');style.textContent=`*{box-sizing:border-box}${css}`;
    const material=document.createElement('div');material.setAttribute('data-beam',key);material.setAttribute('data-active','');
    material.style.cssText='width:100%;height:100%';
    const bloom=document.createElement('div');bloom.setAttribute('data-beam-bloom','');material.append(bloom);
    host.append(style,material);foreign.append(host);svg.append(foreign);
    const image=new Image();
    image.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(svg))}`;
    await image.decode();
    const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;
    const context=canvas.getContext('2d');if(!context)throw Error('Beam raster context unavailable');
    context.drawImage(image,0,0,w,h);
    const src=canvas.toDataURL('image/png');
    // Let resized/offscreen decode buffers go immediately; only PNGs remain.
    canvas.width=canvas.height=1;image.src='';
    const decoded=new Image();decoded.src=src;await decoded.decode();
    return src;
  }));
}
