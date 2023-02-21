import { joinClasses } from "util";

export const DropdownMenu = ({ children }) => {
  const containerClasses = joinClasses(
    "absolute z-40 invisible h-24 py-1 pl-2 space-y-2 transition-all duration-300 bg-white shadow-md opacity-0 max-h-min top-11 w-36 dark:bg-gray-800 dark:text-white"
  );
  return (
    <>
      <div className={containerClasses}>{children}</div>
    </>
  );
};
