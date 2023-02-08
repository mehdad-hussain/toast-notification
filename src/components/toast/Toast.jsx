// prettier-ignore
// import {  XMarkIcon } from "@heroicons/react/24/solid";

// prettier-ignore
import { CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon, WarningSignIcon, XMarkIcon, } from "assets";
import { useDarkMode } from "hooks";
import { joinClasses } from "util";

import styles from "./Toast.module.scss";

export const Toast = (props) => {
  const { message, mode, isAutoClose, timer, isVisible, onClose, position } =
    props;

  const { isDarkMode } = useDarkMode();

  const classes = joinClasses(
    styles.toast,
    isDarkMode ? styles[`toast-${mode}-dark`] : styles[`toast-${mode}`],
    isVisible === true
      ? position === "top-right"
        ? styles["toast-visible-right"]
        : position === "top-left"
        ? styles["toast-visible-left"]
        : position === "bottom-right"
        ? styles["toast-visible-right"]
        : position === "bottom-left"
        ? styles["toast-visible-left"]
        : position === "top-center"
        ? styles["toast-visible-top"]
        : styles["toast-visible-bottom"]
      : position === "top-right"
      ? styles["toast-hidden-right"]
      : position === "top-left"
      ? styles["toast-hidden-left"]
      : position === "bottom-right"
      ? styles["toast-hidden-right"]
      : position === "bottom-left"
      ? styles["toast-hidden-left"]
      : position === "top-center"
      ? styles["toast-hidden-top"]
      : styles["toast-hidden-bottom"]
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

        <WarningSignIcon
          className={joinClasses(
            "w-7 h-7 fill-amber-500/90",
            mode !== "warning" && "hidden"
          )}
        />

        <ExclamationCircleIcon
          className={joinClasses(
            "w-7 h-7 fill-orange-500/90",
            mode !== "error" && "hidden"
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
