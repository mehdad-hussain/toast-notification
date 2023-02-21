import { useEffect, useRef, useState } from "react";
import { usePageLeave } from "./use-page-leave";

export const useToastAutoClose = ({
  // isAutoClose,
  // timer,
  toasts,
  setToasts,
}) => {
  const [removing, setRemoving] = useState("");
  const [isOnPage, setIsOnPage] = useState(true);

  // let timerId = useRef(null);

  // let remainingTime = useRef(0);
  let startTime = useRef(0);

  const handleFocus = () => setIsOnPage(true);
  const handleBlur = () => {
    setIsOnPage(false);
  };

  useEffect(() => {
    window.addEventListener("focus", handleFocus);
    window.addEventListener("blur", handleBlur);
    return () => {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("blur", handleBlur);
    };
  });

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

    // console.log("autoCloseToasts", autoCloseToasts);
    if (autoCloseToasts.length > 0) {
      // const toast = autoCloseToasts[autoCloseToasts.length - 1];
      // const id = toasts[0].id;
      // idea: we can use toasts[0].id but then we will face problem when we have multiple toasts, so we need to use toasts[toasts.length - 1].id, so that we can set timeout for the last toast. as toasts[0].id will set timeout for the first toast only and only after removing the first toast we can set timeout for the second toast and so on.
      console.log("autoCloseToasts", autoCloseToasts);

      // todo: we need to set timeout for each toast, so we need to create a function that will set timeout for each toast and then we can call that function in useEffect. So we will use useState to store the timerId and then we can use that timerId to clear the timeout.

      // fix: dependency array problem
      console.log("isOnPage", isOnPage);
      // startTime.current = Date.now();
      if (isOnPage === true) {
        autoCloseToasts.forEach((toast) => {
          console.log("remaining", toast.remainingTime);
          // startTime.current = Date.now();
          // console.log("start timer", startTime.current);

          toast.startTime = Date.now();
          document.getElementsByName("progress").forEach((progress) => {
            progress.classList.remove("paused");
          });

          console.log("start timer", toast.startTime);
          console.log("remaining", toast.remainingTime);

          toast.timerId = setTimeout(() => {
            console.log(
              "timer before set removing",
              toast.timerId,
              toast.remainingTime
            );
            setRemoving(toast.id);
            // toast.remainingTime = 0;
          }, toast.remainingTime);

          // console.log(toast.timerId);
        });
      } else {
        autoCloseToasts.forEach((toast) => {
          // console.log(toast.timerId);

          let pauseTime = Date.now();
          console.log("start timer & -", toast.startTime, pauseTime);

          console.log("expired", pauseTime - toast.startTime);

          console.log("remaining before calc", toast.remainingTime);

          toast.remainingTime =
            toast.remainingTime - (pauseTime - toast.startTime);

          console.log(" remaining", toast.remainingTime);
          clearTimeout(toast.timerId);
          toast.timerId = null;
          document.getElementsByName("progress").forEach((progress) => {
            progress.classList.add("paused");
          });
        });
        console.log(autoCloseToasts, "after cleared");
      }
    }
  }, [isOnPage]);

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
