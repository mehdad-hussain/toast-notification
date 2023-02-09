import { useEffect, useState } from "react";

import { useUuid } from "hooks";

export const usePortal = (type, position) => {
  const [loaded, setLoaded] = useState(false);
  let portalName = type === "toast" ? "toast-portal-" : "modal-portal-";
  let portalId = portalName + useUuid(8);

  // console.log("usePortal rendered");

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
        : "bottom: 1rem; left: 50%; transform: translateX(-50%);";
  } else if (type === "modal") {
    position = position ? position : "center";
    positionClass =
      position === "center"
        ? ""
        : position === "top"
        ? "top: 1rem; left: 50%; transform: translateX(-50%);"
        : position === "bottom"
        ? "bottom: 1rem; left: 50%; transform: translateX(-50%);"
        : position === "left"
        ? "top: 50%; left: 1rem; transform: translateY(-50%);"
        : "top: 50%; right: 1rem; transform: translateY(-50%);";
  }

  useEffect(() => {
    const div = document.createElement("div");

    div.id = portalId;
    div.style = `position: fixed;  ${positionClass}`;
    document.getElementsByTagName("body")[0].prepend(div);
    setLoaded(true);

    return () => {
      document.getElementsByTagName("body")[0].removeChild(div);
    };
  }, [portalId, positionClass]);

  return { loaded, portalId };
};
