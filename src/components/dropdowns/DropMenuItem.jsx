import { forwardRef } from "react";
import { useDropdown } from "./use-dropdown";

export const DropMenuItem = forwardRef((props, ref) => {
  const { value, title, children } = props;
  const { selectItem } = useDropdown();

  return (
    <div
      onClick={() => {
        selectItem(value);
      }}
    >
      {children ? children : <p>{title}</p>}
    </div>
  );
});
