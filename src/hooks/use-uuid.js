import { useState } from "react";

export const useUuid = (length) => {
  const [id] = useState(
    // create a random id
    Math.random().toString(36).substring(2, 4) +
      Date.now().toString(36).substring(2, length)
  );

  return id;
};
