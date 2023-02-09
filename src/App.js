import React, { useEffect, useRef } from "react";
// prettier-ignore

import { BtnOutline, BtnSolid, ToastContainer,  } from "components";
import styles from "./App.module.scss";
import { Home } from "pages";
import { useDarkMode } from "hooks";
import { ModalContainer, modalAnimation } from "components";

export const ToastContext = React.createContext();

function App() {
  const { isDarkMode, toggle, enable, disable, reset } = useDarkMode();

  const modalRef = useRef(null);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.style.backgroundColor = "#222b3c";
    } else {
      document.body.classList.remove("dark");
      document.body.style.backgroundColor = "#fff";
    }

    return () => {
      document.body.classList.remove("dark");
    };
  }, [isDarkMode]);

  return (
    <>
      <ModalContainer ref={modalRef} />
      <div id="modal-bContent" className="modal-back-content">
        <div className="w-1/2 h-40 mt-0 ml-auto">
          <p className="mb-4 dark:text-white">
            Current theme: {isDarkMode ? "dark" : "light"}
          </p>

          <BtnSolid
            onClick={toggle}
            bgColor="bg-emerald-500"
            text="text-xs text-white font-bold"
            padding="px-6 py-3"
            borderRadius="rounded"
          >
            Toggle
          </BtnSolid>

          <BtnSolid
            onClick={enable}
            bgColor="bg-slate-500"
            text="text-xs text-white font-bold"
            padding="px-6 py-3"
            borderRadius="rounded"
          >
            Enable Dark Mode
          </BtnSolid>

          <BtnSolid
            onClick={disable}
            bgColor="bg-cyan-500"
            text="text-xs text-white font-bold"
            padding="px-6 py-3"
            borderRadius="rounded"
          >
            Disable Dark Mode
          </BtnSolid>
          <BtnSolid
            onClick={reset}
            bgColor="bg-sky-500"
            text="text-xs text-white font-bold"
            padding="px-6 py-3"
            borderRadius="rounded"
          >
            Reset as Os Preference
          </BtnSolid>
        </div>
        <ToastContainer>
          <Home />
        </ToastContainer>

        <BtnSolid
          onClick={() => {
            modalRef.current.openModal({
              title: "Modal Title",
              content: "Modal Content",
              footer: "Modal Footer",
              animation: modalAnimation.blowUp,
            });
          }}
          bgColor="bg-emerald-500"
          text="text-xs text-white font-bold"
          padding="px-6 py-3"
          borderRadius="rounded"
        >
          Open Modal
        </BtnSolid>

        <div className="grid items-center justify-center w-full grid-cols-4 gap-2 mt-20 h-1/2 justify-items-center">
          <BtnSolid
            onClick={() => {
              modalRef.current.openModal({
                title: "Modal Title",
                content: "Modal Content",
                footer: "Modal Footer",
                animation: modalAnimation.unfolding,
              });
            }}
            bgColor="bg-emerald-500"
            text="text-xs text-white font-bold"
            padding="px-6 py-3"
            borderRadius="rounded"
          >
            Unfolding modal
          </BtnSolid>
          <BtnOutline
            onClick={() => {
              modalRef.current.openModal({
                title: "Modal Title",
                content: "Modal Content",
                footer: "Modal Footer",
                animation: modalAnimation.revealing,
              });
            }}
            bgColor="bg-emerald-500"
            text="text-emerald-500 text-xs font-bold"
            padding="px-6 py-3"
            borderRadius="rounded"
          >
            Revealing modal
          </BtnOutline>
          <BtnSolid
            onClick={() => {
              modalRef.current.openModal({
                title: "Modal Title",
                content: "Modal Content",
                footer: "Modal Footer",
                animation: modalAnimation.uncovering,
              });
            }}
            bgColor="bg-slate-500"
            text="text-xs text-white font-bold"
            padding="px-6 py-3"
            borderRadius="rounded"
          >
            Uncovering modal
          </BtnSolid>
          <BtnOutline
            onClick={() => {
              modalRef.current.openModal({
                title: "Modal Title",
                content: "Modal Content",
                footer: "Modal Footer",
                animation: modalAnimation.blowUp,
              });
            }}
            bgColor="bg-slate-500"
            text="text-xs text-slate-500 font-bold"
            padding="px-6 py-3"
            borderRadius="rounded"
          >
            BlowUp modal
          </BtnOutline>
          <BtnSolid
            onClick={() => {
              modalRef.current.openModal({
                title: "Modal Title",
                content: "Modal Content",
                footer: "Modal Footer",
                animation: modalAnimation.meep,
              });
            }}
            bgColor="bg-cyan-500"
            text="text-xs text-white font-bold"
            padding="px-6 py-3"
            borderRadius="rounded"
          >
            Meep modal
          </BtnSolid>
          <BtnOutline
            onClick={() => {
              modalRef.current.openModal({
                title: "Modal Title",
                content: "Modal Content",
                footer: "Modal Footer",
                animation: modalAnimation.sketch,
              });
            }}
            bgColor="bg-cyan-500"
            text="text-xs text-cyan-500 font-bold"
            padding="px-6 py-3"
            borderRadius="rounded"
          >
            Sketch modal
          </BtnOutline>
          <BtnSolid
            onClick={() => {
              modalRef.current.openModal({
                title: "Modal Title",
                content: "Modal Content",
                footer: "Modal Footer",
                animation: modalAnimation.bond,
              });
            }}
            bgColor="bg-sky-500"
            text="text-xs text-white font-bold"
            padding="px-6 py-3"
            borderRadius="rounded"
          >
            Bond modal
          </BtnSolid>
        </div>
      </div>
    </>
  );
}

export default App;
