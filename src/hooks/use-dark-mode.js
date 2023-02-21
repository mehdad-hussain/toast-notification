import { useLocalStorage, useMediaQuery, useUpdateEffect } from "hooks";
import { useEffect } from "react";

const COLOR_SCHEME_QUERY = "(prefers-color-scheme: dark)";

// interface UseDarkModeOutput {
//   isDarkMode: boolean
//   toggle: () => void
//   enable: () => void
//   disable: () => void
// }

export function useDarkMode(defaultValue) {
  const isDarkOS = useMediaQuery(COLOR_SCHEME_QUERY);
  const [isDarkMode, setDarkMode] = useLocalStorage(
    "dark-mode",
    defaultValue ?? isDarkOS ?? false
  );

  // Update darkMode if os prefers changes
  useUpdateEffect(() => {
    setDarkMode(isDarkOS);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkOS]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.style.backgroundColor = "#222b3c";
    } else {
      document.body.classList.remove("dark");
      document.body.style.backgroundColor = "#fff";
    }

    return () => {
      document.body.classList.remove("dark");
    };
  }, [isDarkMode]);

  return {
    isDarkMode,
    toggle: () => setDarkMode((prev) => !prev),
    enable: () => setDarkMode(true),
    disable: () => setDarkMode(false),
    reset: () => setDarkMode(isDarkOS),
  };
}

// export default useDarkMode
