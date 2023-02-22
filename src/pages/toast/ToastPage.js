import { useContext } from "react";
// prettier-ignore
import { BtnOutline, BtnSolid, toastAnimation, ToastContext } from "components";

export const ToastPage = () => {
  const { toast, positionedToast } = useContext(ToastContext);

  return (
    <>
      <div className="grid items-center justify-center w-full grid-cols-4 gap-2 mt-20 h-1/2 justify-items-center container">
        <div className="border w-full text-center font-bold dark:text-white">
          Top Right
        </div>
        <div className="border w-full text-center font-bold dark:text-white">
          Top Left
        </div>
        <div className="border w-full text-center font-bold dark:text-white">
          Bottom Right
        </div>
        <div className="border w-full text-center font-bold dark:text-white">
          Bottom Left
        </div>
        <BtnOutline
          onClick={() => {
            toast.current.error(" It's a Error Message", {
              animation: toastAnimation.slide,
              timer: 3,
            });
          }}
          bgColor="bg-red-500"
          text="text-red-500 text-xs font-bold"
          padding="px-6 py-3"
          borderRadius="rounded"
        >
          Error Toast (3s) A: slide
        </BtnOutline>

        <BtnOutline
          onClick={() => {
            positionedToast.topLeft.current.info(
              "It's a Info Message, it will be closed after 7s .. Lorem ipsum dolor sit amet",
              {
                timer: 4,
                animation: toastAnimation.zoom,
              }
            );
          }}
          bgColor="bg-purple-500"
          text="text-purple-500 text-xs font-bold"
          padding="px-6 py-3"
          borderRadius="rounded"
        >
          Info (4s) A: zoom
        </BtnOutline>

        <BtnOutline
          onClick={() => {
            positionedToast.bottomRight.current.error(" It's a error Message", {
              timer: 8,
            });
          }}
          bgColor="bg-violet-500"
          text="text-violet-500 text-xs font-bold"
          padding="px-6 py-3"
          borderRadius="rounded-lg"
        >
          error (8s)
        </BtnOutline>

        <BtnSolid
          onClick={() => {
            positionedToast.bottomLeft.current.warn("It's a Warning Message", {
              animation: toastAnimation.flip,
              timer: 5,
            });
          }}
          bgColor="bg-yellow-500"
          text="text-xs text-white font-bold"
          padding="px-6 py-3"
          borderRadius="rounded"
        >
          Warning (5s) A:flip
        </BtnSolid>

        <BtnOutline
          onClick={() => {
            toast.current.info(
              "It's a Info Message, it will be closed after 7s .. Lorem ipsum dolor sit amet"
            );
          }}
          bgColor="bg-blue-500"
          text="text-blue-500 text-xs font-bold"
          padding="px-6 py-3"
          borderRadius="rounded"
        >
          Info default pos. & timer
        </BtnOutline>

        <BtnSolid
          onClick={() => {
            positionedToast.topLeft.current.info("It's a info Message", {
              isAutoClose: false,
              animation: toastAnimation.bounce,
            });
          }}
          bgColor="bg-cyan-500"
          text="text-xs text-white font-bold"
          padding="px-6 py-3"
          borderRadius="rounded-xl"
        >
          Success (no a c) A: bounce
        </BtnSolid>

        <BtnOutline
          onClick={() => {
            positionedToast.bottomRight.current.error(" It's a error Message", {
              isAutoClose: false,
            });
          }}
          bgColor="bg-violet-500"
          text="text-violet-500 text-xs font-bold"
          padding="px-6 py-3"
          borderRadius="rounded-lg"
        >
          error (no a c)
        </BtnOutline>

        <BtnOutline
          onClick={() => {
            positionedToast.bottomLeft.current.warn(" It's a Warning Message", {
              isAutoClose: false,
            });
          }}
          bgColor="bg-orange-500"
          text="text-orange-500 text-xs font-bold"
          padding="px-6 py-3"
          borderRadius="rounded-full"
        >
          Warning (no a c)
        </BtnOutline>
      </div>

      {/* section: center */}
      <div className="grid items-center justify-center w-full grid-cols-2 gap-2 mt-20 h-1/2 justify-items-center container">
        <div className="border w-full text-center font-bold dark:text-white">
          Top Center
        </div>
        <div className="border w-full text-center font-bold dark:text-white">
          Bottom Center
        </div>

        <BtnSolid
          onClick={() => {
            positionedToast.topCenter.current.success(
              " It's a Successful Message",
              {
                timer: 5,
                isAutoClose: false,
                animation: toastAnimation.zoom,
              }
            );
          }}
          bgColor="bg-teal-500"
          text="text-white text-xs font-bold"
          padding="px-6 py-3"
          borderRadius="rounded"
        >
          Success (no a c) A: zoom
        </BtnSolid>
        <BtnSolid
          onClick={() => {
            positionedToast.bottomCenter.current.error(
              " It's a Error Message ",
              {
                timer: 3,
                animation: toastAnimation.flip,
              }
            );
          }}
          bgColor="bg-stone-500"
          text="text-white text-xs font-bold"
          padding="px-6 py-3"
          borderRadius="rounded"
        >
          Error (3s) A:flip
        </BtnSolid>
        <BtnSolid
          onClick={() => {
            positionedToast.topCenter.current.success(
              " It's a Successful Message",
              {
                timer: 6,
              }
            );
          }}
          bgColor="bg-fuchsia-500"
          text="text-white text-xs font-bold"
          padding="px-6 py-3"
          borderRadius="rounded-2xl"
        >
          Success (6s) A:slide
        </BtnSolid>

        <BtnOutline
          onClick={() => {
            positionedToast.bottomCenter.current.info(
              "It's a Info Message, it will be closed after 7s .. Lorem ipsum dolor sit amet",
              {
                timer: 7,
              }
            );
          }}
          bgColor="bg-neutral-500"
          text="text-neutral-500 text-xs font-bold"
          padding="px-6 py-3"
          borderRadius="rounded-sm"
        >
          Info (7s) A:slide
        </BtnOutline>
      </div>
    </>
  );
};
