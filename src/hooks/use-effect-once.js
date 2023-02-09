import { EffectCallback, useEffect } from "react";

export function useEffectOnce(effect) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, []);
}

// idea: Just modified version of useEffect that's executed only one time, at the mounting time.
