// prettier-ignore
import { CheckCircleIcon, ExclamationCircleIcon, InformationCircleIcon, WarningSignIcon, XMarkIcon, } from "assets";

// import: local files
import { useDarkMode } from "hooks";
import { joinClasses } from "util";

import styles from "./Toast.module.scss";

export const Toast = (props) => {
  // prettier-ignore
  const { message, mode, isAutoClose, timer, isVisible, onClose, position, animation } = props;

  const { isDarkMode } = useDarkMode();

  console.log(`show-${animation}-${position}`);

  const classes = joinClasses(
    styles.toast,
    isDarkMode ? styles[`toast-${mode}-dark`] : styles[`toast-${mode}`],
    isVisible === true
      ? styles[`show-${animation}-${position}`]
      : styles[`hide-${animation}-${position}`]
  );

  const progressClasses = joinClasses(
    styles.progress,
    styles[`sec-${timer}`],
    styles[`progress-${mode}`]
  );

  return (
    <>
      <div className={classes}>
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
          <XMarkIcon className="w-5 h-5 stroke-2 fill-gray-500 hover:fill-zinc-900 dark:fill-gray-300 dark:hover:fill-gray-100" />
        </button>

        {isAutoClose === true ? (
          <div className={joinClasses(progressClasses)}></div>
        ) : null}
      </div>
    </>
  );
};
