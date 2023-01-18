import { StarIcon } from "@heroicons/react/solid";
// import { StarIcon } from "@heroicons/react/outline";

import "./Rating.module.scss";

const Rating = ({ value, text }) => {
  //  <!-- idea: rest operator as parameter -->
  const classNames = (...classes) => {
    console.log(classes);
    //  <!-- idea: spread operator -->
    console.log(...classes);
    return classes.filter(Boolean).join(" ");
  };

  let fullSymbols = Math.floor(value); // 3
  let halfSymbols = value % Math.floor(value) !== 0; // 1

  let symbolNodes = [];

  let halfStar = (
    <svg
      width="17px"
      height="17px"
      viewBox="0 2 36 36"
      stroke="currentColor"
      fill="#efee45"
      strokeWidth=".2"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="clr-i-solid clr-i-solid-path-1"
        d="M34,16.78a2.22,2.22,0,0,0-1.29-4l-9-.34a.23.23,0,0,1-.2-.15L20.4,3.89a2.22,2.22,0,0,0-4.17,0l-3.1,8.43a.23.23,0,0,1-.2.15l-9,.34a2.22,2.22,0,0,0-1.29,4l7.06,5.55a.23.23,0,0,1,.08.24L7.35,31.21a2.22,2.22,0,0,0,3.38,2.45l7.46-5a.22.22,0,0,1,.25,0l7.46,5a2.2,2.2,0,0,0,2.55,0,2.2,2.2,0,0,0,.83-2.4l-2.45-8.64a.22.22,0,0,1,.08-.24ZM24.9,23.11l2.45,8.64A.22.22,0,0,1,27,32l-7.46-5a2.21,2.21,0,0,0-1.24-.38h0V4.44h0a.2.2,0,0,1,.21.15L21.62,13a2.22,2.22,0,0,0,2,1.46l9,.34a.22.22,0,0,1,.13.4l-7.06,5.55A2.21,2.21,0,0,0,24.9,23.11Z"
      ></path>
    </svg>
  );

  let fullStar = <StarIcon className="w-5" fill="#efee45" />;

  let emptyStar = <StarIcon className="w-5" />;

  for (let index = 1; index <= 5; index++) {
    if (index <= fullSymbols) {
      symbolNodes.push(fullStar);
    } else if (fullSymbols < index && halfSymbols) {
      symbolNodes.push(halfStar);
      halfSymbols = null;
    } else {
      symbolNodes.push(emptyStar);
    }
  }

  return (
    <>
      <div className="flex flex-wrap items-center w-[96%] mt-2 group">
        <div className="flex items-center mt-1 mr-1">
          {symbolNodes.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
        <div className="mt-1">{text}</div>
      </div>
    </>
  );
};

export default Rating;
