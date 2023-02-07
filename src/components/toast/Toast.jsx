// prettier-ignore
// import {  XMarkIcon } from "@heroicons/react/24/solid";

// prettier-ignore
import { CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon, XMarkIcon, } from "assets";
import { useDarkMode } from "hooks";
import { joinClasses } from "util";

import styles from "./Toast.module.scss";

export const Toast = (props) => {
  const { message, mode, isAutoClose, timer, isVisible, onClose } = props;

  const { isDarkMode } = useDarkMode();

  const classes = joinClasses(
    styles.toast,
    isDarkMode ? styles[`toast-${mode}-dark`] : styles[`toast-${mode}`],
    isVisible === true && styles["toast-visible"],
    isVisible === false && styles["toast-hidden"]
  );

  const progressClasses = joinClasses(
    styles.toast__progress,
    styles[`toast__progress-${mode}`],
    `before:animate-[progress_${timer}s_linear_forwards]`
  );

  return (
    <>
      <div className={classes} id="toast">
        <CheckCircleIcon
          className={joinClasses(
            "w-8 h-8 fill-green-500/70 stroke-1",
            mode !== "success" && "hidden"
          )}
        />
        <InformationCircleIcon
          className={joinClasses(
            "w-7 h-7 fill-blue-500",
            mode !== "info" && "hidden"
          )}
        />
        <ExclamationCircleIcon
          className={joinClasses(
            "w-7 h-7 ",
            mode === "success" ? "hidden" : mode === "info" ? "hidden" : "",
            mode === "error" ? "fill-orange-600/90" : "fill-amber-500/90"
          )}
        />
        <div
          className={
            isDarkMode ? styles.toast__content_dark : styles.toast__content
          }
        >
          <p className="ml-2 line-clamp-4">{message}</p>
        </div>
        <button onClick={onClose} className="justify-self-end">
          <XMarkIcon className="w-5 h-5 stroke-2 fill-gray-600" />
        </button>

        {isAutoClose === true ? (
          <div className={joinClasses(progressClasses)}></div>
        ) : null}
      </div>
    </>
  );
};
