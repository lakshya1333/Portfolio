// Shared pointer state for the hero. Coordinates are relative to the hero box.
// When nobody has moved the pointer for a while (or on touch screens), the
// "balancer" drifts on its own along a slow Lissajous path so the hero stays alive.

export type PointerState = { x: number; y: number; last: number };

export function createPointer(): PointerState {
  return { x: -9999, y: -9999, last: 0 };
}

const IDLE_MS = 2600;

export function resolvePointer(
  p: PointerState,
  w: number,
  h: number,
  now: number
): { x: number; y: number; auto: boolean } {
  if (now - p.last < IDLE_MS && p.x > -9000) return { x: p.x, y: p.y, auto: false };
  const t = now / 1000;
  return {
    x: w * (0.5 + 0.38 * Math.sin(t * 0.31)),
    y: h * (0.48 + 0.3 * Math.sin(t * 0.47 + 1.3)),
    auto: true,
  };
}
