import React, {useEffect, useRef} from 'react';
import {createRoot} from 'react-dom/client';
import {flushSync} from 'react-dom';
import {MetalFx} from './metal-fx/MetalFx';
import {SHARED, isMetalFxSupported} from './metal-fx/engine/renderer/core';
import {startRuntimeLoop, disposeRuntimeLoop, pauseShared, resumeShared, setFrameInterval, runtimeLoopState} from './metal-fx/engine/renderer/loop';
import {ensureStylesInjected, disposeStyles} from './metal-fx/styles';
import {disposeReflectionScheduler} from './metal-fx/engine/reflection/reflectionScheduler';
import {disposeReflections, reflectionTargetCount, setReflectionOccluderConfig,invalidateReflectionGeometry} from './metal-fx/engine/reflection/paint';
import {setCursorLightConfig} from './metal-fx/engine/cursor/light';
import {CachedBeam} from './CachedBeam';

const roots = new Set();
let pauseRaf = 0;
let frozen = false;
let active = false;

class EffectBoundary extends React.Component {
  state = {failed:false};
  static getDerivedStateFromError() { return {failed:true}; }
  componentDidCatch(error) { this.props.onError?.(error); }
  render() { return this.state.failed ? null : this.props.children; }
}

function MetalDecoration({neighbors, radius, variant, theme, strength, paused, preset, glowPortal}) {
  const metal = useRef(null);
  return <MetalFx ref={metal} preset={preset} variant={variant} theme={theme}
    borderRadius={radius} strength={strength} paused={paused} reflectionTargets={neighbors}
    glowPortal={glowPortal} innerShadow style={{width:'100%',height:'100%'}}>
    <span style={{display:'block',width:'100%',height:'100%',borderRadius:radius}}/>
  </MetalFx>;
}

const BeamDecoration=CachedBeam;

function mount(Component, container, initial, onError) {
  const root = createRoot(container,{identifierPrefix:'ctmb-'});
  const update = props => flushSync(() => root.render(
    <EffectBoundary onError={onError}><Component {...props}/></EffectBoundary>
  ));
  let live = true;
  const handle = {update, dispose() {
    if (!live) return;
    live = false;
    flushSync(() => root.unmount());
    roots.delete(handle);
  }};
  roots.add(handle);
  update(initial);
  return handle;
}

export const mountMetal = (container, props, onError) => mount(MetalDecoration,container,props,onError);
export const mountBeam = (container, props, onError) => mount(BeamDecoration,container,props,onError);
export {isMetalFxSupported,invalidateReflectionGeometry};

export function startRuntime() {
  if (active) return;
  active = true;
  // Native controls keep fixed geometry. Their hover highlight is an opacity
  // transition; do not start per-pointer deformation / lighting / shadow loops.
  setCursorLightConfig({enabled:false});
  setReflectionOccluderConfig({enabled:false});
  ensureStylesInjected();
  startRuntimeLoop();
}

export function setMotionPaused(paused) {
  frozen = paused;
  if (pauseRaf) cancelAnimationFrame(pauseRaf);
  pauseRaf = 0;
  if (!paused) { resumeShared(); return; }
  // A package enabled with Reduce Motion must paint its initial static frame.
  const freezeAfterFirstCopy = () => {
    pauseRaf = 0;
    if (!active || !frozen || !SHARED) return;
    if ([...SHARED.instances].some(instance => instance.visible && !instance.everCopied)) {
      resumeShared();
      pauseRaf = requestAnimationFrame(freezeAfterFirstCopy);
    } else pauseShared();
  };
  freezeAfterFirstCopy();
}

export function setActivity(running) { setFrameInterval(running ? 1000/12 : 1000/6); }

export function runtimeState() {
  return {webgl:!!SHARED, instances:SHARED?.instances.size??0,
    reflections:reflectionTargetCount(), frames:SHARED?.frameCount??0,
    ...runtimeLoopState(), paused:frozen};
}

export function disposeRuntime() {
  active = false;
  if (pauseRaf) cancelAnimationFrame(pauseRaf);
  pauseRaf = 0;
  for (const root of [...roots]) root.dispose();
  disposeReflections();
  disposeReflectionScheduler();
  disposeRuntimeLoop();
  document.getElementById('ctmb-mfx-bend-style')?.remove();
  disposeStyles();
}
