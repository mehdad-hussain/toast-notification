import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { useToastPortal } from "hooks";

import styles from "./ToastPortal.module.scss";
import { Toast } from "components";

export const ToastPortal = () => {
  const [toasts, setToasts] = useState([
    {
      id: 1,
      message: "Toast 1 successful message",
      mode: "warning",
    },
  ]);
  const { loaded, portalId } = useToastPortal();

  console.log("Toast Portal rendered");

  return loaded ? (
    ReactDOM.createPortal(
      <div className={styles.toastContainer}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            mode={toast.mode}
            timer={3}
          />
        ))}
      </div>,
      document.getElementById(portalId)
    )
  ) : (
    <>null</>
  );
};

// export default ToastPortal;
