import { useState } from "react";

export const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  const toggle = () => setIsOpen(!isOpen);

  const close = () => setIsOpen(false);

  const open = () => setIsOpen(true);

  const selectItem = (item) => {
    setSelectedItem(item);
    close();
  };

  return {
    isOpen,
    selectedItem,
    toggle,
    close,
    open,
    selectItem,
  };
};
