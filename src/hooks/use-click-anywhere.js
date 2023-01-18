import { useEventListener } from "hooks";

// type Handler = (event: MouseEvent) => void

export function useClickAnyWhere(handler) {
  useEventListener("click", (event) => {
    handler(event);
  });
}
