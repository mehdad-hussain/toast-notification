import { createElement, forwardRef } from "react";

function CheckCircleIcon(props, svgRef) {
  return /*#__PURE__*/ createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
      },
      props
    ),
    /*#__PURE__*/ createElement("path", {
      fillRule: "evenodd",
      d: "M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM16.5303 10.0303C16.8232 9.73744 16.8232 9.26256 16.5303 8.96967C16.2374 8.67678 15.7626 8.67678 15.4697 8.96967L10.8434 13.5959C10.7458 13.6935 10.5875 13.6935 10.4899 13.5959L8.53033 11.6363C8.23744 11.3434 7.76256 11.3434 7.46967 11.6363C7.17678 11.9292 7.17678 12.4041 7.46967 12.697L9.42923 14.6566C10.1126 15.34 11.2207 15.34 11.9041 14.6566L16.5303 10.0303Z",
      clipRule: "evenodd",
    })
  );
}

const ForwardRef = forwardRef(CheckCircleIcon);
export default ForwardRef;
