import { useEffect, useState } from "react";
import { off, on } from "util";

export const usePageLeave = (onPageLeave, args = []) => {
  const [isOnPage, setIsOnPage] = useState(true);
  useEffect(() => {
    if (!onPageLeave) {
      setIsOnPage(true);
      return;
    }

    console.log(isOnPage);

    const handler = (event) => {
      event = event ? event : window.event;
      const from = event.relatedTarget || event.toElement;
      if (!from || from.nodeName === "HTML") {
        onPageLeave();
        setIsOnPage(false);
      } else {
        setIsOnPage(true);
      }
    };

    on(document, "mouseout", handler);
    return () => {
      off(document, "mouseout", handler);
    };
  }, [onPageLeave]);

  return isOnPage;
};
