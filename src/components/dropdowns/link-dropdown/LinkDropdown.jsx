import { useOnClickOutside } from "hooks";
import { useRef } from "react";
import { joinClasses } from "util";
import { useDropdown } from "../use-dropdown";

export const LinkDropdown = () => {
  const { open, isOpen, close, toggle } = useDropdown();

  const ref = useRef();

  const handleClickOutside = () => {
    close();
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div
      ref={ref}
      className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
    >
      <div className="relative ml-3">
        <div>
          <button
            onClick={toggle}
            type="button"
            className="flex text-sm bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja2dyb3VuZHxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </button>
        </div>
        {/* 
                  Profile dropdown panel, show/hide based on dropdown state.
                  Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              */}
        <div
          className={joinClasses(
            "absolute right-0  w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5",
            isOpen ? "block" : "hidden"
          )}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabIndex="-1"
        >
          {/* Active: "bg-gray-100", Not Active: "" */}
          <a
            href="#"
            onClick={close}
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex="-1"
            id="user-menu-item-0"
          >
            Your Profile
          </a>
          <a
            href="/"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex="-1"
            id="user-menu-item-1"
          >
            Settings
          </a>
          <a
            href="/"
            className="block px-4 py-2 text-sm text-gray-700"
            role="menuitem"
            tabIndex="-1"
            id="user-menu-item-2"
          >
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
};
