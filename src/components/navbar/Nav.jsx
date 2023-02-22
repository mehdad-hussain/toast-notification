import { HoverDropDown } from "components";
import { useDarkMode } from "hooks";

export const Nav = () => {
  const { enable, disable, reset } = useDarkMode();

  return (
    <>
      <header className="bg-white shadow dark:bg-gray-800">
        <nav className="bg-white dark:bg-gray-800">
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              {/* section: Mobile menu button*/}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* section: Icon when menu is closed. */}
                  {/* Menu open: "hidden", Menu closed: "block" */}
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  {/*section: Icon when menu is open. */}
                  {/* Menu open: "block", Menu closed: "hidden" */}
                  <svg
                    className="hidden w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                {/* section: Logo */}
                <div className="flex items-center flex-shrink-0">
                  <img
                    className="block w-auto h-8 lg:hidden"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden w-auto h-8 lg:block"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  />
                </div>
                {/* section: Desktop menu */}
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    <a
                      href="/"
                      className="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md"
                    >
                      Toast Notifications
                    </a>
                    <a
                      href="/"
                      className="px-3 py-2 text-sm font-medium rounded-md text-slate-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Modal
                    </a>
                    <a
                      href="/"
                      className="px-3 py-2 text-sm font-medium rounded-md text-slate-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Sidebar
                    </a>
                    <a
                      href="/"
                      className="px-3 py-2 text-sm font-medium rounded-md text-slate-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      Calendar
                    </a>
                  </div>
                </div>
                {/* make a theme switcher button with 3 options */}
              </div>
              <HoverDropDown
                list={[
                  { title: "Dark", value: "dark", onClick: enable },
                  { title: "Light", value: "light", onClick: disable },
                  { title: "System", value: "reset", onClick: reset },
                ]}
              ></HoverDropDown>
              {/* section: Theme switcher */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-16 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="relative ml-3">
                  <div>
                    <button className="p-1 text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Theme switcher</span>
                      {/* <!-- Heroicon name: outline/bell --> */}
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 17h8m-4-4h4m-8 8h4m-4-4h4m-8 8h4m-4-4h4M6 3h14a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* <!-- Theme dropdown --> */}
                  <div className="absolute right-0 hidden w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      <a
                        href="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Light
                      </a>
                      <a
                        href="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Dark
                      </a>
                      <a
                        href="/"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        System
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* section: Profile dropdown */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="relative ml-3">
                  <div>
                    <button
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
                    className="absolute right-0 hidden w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                  >
                    {/* Active: "bg-gray-100", Not Active: "" */}
                    <a
                      href="/"
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
            </div>
          </div>
          {/* section: Mobile menu, show/hide based on menu state. */}
          <div className="sm:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="/"
                className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md"
              >
                Toast Notifications
              </a>
              <a
                href="/"
                className="block px-3 py-2 text-base font-medium rounded-md text-slate-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Modal
              </a>
              <a
                href="/"
                className="block px-3 py-2 text-base font-medium rounded-md text-slate-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Sidebar
              </a>
              <a
                href="/"
                className="block px-3 py-2 text-base font-medium rounded-md text-slate-700 dark:text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Calendar
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

// section: considerable props to make this navbar dynamic component

/**
 * 1. navbar background color
 * 2. navbar text color
 * 3. navbar logo
 *
 * 4. navbar menu items
 * 5. navbar menu items text color
 * 6. navbar menu items background color
 * 7. navbar menu items hover text color
 * 8. navbar menu items hover background color
 * 9. navbar menu items active text color
 * 10. navbar menu items active background color
 * 11. navbar menu items active hover text color
 * 12. navbar menu items active hover background color
 *
 * 13. navbar profile dropdown items
 * 14. navbar profile dropdown items text color
 * 15. navbar profile dropdown items background color
 * 16. navbar profile dropdown items hover text color
 * 17. navbar profile dropdown items hover background color
 * 18. navbar profile dropdown items active text color
 * 19. navbar profile dropdown items active background color
 * 20. navbar profile dropdown items active hover text color
 * 21. navbar profile dropdown items active hover background color
 *
 * 22. dose the navbar have a profile dropdown
 * 23. dose the navbar have a mobile menu
 * 24. dose the navbar have a logo
 * 26. dose the navbar have a search bar
 * 27. dose the navbar have a notification bell
 * 28. dose the navbar have a message bell
 * 29. dose the navbar have a cart
 * 30. dose the navbar have a language switcher
 * 31. dose the navbar have a theme switcher
 *
 *
 */
