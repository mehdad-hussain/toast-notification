import { useEffect, useState } from "react";

import { useUuid } from "hooks";

export const useToastPortal = (type, position) => {
  const [loaded, setLoaded] = useState(false);
  let portalId = "portal-" + useUuid(8);
  //   const [portalId] = useState(`toast-portal-${id}`);

  // console.log("useToastPortal rendered");

  position = type === "toast" ? position : "top-right";

  let positionClass = "";

  if (type === "toast") {
    position = position ? position : "top-right";
    positionClass =
      position === "top-right"
        ? "top: 1rem; right: 1rem;"
        : position === "top-left"
        ? "top: 1rem; left: 1rem;"
        : position === "bottom-right"
        ? "bottom: 1rem; right: 1rem;"
        : position === "bottom-left"
        ? "bottom: 1rem; left: 1rem;"
        : position === "top-center"
        ? "top: 1rem; left: 50%; transform: translateX(-50%);"
        : position === "bottom-center"
        ? "bottom: 1rem; left: 50%; transform: translateX(-50%);"
        : position === "center";
  } else if (type === "modal") {
    position = "center";
  }

  useEffect(() => {
    const div = document.createElement("div");

    div.id = portalId;
    div.style = `position: fixed;${positionClass}`;
    // top: 3rem; right: 10px;
    document.getElementsByTagName("body")[0].prepend(div);
    setLoaded(true);

    return () => {
      document.getElementsByTagName("body")[0].removeChild(div);
    };
  }, [portalId, positionClass]);

  return { loaded, portalId };
};
