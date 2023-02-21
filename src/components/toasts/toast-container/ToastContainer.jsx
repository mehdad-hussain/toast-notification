import { ToastPortal } from "components";
import React, { useRef } from "react";

export const ToastContext = React.createContext();

export const ToastContainer = (props) => {
  const toast = useRef(null);
  const topRight = useRef(null);
  const topLeft = useRef(null);
  const bottomRight = useRef(null);
  const bottomLeft = useRef(null);
  const topCenter = useRef(null);
  const bottomCenter = useRef(null);

  const positionedToast = {
    topRight: topRight,
    topLeft: topLeft,
    bottomRight: bottomRight,
    bottomLeft: bottomLeft,
    topCenter: topCenter,
    bottomCenter: bottomCenter,
  };

  return (
    <>
      <ToastContext.Provider value={{ positionedToast, toast }}>
        {props.children}
      </ToastContext.Provider>
      <ToastPortal ref={toast} position="top-right" />

      <ToastPortal ref={topRight} position="top-right" />
      <ToastPortal ref={topLeft} position="top-left" />
      <ToastPortal ref={bottomRight} position="bottom-right" />
      <ToastPortal ref={bottomLeft} position="bottom-left" />
      <ToastPortal ref={topCenter} position="top-center" />
      <ToastPortal ref={bottomCenter} position="bottom-center" />
    </>
  );
};

export const toastAnimation = {
  slide: "slide",
  zoom: "zoom",
  flip: "flip",
  bounce: "bounce",
};
