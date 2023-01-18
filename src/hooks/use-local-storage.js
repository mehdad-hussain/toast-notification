// section: simple local storage hooks
// import { useEffect, useState } from "react";

// function storeDataFromLocalStorage(key, initialValue) {
//   const storedValue = JSON.parse(localStorage.getItem(key));

//   if (storedValue) return storedValue;

//   //  <!-- when initial value is a function -->
//   if (initialValue instanceof Function) {
//     return initialValue();
//   }

//   return initialValue;
// }

// export const useLocalStorage = (key, initialValue) => {
//   //  <!-- useState can also take function -->
//   const [value, setValue] = useState(() => {
//     return storeDataFromLocalStorage(key, initialValue);
//   });
//   //  <!-- we are using function version in useState as we don't want to call JSON.parse &&  -->
//   //  <!-- localStorage ,coz it is pretty slow, so we are using function here is useState -->

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));

//     return () => {};
//   }, [key, value]);

//   return [value, setValue];
// };
// section: upgraded local storage hooks

import { useCallback, useEffect, useState } from "react";

import { useEventCallback, useEventListener } from "hooks";

// declare global {
//   interface WindowEventMap {
//     'local-storage': CustomEvent
//   }
// }

// type SetValue<T> = Dispatch<SetStateAction<T>>

export function useLocalStorage(key, initialValue) {
  // Get from local storage then
  // parse stored json or return initialValue
  const readValue = useCallback(() => {
    // Prevent build error "window is undefined" but keeps working
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? parseJSON(item) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  }, [initialValue, key]);

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(readValue);

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = useEventCallback((value) => {
    // Prevent build error "window is undefined" but keeps working
    if (typeof window === "undefined") {
      console.warn(
        `Tried setting localStorage key “${key}” even though environment is not a client`
      );
    }

    try {
      // Allow value to be a function so we have the same API as useState
      const newValue = value instanceof Function ? value(storedValue) : value;

      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(newValue));

      // Save state
      setStoredValue(newValue);

      // We dispatch a custom event so every useLocalStorage hook are notified
      window.dispatchEvent(new Event("local-storage"));
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error);
    }
  });

  useEffect(() => {
    setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStorageChange = useCallback(
    (event) => {
      if (event.key && event.key !== key) {
        return;
      }
      setStoredValue(readValue());
    },
    [key, readValue]
  );

  // this only works for other documents, not the current one
  useEventListener("storage", handleStorageChange);

  // this is a custom event, triggered in writeValueToLocalStorage
  // See: useLocalStorage()
  useEventListener("local-storage", handleStorageChange);

  return [storedValue, setValue];
}

// A wrapper for "JSON.parse()"" to support "undefined" value
function parseJSON(value) {
  try {
    return value === "undefined" ? undefined : JSON.parse(value ?? "");
  } catch {
    console.log("parsing error on", { value });
    return undefined;
  }
}
