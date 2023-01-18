import { TriangleIcon } from "assets";
import "./Tooltip.scss";

const Tooltip = (props) => {
  let { tooltipText, children, position, textColor, bgColor, opacity, fill } =
    props;

  const tooltipContainerClasses =
    "relative w-fit first-child:hover:visible first-child:hover:" + opacity;

  const tooltipClasses =
    "invisible absolute px-2 py-1.5  text-xs whitespace-nowrap transition-opacity duration-300 ease-in-out rounded-sm shadow-lg opacity-0 z-10";

  textColor = textColor ? textColor : "text-white";
  bgColor = bgColor ? bgColor : "bg-black";

  opacity = opacity ? opacity : "opacity-80";

  // section: tooltip position classes
  const top = "-top-12 left-1/2 -translate-x-1/2";
  const bottom = "-bottom-12 left-1/2 -translate-x-1/2";
  const left = "right-[180%] top-1/2 -translate-y-1/2 text-left";
  const right = "left-[180%] top-1/2 -translate-y-1/2";

  // section: arrow position classes according to tooltip position
  const tooltipArrowTop = `-translate-x-1/2 rotate-180 left-1/2 -bottom-2`;
  const tooltipArrowBottom = `-translate-x-1/2 left-1/2 -top-2`;
  const tooltipArrowLeft = `-translate-y-1/2 rotate-90 top-1/2 -right-2`;
  const tooltipArrowRight = `-translate-y-1/2 -rotate-90 top-1/2 -left-2`;

  const classNames = (...params) => {
    return params.filter(Boolean).join(" ");
  };

  return (
    <>
      <div className={tooltipContainerClasses}>
        <span
          className={classNames(
            tooltipClasses,
            textColor,
            bgColor,
            opacity,
            position === "top"
              ? top
              : position === "right"
              ? right
              : position === "bottom"
              ? bottom
              : left
          )}
        >
          {tooltipText}
          <TriangleIcon
            className={classNames(
              "absolute w-2.5 h-2.5 -z-10",
              fill,
              position === "top"
                ? tooltipArrowTop
                : position === "right"
                ? tooltipArrowRight
                : position === "bottom"
                ? tooltipArrowBottom
                : tooltipArrowLeft
            )}
          />
        </span>
        {children}
      </div>
    </>
  );
};

export default Tooltip;
