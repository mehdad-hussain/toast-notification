import { useCallback, useState } from "react";

export function useBoolean(defaultValue) {
  const [value, setValue] = useState(!!defaultValue);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);
  const toggle = useCallback(() => setValue((x) => !x), []);

  return { value, setValue, setTrue, setFalse, toggle };
}

// let bool = 0;

// const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);
// const customToggle = () => {
//   if (bool) {
//     setValue(true);
//     bool = 0;
//   } else {
//     setValue(false);
//     bool = 1;
//   }
// };

// {/* section: useBoolean hooks */}

// <p>
//   Value is <code>{value.toString()}</code>
// </p>
// <button onClick={setTrue}>set true</button>
// <button onClick={setFalse}>set false</button>
// <button onClick={toggle}>toggle</button>
// <button onClick={customToggle}>custom toggle</button>
