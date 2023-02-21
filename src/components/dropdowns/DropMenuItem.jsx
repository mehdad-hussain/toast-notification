import { useDropdown } from "./use-dropdown";
export const DropMenuItem = (props) => {
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
};
