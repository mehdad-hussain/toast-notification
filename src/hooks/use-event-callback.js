import { useCallback, useRef } from "react";

import { useIsomorphicLayoutEffect } from "hooks";

export function useEventCallback(fn) {
  const ref = useRef(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });

  useIsomorphicLayoutEffect(() => {
    ref.current = fn;
  }, [fn]);

  return useCallback((...args) => ref.current(...args), [ref]);
}
