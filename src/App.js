import { useState } from "react";
// prettier-ignore
import { EyeIcon, HeartIcon, RefreshIcon, PlusIcon, } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";

import styles from "./App.module.scss";
import { ToastPortal, Tooltip } from "components";

function App() {
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");

  const showToast = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 3000);
  };

  const hideToast = () => {
    setToast(false);
  };

  return (
    <>
      {/* create a toast card */}
      {toast && (
        <div className={`${styles.toast} ${styles[toastType]}`}>
          <div className={styles.toast__message}>{toastMessage}</div>
          <div className={styles.toast__close} onClick={hideToast}>
            X
          </div>
        </div>
      )}

      {/* create a button to show a toast */}

      <div className={styles.btn__container}>
        <button
          className={styles.btn + " " + styles.btn__success}
          onClick={() => showToast("This is a success toast", "success")}
        >
          Show Success Toast
        </button>
        <button
          className={styles.btn + " " + styles.btn__error}
          onClick={() => showToast("This is a error toast", "error")}
        >
          Show Error Toast
        </button>
        <button
          className={styles.btn + " " + styles.btn__warning}
          onClick={() => showToast("This is a warning toast", "warning")}
        >
          Show Warning Toast
        </button>
        <button
          className={styles.btn + " " + styles.btn__info}
          onClick={() => showToast("This is a info toast", "info")}
        >
          Show Info Toast
        </button>
      </div>

      <ToastPortal />
    </>
  );
}

export default App;
