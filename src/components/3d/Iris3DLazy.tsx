"use client";

/**
 * Iris3DLazy.tsx — loads the heavy 3D background only where it runs smoothly.
 *
 * The WebGL scene (three.js) is large, so it is:
 *  - skipped on phones / touch devices, low-memory devices, data-saver mode
 *    and when the visitor has "reduce motion" switched on
 *  - downloaded only after the page has finished loading and is idle
 * Everyone else gets the same clean static background, instantly.
 */

import { useEffect, useState, type ComponentType } from "react";

export default function Iris3DLazy() {
  const [Scene, setScene] = useState<ComponentType | null>(null);

  useEffect(() => {
    const nav = navigator as Navigator & {
      deviceMemory?: number;
      connection?: { saveData?: boolean };
    };

    const shouldSkip =
      window.innerWidth < 1024 ||
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      (typeof nav.deviceMemory === "number" && nav.deviceMemory < 4) ||
      nav.connection?.saveData === true;

    if (shouldSkip) return;

    let cancelled = false;
    const load = () => {
      import("./Iris3DWorld")
        .then((mod) => {
          if (!cancelled) setScene(() => mod.default);
        })
        .catch(() => {
          /* background is decorative — ignore load failures */
        });
    };

    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    let idleId: number | undefined;
    let timerId: ReturnType<typeof setTimeout> | undefined;
    if (w.requestIdleCallback) {
      idleId = w.requestIdleCallback(load, { timeout: 4000 });
    } else {
      timerId = setTimeout(load, 2500);
    }

    return () => {
      cancelled = true;
      if (idleId !== undefined && w.cancelIdleCallback) w.cancelIdleCallback(idleId);
      if (timerId !== undefined) clearTimeout(timerId);
    };
  }, []);

  if (!Scene) return null;
  return <Scene />;
}
