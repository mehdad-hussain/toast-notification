// prettier-ignore
import { forwardRef, useImperativeHandle, useState, } from "react";
import ReactDOM from "react-dom";

import { useToastPortal, useToastAutoClose } from "hooks";

import styles from "./ToastPortal.module.scss";
import { Toast } from "components";
import { uuid } from "util/uuid";
import { joinClasses } from "util";

export const ToastPortal = forwardRef((props, ref) => {
  const [toasts, setToasts] = useState([]);
  const { loaded, portalId } = useToastPortal();

  // section: remove toast function
  const removeToast = (id) => {
    setToasts((prevToasts) => {
      return prevToasts.map((toast) => {
        if (toast.id === id) {
          return {
            ...toast,
            isVisible: false,
          };
        } else {
          return toast;
        }
      });
    });
    setTimeout(() => {
      setToasts((prevToasts) => {
        return prevToasts.filter((toast) => toast.id !== id);
      });
    }, 500);
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
          isVisible: true,
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
          isVisible: true,
        },
      ]);
    },
    warn: (toast) => {
      setToasts((prevToasts) => [
        ...prevToasts,
        {
          message: toast.message,
          timer: toast.timer ? toast.timer : 5,
          isAutoClose: toast.isAutoClose === false ? false : true,
          // idea: as if isAutoClose equal to false it's a falsy value so we need to check if it's equal to true
          id: uuid(),
          mode: "warning",
          isVisible: true,
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
          isVisible: true,
        },
      ]);
    },
    clear: () => {
      setToasts([]);
    },
  }));

  const classes = joinClasses(styles.toastContainer, props.className);

  return loaded ? (
    ReactDOM.createPortal(
      <div className={classes}>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            mode={toast.mode}
            timer={toast.timer}
            isAutoClose={toast.isAutoClose}
            onClose={() => removeToast(toast.id)}
            isVisible={toast.isVisible}
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
