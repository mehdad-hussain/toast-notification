import { joinClasses } from "util";

export const BtnSolid = (props) => {
  let { children, bgColor, text, padding, borderRadius, outline } = props;

  let Padding = padding ? padding : "px-6 py-2";

  let BorderRadius = borderRadius ? borderRadius : "rounded";

  let BgColor = bgColor ? bgColor : "bg-zinc-500";

  let color = BgColor.split("-")[1];

  // prettier-ignore
  let Text = text ? text : "text-white font-semibold text-sm uppercase tracking-wide";

  // prettier-ignore
  let Outline = outline ? outline : "outline-none focus:outline-none focus:ring";

  // prettier-ignore
  let ringColor = color === "amber" ? "focus:ring-amber-300" : color === "slate" ? "focus:ring-slate-300" : color === "gray" ? "focus:ring-gray-300" : color === "red" ? "focus:ring-red-300" : color === "green" ? "focus:ring-green-300" : color === "blue" ? "focus:ring-blue-300" : color === "indigo" ? "focus:ring-indigo-300" : color === "purple" ? "focus:ring-purple-300" : color === "pink" ? "focus:ring-pink-300" : color === "neutral" ? "focus:ring-neutral-300" : color === "stone" ? "focus:ring-stone-300" : color === "orange" ? "focus:ring-orange-300" : color === "yellow" ? "focus:ring-yellow-300" : color === "lime" ? "focus:ring-lime-300" : color === "teal" ? "focus:ring-teal-300" : color === "cyan" ? "focus:ring-cyan-300" : color === "sky" ? "focus:ring-sky-300" : color === "violet" ? "focus:ring-violet-300" : color === "fuchsia" ? "focus:ring-fuchsia-300" : color === "rose" ? "focus:ring-rose-300" : color==='emerald' ? 'focus:ring-emerald-300' : "focus:ring-zinc-300";

  //   prettier-ignore
  let hoverBgColor = color === "amber" ? "hover:bg-amber-600" : color === "slate" ? "hover:bg-slate-600" : color === "gray" ? "hover:bg-gray-600" : color === "red" ? "hover:bg-red-600" : color === "green" ? "hover:bg-green-600" : color === "blue" ? "hover:bg-blue-600" : color === "indigo" ? "hover:bg-indigo-600" : color === "purple" ? "hover:bg-purple-600" : color === "pink" ? "hover:bg-pink-600" : color === "neutral" ? "hover:bg-neutral-600" : color === "stone" ? "hover:bg-stone-600" : color === "orange" ? "hover:bg-orange-600" : color === "yellow" ? "hover:bg-yellow-600" : color === "lime" ? "hover:bg-lime-600" : color === "teal" ? "hover:bg-teal-600" : color === "cyan" ? "hover:bg-cyan-600" : color === "sky" ? "hover:bg-sky-600" : color === "violet" ? "hover:bg-violet-600" : color === "fuchsia" ? "hover:bg-fuchsia-600" : color === "rose" ? "hover:bg-rose-600" : color==='emerald' ? 'hover:bg-emerald-600' : "hover:bg-zinc-600";

  let classes = joinClasses(
    "shadow hover:shadow-lg ",
    "mr-1 mb-1",
    "ease-linear transition-all duration-150",
    Padding,
    Text,
    BorderRadius,
    BgColor,
    Outline,
    hoverBgColor,
    ringColor
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
