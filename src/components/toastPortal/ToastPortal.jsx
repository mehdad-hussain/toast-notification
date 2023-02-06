// prettier-ignore
import { forwardRef, useImperativeHandle, useState, } from "react";
import ReactDOM from "react-dom";

import { useToastPortal, useToastAutoClose } from "hooks";

import styles from "./ToastPortal.module.scss";
import { Toast } from "components";
import { uuid } from "util/uuid";

export const ToastPortal = forwardRef((props, ref) => {
  const [toasts, setToasts] = useState([]);
  const { loaded, portalId } = useToastPortal();

  // section: remove toast function
  const removeToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  // section: auto close toast custom hook
  useToastAutoClose({
    toasts,
    setToasts,
  });

  // section: useImperativeHandle to expose addMessage function to parent component
  useImperativeHandle(ref, () => ({
    success: (toast) => {
      // console.log("toast--", [...toast]);
      setToasts((prevToasts) => [
        ...prevToasts,
        {
          message: toast.message,
          timer: toast.timer ? toast.timer : 5,
          isAutoClose: toast.isAutoClose === false ? false : true,
          id: uuid(),
          mode: "success",
        },
      ]);
    },
    info: (toast) => {
      setToasts((prevToasts) => [
        ...prevToasts,
        {
          message: toast.message,
          timer: toast.timer ? toast.timer : 5,
          isAutoClose: toast.isAutoClose === false ? false : true,
          id: uuid(),
          mode: "info",
        },
      ]);
    },
    warn: (toast) => {
      console.log("toast--", toast);
      setToasts((prevToasts) => [
        ...prevToasts,
        {
          message: toast.message,
          timer: toast.timer ? toast.timer : 5,
          isAutoClose: toast.isAutoClose === false ? false : true,
          // as if isAutoClose equal to false it's a falsy value so we need to check if it's equal to true
          id: uuid(),
          mode: "warning",
        },
      ]);
    },
    error: (toast) => {
      setToasts((prevToasts) => [
        ...prevToasts,
        {
          message: toast.message,
          timer: toast.timer ? toast.timer : 5,
          isAutoClose: toast.isAutoClose === false ? false : true,
          id: uuid(),
          mode: "error",
        },
      ]);
    },
    clear: () => {
      setToasts([]);
    },
  }));

  return loaded ? (
    ReactDOM.createPortal(
      <div className={styles.toastContainer}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            mode={toast.mode}
            timer={toast.timer}
            isAutoClose={toast.isAutoClose}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>,
      document.getElementById(portalId)
    )
  ) : (
    <>null</>
  );
});

// export default ToastPortal;
