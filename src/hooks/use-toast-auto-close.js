import { useEffect, useState } from "react";

export const useToastAutoClose = ({
  // isAutoClose,
  // timer,
  toasts,
  setToasts,
}) => {
  const [removing, setRemoving] = useState("");

  useEffect(() => {
    // if (isAutoClose && toasts.length > 0) {
    //   const timerId = setTimeout(() => {
    //     removeToast(toasts[0].id);
    //   }, timer * 1000);
    //   console.log("timerId", timerId);
    //   return () => clearTimeout(timerId);
    // }
    // idea: if we write code this way we will face problem when we have multiple toasts, so we need to write code in a way that we can set timeout for each toast, so we need to create a function that will set timeout for each toast and then we can call that function in useEffect. So we will use useState to store the timerId and then we can use that timerId to clear the timeout.
    // todo: this problem is happening for js closure, learn about it in detail

    let autoCloseToasts = toasts.filter((toast) => toast.isAutoClose);

    if (autoCloseToasts.length > 0) {
      const toast = autoCloseToasts[autoCloseToasts.length - 1];
      // const id = toasts[0].id;
      // idea: we can use toasts[0].id but then we will face problem when we have multiple toasts, so we need to use toasts[toasts.length - 1].id, so that we can set timeout for the last toast. as toasts[0].id will set timeout for the first toast only and only after removing the first toast we can set timeout for the second toast and so on.

      setTimeout(() => {
        setRemoving(toast.id);
      }, toast.timer * 1000);
    }
  }, [toasts]);

  useEffect(() => {
    if (removing) {
      setToasts((prevToasts) => {
        return prevToasts.map((toast) => {
          if (toast.id === removing) {
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
        setToasts((prevToasts) =>
          prevToasts.filter((toast) => toast.id !== removing)
        );
        setRemoving("");
      }, 500);
    }
  }, [removing, setToasts]);
};
