import React from "react";
// prettier-ignore
import { Nav, ToastContainer } from "components";
import { useDocumentTitle } from "hooks";
import { Home } from "pages";

export const ToastContext = React.createContext();

function App() {
  useDocumentTitle("Notification");

  return (
    <>
      <Nav />

      <ToastContainer>
        <Home />
      </ToastContainer>
    </>
  );
}

export default App;
