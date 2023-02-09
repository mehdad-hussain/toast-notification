import { BtnOutline, BtnSolid } from "components";
import React from "react";
import { joinClasses } from "util";

export const Modal = (props) => {
  const { onClose, size, bgColor, title, content, footer } = props;

  let sizeClass =
    size === "1200px"
      ? "max-w-[1200px]"
      : size === "1000px"
      ? "max-w-[1000px]"
      : size === "800px"
      ? "max-w-[800px]"
      : size === "600px"
      ? "max-w-[600px]"
      : "max-w-[384px]";

  let modalBgColor = bgColor;
  let textColor = modalBgColor.includes("white")
    ? "text-slate-600"
    : "text-white";

  const classes = joinClasses(
    "w-auto mx-auto border-0 rounded-lg shadow-lg outline-none p-1 focus:outline-none modal",
    sizeClass,
    modalBgColor,
    textColor
  );

  let rectStyles =
    size === "1200px"
      ? { strokeDasharray: "3147", strokeDashoffset: "3178" }
      : size === "1000px"
      ? { strokeDasharray: "2947", strokeDashoffset: "2978" }
      : size === "800px"
      ? { strokeDasharray: "2547", strokeDashoffset: "2578" }
      : size === "600px"
      ? { strokeDasharray: "2178", strokeDashoffset: "2178" }
      : { strokeDasharray: "1800", strokeDashoffset: "1800" };

  // prettier-ignore
  let stroke = bgColor.includes("red") ? "red" : bgColor.includes("blue") ? "blue" : bgColor.includes("green") ? "green" : bgColor.includes("yellow") ? "yellow" : bgColor.includes("gray") ? "gray" : bgColor.includes("black") ? "black" : bgColor.includes("white") ? "white" : bgColor.includes("pink") ? "pink" : bgColor.includes("purple") ? "purple" : bgColor.includes("indigo") ? "indigo" : bgColor.includes("teal") ? "teal" : bgColor.includes("cyan") ? "cyan" : bgColor.includes("emerald") ? "emerald" : bgColor.includes("lime") ? "lime" : bgColor.includes("orange") ? "orange" : bgColor.includes("amber") ? "amber" : bgColor.includes("rose") ? "rose" : bgColor.includes("fuchsia") ? "fuchsia" : bgColor.includes("violet") ? "violet" : "sky";

  return (
    <>
      <div className={classes}>
        {/* section: header*/}
        {title !== "" ? (
          <div className="modal-content">
            <div className="flex items-start justify-between p-3 border-b border-solid rounded-t border-slate-100 ">
              <h3 className="text-3xl font-semibold">{title}</h3>
              <button
                className="float-right p-1 ml-auto text-3xl font-semibold leading-none bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                onClick={() => false}
              >
                <span className="block w-6 h-6 text-2xl bg-transparent outline-none opacity-5 focus:outline-none">
                  ×
                </span>
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
        {/* section: body*/}
        {content !== "" ? (
          <div className="modal-content">
            <div className="relative flex-auto p-6 ">{content}</div>
          </div>
        ) : (
          <></>
        )}

        {/* section: svg for sketch animation */}
        <svg
          className="modal-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          <rect
            style={rectStyles}
            stroke={stroke}
            strokeWidth={2}
            x="0"
            y="0"
            fill="none"
            width="100%"
            height="100%"
            rx="6"
            ry="6"
          ></rect>
        </svg>
        {/* section: footer*/}
        <div className="modal-content">
          <div className="flex items-center justify-end p-2.5 border-t border-solid rounded-b border-slate-100 ">
            <BtnOutline
              onClick={onClose}
              bgColor="bg-rose-500"
              text="text-rose-500 text-sm font-bold mr-2"
              padding="px-6 py-2.5"
              borderRadius="rounded"
            >
              Close
            </BtnOutline>

            <BtnSolid
              onClick={false}
              bgColor="bg-emerald-500"
              text="text-white text-sm font-bold"
              padding="px-6 py-3"
              borderRadius="rounded"
            >
              Save Changes
            </BtnSolid>
            {footer}
          </div>
        </div>
      </div>

      <div className="modal-background" onClick={onClose}></div>
    </>
  );
};
