import React, { useEffect } from "react";
// prettier-ignore

import { BtnSolid, ToastContainer } from "components";
import { useDarkMode, useDocumentTitle } from "hooks";
import { Home } from "pages";

export const ToastContext = React.createContext();

function App() {
  const { isDarkMode, toggle, enable, disable, reset } = useDarkMode();

  useDocumentTitle("Notification");

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

  return (
    <>
      <div className="w-1/2 h-40 mt-0 ml-auto">
        <p className="mb-4 dark:text-white">
          Current theme: {isDarkMode ? "dark" : "light"}
        </p>

        <BtnSolid
          onClick={toggle}
          bgColor="bg-emerald-500"
          text="text-xs text-white font-bold"
          padding="px-6 py-3"
          borderRadius="rounded"
        >
          Toggle
        </BtnSolid>

        <BtnSolid
          onClick={enable}
          bgColor="bg-slate-500"
          text="text-xs text-white font-bold"
          padding="px-6 py-3"
          borderRadius="rounded"
        >
          Enable Dark Mode
        </BtnSolid>

        <BtnSolid
          onClick={disable}
          bgColor="bg-cyan-500"
          text="text-xs text-white font-bold"
          padding="px-6 py-3"
          borderRadius="rounded"
        >
          Disable Dark Mode
        </BtnSolid>
        <BtnSolid
          onClick={reset}
          bgColor="bg-sky-500"
          text="text-xs text-white font-bold"
          padding="px-6 py-3"
          borderRadius="rounded"
        >
          Reset as Os Preference
        </BtnSolid>
      </div>
      <ToastContainer>
        <Home />
      </ToastContainer>
    </>
  );
}

export default App;
