/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useCallback, useEffect, useState } from "react";

/**
 * SSR-safe localStorage-backed state.
 *
 * Always renders `defaultValue` on the server AND on the first client render
 * (so hydration never mismatches), then syncs from localStorage in an effect
 * right after mount. `hydrated` lets the consumer avoid a visible flash of
 * the wrong value if that matters for the UI (it does here: the active
 * filter pill and the chart data both depend on it).
 */
export function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(defaultValue);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(key);
      if (stored !== null) setValue(stored);
    } catch {
      // Private browsing / storage disabled — silently keep the default.
    }
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const update = useCallback(
    (next) => {
      setValue(next);
      try {
        window.localStorage.setItem(key, next);
      } catch {
        // Quota exceeded / private mode — state still updates in-memory.
      }
    },
    [key]
  );

  return [value, update, hydrated];
}
