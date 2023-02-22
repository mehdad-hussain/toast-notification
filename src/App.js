// prettier-ignore
import { ToastContainer } from "components";
import { useDarkMode, useDocumentTitle } from "hooks";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "routing";

function App() {
  useDocumentTitle("Notification");
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.style.backgroundColor = "#222b3c";
    } else {
      document.body.classList.remove("dark");
      document.body.style.backgroundColor = "#fff";
    }
    console.log("rendered");

    return () => {
      document.body.classList.remove("dark");
    };
  }, [isDarkMode]);

  return (
    <>
      <ToastContainer>
        <RouterProvider router={router} />
      </ToastContainer>
    </>
  );
}

export default App;
