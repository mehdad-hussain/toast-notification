import { useRef } from "react";

export function useIsFirstRender() {
  const isFirst = useRef(true);

  if (isFirst.current) {
    isFirst.current = false;

    return true;
  }

  return isFirst.current;
}

// idea: Simple React hook that return a boolean; True at the mount time Then always false.
