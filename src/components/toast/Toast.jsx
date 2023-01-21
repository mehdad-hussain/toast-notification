// prettier-ignore
import { CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";
import { joinClasses } from "util";

import styles from "./Toast.module.scss";

export const Toast = ({ mode, onClose, message }) => {
  const classes = joinClasses(styles.toast, styles[`toast--${mode}`]);

  const handleOnClose = () => {
    onClose();
  };

  return (
    <>
      <div className={classes}>
        <CheckCircleIcon
          className={joinClasses(
            "w-10 h-10 text-green-400",
            mode !== "success" && "hidden"
          )}
        />
        <InformationCircleIcon
          className={joinClasses(
            "w-10 h-10 text-blue-400",
            mode !== "info" && "hidden"
          )}
        />
        <ExclamationCircleIcon
          className={joinClasses(
            "w-10 h-10 stroke-red-500 stoke-[8]",
            mode === "success" ? "hidden" : mode === "info" ? "hidden" : "",
            mode === "error" ? "text-orange-600/90" : "text-yellow-500"
          )}
        />
        <div className={styles.toast__content}>
          <p className="ml-2">{message}</p>
        </div>
        <button className="justify-self-end">
          <XMarkIcon className="w-6 h-6 text-gray-600 stroke-2" />
        </button>
      </div>
    </>
  );
};
