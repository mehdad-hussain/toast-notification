// prettier-ignore
import { forwardRef, useImperativeHandle, useState, } from "react";
import ReactDOM from "react-dom";

import { usePortal, useToastAutoClose } from "hooks";

import styles from "./ToastPortal.module.scss";
import { Toast } from "components";
import { joinClasses, uuid } from "util";

export const ToastPortal = forwardRef((props, ref) => {
  const [toasts, setToasts] = useState([]);

  // console.log("toast portal jsx rendered");

  let { position } = props;

  let flexDirectionClass = position.includes("top")
    ? "flex-col"
    : "flex-col-reverse";

  let alignItemsClass = position.includes("left")
    ? "items-start"
    : position.includes("right")
    ? "items-end"
    : "items-center";

  const { loaded, portalId } = usePortal("toast", position);

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
    success: (message, toastObj) => {
      setToasts((prevToasts) => [
        ...prevToasts,
        {
          id: uuid(),
          message: message,
          timer: toastObj?.timer ? toastObj?.timer : 5,
          isAutoClose: toastObj?.isAutoClose === false ? false : true,
          mode: "success",
          isVisible: true,
        },
      ]);
    },
    info: (message, toastObj) => {
      setToasts((prevToasts) => [
        ...prevToasts,
        {
          id: uuid(),
          message: message,
          timer: toastObj?.timer ? toastObj?.timer : 5,
          isAutoClose: toastObj?.isAutoClose === false ? false : true,
          // idea: as if isAutoClose equal to false it's a falsy value so we need to check if it's equal to true or not
          mode: "info",
          isVisible: true,
        },
      ]);
    },
    warn: (message, toastObj) => {
      setToasts((prevToasts) => [
        ...prevToasts,
        {
          id: uuid(),
          message: message,
          timer: toastObj?.timer ? toastObj?.timer : 5,
          isAutoClose: toastObj?.isAutoClose === false ? false : true,
          mode: "warning",
          isVisible: true,
        },
      ]);
    },
    error: (message, toastObj) => {
      setToasts((prevToasts) => [
        ...prevToasts,
        {
          id: uuid(),
          message: message,
          timer: toastObj?.timer ? toastObj?.timer : 5,
          isAutoClose: toastObj?.isAutoClose === false ? false : true,
          mode: "error",
          isVisible: true,
        },
      ]);
    },
    clear: () => {
      setToasts([]);
    },
  }));

  const classes = joinClasses(
    styles.toastContainer,
    flexDirectionClass,
    alignItemsClass
  );

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
            position={position}
          />
        ))}
      </div>,
      document.getElementById(portalId)
    )
  ) : (
    <>null</>
  );
});
