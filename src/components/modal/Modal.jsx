import React from "react";

export const Modal = (props) => {
  const { onClose, position } = props;

  return (
    <>
      {/*content*/}
      <div className="w-auto max-w-sm mx-auto bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none modal">
        {/*header*/}
        <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
          <h3 className="text-3xl font-semibold">Modal Title</h3>
          <button
            className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
            onClick={() => false}
          >
            <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
              ×
            </span>
          </button>
        </div>
        {/*body*/}
        <div className="relative flex-auto p-6">
          <p className="my-4 text-lg leading-relaxed text-slate-500">
            I always felt like I could do anything. That’s the main thing people
            are controlled by! Thoughts- their perception of themselves!
          </p>
        </div>
        <svg
          className="modal-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
        >
          <rect
            x="0"
            y="0"
            fill="none"
            width="384"
            height="480"
            rx="6"
            ry="6"
          ></rect>
        </svg>
        {/*footer*/}
        <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
          <button
            className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
            type="button"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
            type="button"
            onClick={() => false}
          >
            Save Changes
          </button>
        </div>
      </div>
      <div className="modal-background" onClick={onClose}></div>
    </>
  );
};
