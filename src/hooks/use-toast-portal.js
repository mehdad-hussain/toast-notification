import { useEffect, useState } from "react";

import { useUuid } from "hooks";

export const useToastPortal = () => {
  const [loaded, setLoaded] = useState(false);
  let portalId = "toast-portal-" + useUuid(8);
  //   const [portalId] = useState(`toast-portal-${id}`);

  console.log("useToastPortal rendered");

  useEffect(() => {
    const div = document.createElement("div");

    div.id = portalId;
    div.style = "position: fixed; top: 3rem; right: 10px;";
    document.getElementsByTagName("body")[0].prepend(div);
    setLoaded(true);

    return () => {
      document.getElementsByTagName("body")[0].removeChild(div);
    };
  }, [portalId]);

  return { loaded, portalId };
};
