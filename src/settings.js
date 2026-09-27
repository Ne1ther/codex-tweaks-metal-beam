export function mountSettings(container,getConfig,update,diagnose) {
  const page=document.createElement('section');page.className='ctmb-settings';
  page.innerHTML=`<h2>金属与流光</h2><p>发送键金属常亮，语音键接收反光；模型文字后有轻柔的波动雾光。运行时输入框流光更明亮。</p>
    <label>材质色调<select aria-label="材质色调"><option value="chromatic">冷色虹彩 · 默认</option><option value="silver">银色</option><option value="gold">暖金</option></select></label>
    <label>材质强度<input aria-label="材质强度" type="range" min="0.2" max="1" step="0.05"></label>
    <label>流动动画<input aria-label="流动动画" type="checkbox" data-setting="motion"></label>
    <label>Border Beam 柔光<input aria-label="Border Beam 柔光" type="checkbox" data-setting="beam"></label>
    <label>侧栏任务行光效<input aria-label="侧栏任务行光效" type="checkbox" data-setting="broad"></label>
    <label>模型文字中线柔雾<input aria-label="模型文字柔雾" type="checkbox" data-setting="modelHaze"></label>
    <label>Codex / ChatGPT 文字炫彩<input aria-label="模式名称文字炫彩" type="checkbox" data-setting="wordmarkHaze"></label>
    <p>自动跟随深浅主题和系统“减少动态效果”。设置只保存在本机。</p>
    <button type="button">检查效果状态</button><output aria-live="polite"></output>`;
  const output=page.querySelector('output');
  const refresh=()=>{const config=getConfig();page.querySelector('select').value=config.palette;page.querySelector('input[type="range"]').value=config.intensity;for(const el of page.querySelectorAll('[data-setting]'))el.checked=config[el.dataset.setting];};
  const show=()=>{const d=diagnose();output.textContent=`版本 ${d.version} · ${d.supported?'WebGL2 可用':'WebGL2 不可用，保留原按钮'}\n${d.metals} 个金属按钮 · ${d.reflections} 个反光面 · ${d.beams} 个输入框柔光\n${d.modelBands} 条模型文字柔雾 · ${d.wordmarks} 处模式文字炫彩\n${d.running?'运行中':'空闲'} · ${d.paused?'动画已暂停':'材质流动中'}${d.error?'\n效果错误：'+d.error:''}`;};
  const change=event=>{const el=event.target;const patch=el.tagName==='SELECT'?{palette:el.value}:el.type==='range'?{intensity:Number(el.value)}:{[el.dataset.setting]:el.checked};const saved=update(patch);refresh();show();if(!saved)output.textContent+='\n本次设置已生效，但浏览器未允许保存。';};
  const button=page.querySelector('button');
  page.addEventListener('change',change);button.addEventListener('click',show);
  container.append(page);refresh();show();
  return ()=>{page.removeEventListener('change',change);button.removeEventListener('click',show);page.remove();};
}
