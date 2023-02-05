import React from "react";
import { joinClasses } from "util";

export const BtnOutline = (props) => {
  let { children, bgColor, text, padding, borderRadius } = props;

  let Padding = padding ? padding : "px-6 py-2";

  let BgColor = bgColor ? bgColor : "bg-zinc-500";

  let Text = text
    ? text
    : "text-zinc-500  font-semibold text-sm uppercase tracking-wide";

  let BorderRadius = borderRadius ? borderRadius : "rounded";

  let color = BgColor.split("-")[1];

  //   prettier-ignore
  let hoverBgColor = color === "amber" ? "hover:bg-amber-500" : color === "slate" ? "hover:bg-slate-500" : color === "gray" ? "hover:bg-gray-500" : color === "red" ? "hover:bg-red-500" : color === "green" ? "hover:bg-green-500" : color === "blue" ? "hover:bg-blue-500" : color === "indigo" ? "hover:bg-indigo-500" : color === "purple" ? "hover:bg-purple-500" : color === "pink" ? "hover:bg-pink-500" : color === "neutral" ? "hover:bg-neutral-500" : color === "stone" ? "hover:bg-stone-500" : color === "orange" ? "hover:bg-orange-500" : color === "yellow" ? "hover:bg-yellow-500" : color === "lime" ? "hover:bg-lime-500" : color === "teal" ? "hover:bg-teal-500" : color === "cyan" ? "hover:bg-cyan-500" : color === "sky" ? "hover:bg-sky-500" : color === "violet" ? "hover:bg-violet-500" : color === "fuchsia" ? "hover:bg-fuchsia-500" : color === "rose" ? "hover:bg-rose-500" : "hover:bg-zinc-500";

  //   prettier-ignore
  let borderColor = color === "amber" ? "border-amber-500" : color === "slate" ? "border-slate-500" : color === "gray" ? "border-gray-500" : color === "red" ? "border-red-500" : color === "green" ? "border-green-500" : color === "blue" ? "border-blue-500" : color === "indigo" ? "border-indigo-500" : color === "purple" ? "border-purple-500" : color === "pink" ? "border-pink-500" : color === "neutral" ? "border-neutral-500" : color === "stone" ? "border-stone-500" : color === "orange" ? "border-orange-500" : color === "yellow" ? "border-yellow-500" : color === "lime" ? "border-lime-500" : color === "teal" ? "border-teal-500" : color === "cyan" ? "border-cyan-500" : color === "sky" ? "border-sky-500" : color === "violet" ? "border-violet-500" : color === "fuchsia" ? "border-fuchsia-500" : color === "rose" ? "border-rose-500" : "border-zinc-500";

  //   prettier-ignore
  let activeBgColor = color === "amber" ? "active:bg-amber-600" : color === "slate" ? "active:bg-slate-600" : color === "gray" ? "active:bg-gray-600" : color === "red" ? "active:bg-red-600" : color === "green" ? "active:bg-green-600" : color === "blue" ? "active:bg-blue-600" : color === "indigo" ? "active:bg-indigo-600" : color === "purple" ? "active:bg-purple-600" : color === "pink" ? "active:bg-pink-600" : color === "neutral" ? "active:bg-neutral-600" : color === "stone" ? "active:bg-stone-600" : color === "orange" ? "active:bg-orange-600" : color === "yellow" ? "active:bg-yellow-600" : color === "lime" ? "active:bg-lime-600" : color === "teal" ? "active:bg-teal-600" : color === "cyan" ? "active:bg-cyan-600" : color === "sky" ? "active:bg-sky-600" : color === "violet" ? "active:bg-violet-600" : color === "fuchsia" ? "active:bg-fuchsia-600" : color === "rose" ? "active:bg-rose-600" : "active:bg-zinc-600";

  let classes = joinClasses(
    "border outline-none focus:outline-none",
    "mr-1 mb-1",
    "ease-linear transition-all duration-150",
    "hover:text-white",
    Padding,
    Text,
    BorderRadius,
    hoverBgColor,
    activeBgColor,
    borderColor
  );

  return (
    <button
      onClick={
        props.onClick ? props.onClick : () => console.log("Button Clicked")
      }
      className={classes}
      type="button"
    >
      {children}
    </button>
  );
};
