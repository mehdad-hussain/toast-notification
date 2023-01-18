import { createElement, forwardRef } from "react";

function ProductIcon(props, svgRef) {
  return /*#__PURE__*/ createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 26 28.026",
        fill: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
      },
      props
    ),
    /*#__PURE__*/ createElement("path", {
      fillRule: "evenodd",
      d: "M22.236 5.187a.836.836 0 00-.529-.568l-9.5-4.062a2.026 2.026 0 00-1.456 0l-9.5 4.062a.835.835 0 00-.529.568.925.925 0 00-.318.722v12.529a1.51 1.51 0 00.814 1.3l9.522 4.578a1.011 1.011 0 00.438.1.761.761 0 01.605 0 1.011 1.011 0 00.438-.1l9.522-4.578a1.51 1.51 0 00.814-1.3V5.909a.925.925 0 00-.321-.722zM11.184 1.576a.969.969 0 01.586 0l8.889 3.8-8.922 4.29a.78.78 0 01-.52 0L2.294 5.375zM1.69 5.087h-.005 0zm0 13.654a.432.432 0 01-.187-.3V6.231l9.229 4.438a.432.432 0 01.187.3v12.21zm9.282 5.076zm1 0zm9.469-5.38a.432.432 0 01-.187.3l-9.229 4.437v-12.21a.431.431 0 01.187-.3l9.229-4.438z",
      clipRule: "evenodd",
    })
  );
}

const ForwardRef = forwardRef(ProductIcon);
export default ForwardRef;
