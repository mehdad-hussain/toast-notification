import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { useToastPortal } from "hooks";

import styles from "./ToastPortal.module.scss";

export const ToastPortal = () => {
  const { loaded, portalId } = useToastPortal();

  console.log("Toast Portal rendered");

  return loaded ? (
    ReactDOM.createPortal(
      <div className={styles.toastContainer}>
        {/* <Toast /> */}
        toast portal
      </div>,
      document.getElementById(portalId)
    )
  ) : (
    <>null</>
  );
};

// export default ToastPortal;
