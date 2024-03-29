import { useCallback, useEffect, useRef } from "react";

export function useIsMounted() {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  return useCallback(() => isMounted.current, []);
}

/** idea: In React, once a component is unmounted, it is deleted from memory and will never be mounted again. That's why we don't define a state in a disassembled component. Changing the state in an unmounted component will result this error:

Warning: Can't perform a React state update on an unmounted component.
This is a no-op, but it indicates a memory leak in your application.
To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
The right way to solve this is cleaning effect like the above message said. For example, see useInterval or useEventListener.

But, there are some cases like Promise or API calls where it's impossible to know if the component is still mounted at the resolve time.

This React hook help you to avoid this error with a function that return a boolean, isMounted.
 */
