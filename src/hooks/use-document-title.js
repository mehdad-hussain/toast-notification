import { useIsomorphicLayoutEffect } from "./use-isomorphic-layoutEffect";

export function useDocumentTitle(title) {
  useIsomorphicLayoutEffect(() => {
    window.document.title = title;
  }, [title]);
}
