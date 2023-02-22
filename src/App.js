// prettier-ignore
import { ToastContainer } from "components";
import { useDocumentTitle } from "hooks";
import { RouterProvider } from "react-router-dom";
import { router } from "routing";

function App() {
  useDocumentTitle("Notification");

  return (
    <>
      <ToastContainer>
        <RouterProvider router={router} />
      </ToastContainer>
    </>
  );
}

export default App;
