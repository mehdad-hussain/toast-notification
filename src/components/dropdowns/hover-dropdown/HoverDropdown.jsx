import { useState } from "react";
import { joinClasses } from "util";
// import styles from "./HoverDropDown.module.scss";

export const HoverDropDown = (props) => {
  let { list, haveImage, width } = props;

  const [selectedItem, setSelectedItem] = useState(list[0]);

  haveImage = haveImage === undefined ? true : haveImage;

  const dWidth = width ? width : "w-24";

  const classes = joinClasses(
    "relative flex items-center cursor-pointer h-9 2nd-child:hover:visible 2nd-child:hover:top-[39px] 2nd-child:hover:opacity-100",
    dWidth
  );
  const containerClasses = joinClasses(
    "absolute z-40 invisible min-h-max py-1 pl-2 space-y-2 transition-all duration-300 bg-white shadow-md opacity-0 max-h-min top-11 w-36 dark:bg-gray-800 dark:text-white"
  );

  // todo: make fixed width for the dropdown so that it doesn't change width on option change
  return (
    <>
      <div className={classes}>
        {/* section: selected option */}
        <div className="flex items-center space-x-2">
          {haveImage && (
            <div className="w-4 h-2">
              <img
                src={selectedItem.img}
                alt={selectedItem.alt}
                className="object-cover "
              />
            </div>
          )}
          <h6 className="text-sm font-semibold text-right text-slate-700 dark:text-gray-300 whitespace-nowrap">
            {selectedItem?.title}
          </h6>
        </div>

        {/* section: dropdown container */}
        <div className={containerClasses}>
          {list?.map((item, index) => {
            return (
              <button
                type="button"
                key={index}
                onClick={() => {
                  setSelectedItem(item);
                  item?.onClick();
                }}
                className="flex items-center w-full space-x-2 border-b border-b-gray-300 last:border-b-0"
              >
                {haveImage && (
                  <div className="w-4 h-2">
                    <img
                      src={item?.img}
                      alt={item?.alt}
                      className="object-cover"
                    />
                  </div>
                )}
                <p className="text-base text-slate-700 dark:text-gray-300">
                  {item?.title}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
