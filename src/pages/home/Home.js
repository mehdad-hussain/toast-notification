import { ToastContext } from "App";
import { BtnOutline } from "components";
import { BtnSolid } from "components/btn-solid/BtnSolid";
import { useContext, useRef } from "react";

export const Home = () => {
  const toast = useContext(ToastContext);
  const btnRef = useRef(null);

  return (
    <>
      <div className="grid items-center justify-center w-1/2 grid-cols-2 gap-2 mt-20 h-1/2 justify-items-center">
        <BtnOutline
          onClick={() => {
            toast.current.error({
              message: " It's a Error Message ",
              timer: 3,
            });
          }}
          bgColor="bg-red-500"
          text="text-red-500 text-xs font-bold"
          padding="px-6 py-2"
          borderRadius="rounded"
        >
          Add Error Toast (3s)
        </BtnOutline>

        <BtnSolid
          onClick={() => {
            toast.current.success({
              message: " It's a Successful Message",
              timer: 5,
            });
          }}
          bgColor="bg-teal-500"
          text="text-xs text-white font-bold"
          padding="px-6 py-[9px]"
          borderRadius="rounded"
        >
          Add Success Toast (5s)
        </BtnSolid>

        <BtnOutline
          onClick={() => {
            toast.current.info({
              message:
                " It's a Info Message, it will be closed after 7s .. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sapiente illo quidem vel ipsa, pariatur nulla atque ab error quos.",
            });
          }}
          bgColor="bg-blue-500"
          text="text-blue-500 text-xs font-bold"
          padding="px-6 py-2"
          borderRadius="rounded"
        >
          Add Info Toast (7s)
        </BtnOutline>

        <BtnSolid
          onClick={() => {
            toast.current.warn({
              message: " It's a Warning Message",
              isAutoClose: false,
            });
          }}
          bgColor="bg-yellow-500"
          text="text-xs text-white font-bold"
          padding="px-6 py-[9px]"
          borderRadius="rounded"
        >
          Add Warning Toast (9s)
        </BtnSolid>
      </div>

      {/* <div className="card focus:ring-1 focus:ring-orange-600">card</div> */}
    </>
  );
};
