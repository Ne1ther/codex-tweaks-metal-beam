/**
 * Auxiliary RAF driver for *target-side* work (currently: dark-mode reflections).
 *
 * Reflections run at 15 fps — the CSS blur(4px) on the fill canvas hides
 * temporal stepping completely. The scheduler coalesces rapid calls and
 * skips frames that arrive faster than the target interval.
 */
import { REFLECTION_INTERVAL_MS } from '../perfConfig';
import { paintReflections } from './paint';

let scheduled = false;
let pendingRaf = 0;
let lastReflectionMs = 0;

export function scheduleReflectionPaint(): void {
  if (scheduled) return;
  scheduled = true;
  if (typeof requestAnimationFrame === 'undefined') return;
  pendingRaf = requestAnimationFrame((now) => {
    pendingRaf = 0;
    scheduled = false;
    if (now - lastReflectionMs < REFLECTION_INTERVAL_MS) return;
    lastReflectionMs = now;
    paintReflections();
  });
}

export function disposeReflectionScheduler(): void { if (pendingRaf) cancelAnimationFrame(pendingRaf); pendingRaf = 0; scheduled = false; lastReflectionMs = 0; }
