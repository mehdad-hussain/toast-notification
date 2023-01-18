import { useEffect, useLayoutEffect, useRef } from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// // Window Event based useEventListener interface
// function useEventListener(
//   eventName,
//   handler: (event) => ,
//   element,
//   options?: boolean | AddEventListenerOptions,
// ): void

// // Element Event based useEventListener interface
// function useEventListener<
//   K extends keyof HTMLElementEventMap,
//   T extends HTMLElement = HTMLDivElement,
// >(
//   eventName: K,
//   handler: (event: HTMLElementEventMap[K]) => void,
//   element: RefObject<T>,
//   options?: boolean | AddEventListenerOptions,
// ): void

// // Document Event based useEventListener interface
// function useEventListener<K extends keyof DocumentEventMap>(
//   eventName: K,
//   handler: (event: DocumentEventMap[K]) => void,
//   element: RefObject<Document>,
//   options?: boolean | AddEventListenerOptions,
// ): void

export const useEventListener = (eventName, handler, element, options) => {
  // Create a ref that stores handler
  const savedHandler = useRef(handler);

  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Define the listening target
    const targetElement = element?.current || window;
    if (!(targetElement && targetElement.addEventListener)) {
      return;
    }

    // Create event listener that calls handler function stored in ref
    const eventListener = (event) => savedHandler.current(event);
    console.log("eventListener", eventListener);

    targetElement.addEventListener(eventName, eventListener, options);

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element, options]);
};
