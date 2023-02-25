import { useState, Fragment } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import { Transition, Menu } from "@headlessui/react";

import "./AnimationComponent.scss";

const colors = [
  "#6690FF",
  "#6CD566",
  "#50E5FF",
  "#FFDC75",
  "#FF7C83",
  "#FF702D",
  "#FFAA42",
  "#7F7B82",
  "#4D7EA8",
];

function Box({ word }) {
  const color = colors[Math.floor(Math.random() * 9)];
  const [visible, setVisible] = useState(true);

  function hideMe() {
    setVisible(false);
    setTimeout(() => {
      setVisible(true);
    }, 1000);
  }

  let style = { borderColor: color, backgroundColor: color };
  //   if (!visible) style.display = "none";

  return (
    <>
      <Transition
        appear={true}
        as={Fragment}
        show={visible}
        enter="transform transition ease-in-out duration-700"
        enterFrom="opacity-0 rotate-[-120deg] scale-0"
        enterTo="opacity-100 rotate-0 scale-100"
        leave="transform duration-700 transition ease-in-out"
        leaveFrom="opacity-100 rotate-0 scale-100 "
        leaveTo="opacity-0 scale-0 "
      >
        <div className="box" style={style}>
          <div className="center">{word}</div>
          <button className="button bottom-corner" onClick={hideMe}>
            <EyeIcon className="w-4 h-4 center" />
          </button>
        </div>
      </Transition>
    </>
  );
}

export const AnimationComponent = () => {
  const [isShowing, setIsShowing] = useState(true);
  const words = [];
  for (let i = 0; i < 12; i++) {
    words[i] = "word" + i;
  }

  return (
    <div className="frame">
      {words.map((word) => (
        <Box key={word} word={word} />
      ))}
      <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
        Toggle
      </button>
      <Transition
        appear={true}
        show={isShowing}
        enter="transition-opacity duration-700"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        I will appear and disappear.
      </Transition>
    </div>
  );
};

// import { Transition } from "@headlessui/react";
// import { Fragment, useState } from "react";
// // import { useTimeoutFn } from "react-use";

// export const AnimationComponent = () => {
//   let [isShowing, setIsShowing] = useState(true);
//   //   let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);

//   return (
//     <div className="flex flex-col items-center py-16">
//       <div className="w-32 h-32">
//         <Transition
//           as={Fragment}
//           show={isShowing}
//           enter="transform transition duration-[400ms]"
//           enterFrom="opacity-0 rotate-[-120deg] scale-50"
//           enterTo="opacity-100 rotate-0 scale-100"
//           leave="transform duration-200 transition ease-in-out bg-red-500"
//           leaveFrom="opacity-100 rotate-0 scale-100 bg-red-500"
//           leaveTo="opacity-0 scale-95 bg-red-500"
//         >
//           <div className="w-full h-full bg-red-500 rounded-md shadow-lg" />
//         </Transition>
//       </div>

//       <button
//         onClick={() => {
//           setIsShowing(false);
//           setTimeout(() => {
//             setIsShowing(true);
//           }, 500);
//           //   resetIsShowing();
//         }}
//         className="flex items-center px-3 py-2 mt-8 text-sm font-medium text-white transition transform bg-black rounded-full backface-visibility-hidden bg-opacity-20 hover:scale-105 hover:bg-opacity-30 focus:outline-none active:bg-opacity-40"
//       >
//         <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5 opacity-70">
//           <path
//             d="M14.9497 14.9498C12.2161 17.6835 7.78392 17.6835 5.05025 14.9498C2.31658 12.2162 2.31658 7.784 5.05025 5.05033C7.78392 2.31666 12.2161 2.31666 14.9497 5.05033C15.5333 5.63385 15.9922 6.29475 16.3266 7M16.9497 2L17 7H16.3266M12 7L16.3266 7"
//             stroke="currentColor"
//             strokeWidth="1.5"
//           />
//         </svg>

//         <span className="ml-3">Click to transition</span>
//       </button>
//     </div>
//   );
// };
