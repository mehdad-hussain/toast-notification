import { useContext, useRef } from "react";
// prettier-ignore
import { BtnOutline, ModalContainer, ToastContext, modalAnimation, } from "components";
import { BtnSolid } from "components/btn-solid/BtnSolid";

export const Home = () => {
  const { toast, positionedToast } = useContext(ToastContext);
  const modalRef = useRef(null);

  return (
    <>
      <ModalContainer ref={modalRef} />
      <div className="grid items-center justify-center w-full grid-cols-4 gap-2 mt-20 h-1/2 justify-items-center">
        <BtnOutline
          onClick={() => {
            toast.current.error(" It's a Error Message", {
              timer: 3,
            });
          }}
          bgColor="bg-red-500"
          text="text-red-500 text-xs font-bold"
          padding="px-6 py-3"
          borderRadius="rounded"
        >
          Error Toast (3s) default position
        </BtnOutline>

        <BtnSolid
          onClick={() => {
            positionedToast.topLeft.current.info("It's a info Message", {
              isAutoClose: false,
            });
          }}
          bgColor="bg-cyan-500"
          text="text-xs text-white font-bold"
          padding="px-6 py-3"
          borderRadius="rounded-xl"
        >
          Success Toast (no auto close) top-left
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
          Add Info Toast default position & timer
        </BtnOutline>

        <BtnSolid
          onClick={() => {
            toast.current.warn("It's a Warning Message", {
              isAutoClose: false,
            });
          }}
          bgColor="bg-yellow-500"
          text="text-xs text-white font-bold"
          padding="px-6 py-3"
          borderRadius="rounded"
        >
          Warning Toast (no auto close) default position
        </BtnSolid>

        <BtnSolid
          onClick={() => {
            positionedToast.bottomCenter.current.error(
              " It's a Error Message ",
              {
                timer: 3,
              }
            );
          }}
          bgColor="bg-stone-500"
          text="text-white text-xs font-bold"
          padding="px-6 py-3"
          borderRadius="rounded"
        >
          Error Toast (3s) bottom-center
        </BtnSolid>

        <BtnSolid
          onClick={() => {
            positionedToast.topCenter.current.success(
              " It's a Successful Message",
              {
                timer: 5,
                isAutoClose: false,
              }
            );
          }}
          bgColor="bg-teal-500"
          text="text-white text-xs font-bold"
          padding="px-6 py-3"
          borderRadius="rounded"
        >
          Success Toast (no auto close) top-center
        </BtnSolid>

        <BtnOutline
          onClick={() => {
            positionedToast.topLeft.current.info(
              "It's a Info Message, it will be closed after 7s .. Lorem ipsum dolor sit amet",
              {
                timer: 7,
              }
            );
          }}
          bgColor="bg-purple-500"
          text="text-purple-500 text-xs font-bold"
          padding="px-6 py-3"
          borderRadius="rounded"
        >
          Info Toast (7s) top-left
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
          Warning Toast (no auto close) bottom-left
        </BtnOutline>

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
          error Toast (no auto close) bottom-right
        </BtnOutline>

        <BtnSolid
          onClick={() => {
            positionedToast.bottomCenter.current.success(
              " It's a Successful Message",
              {
                isAutoClose: false,
              }
            );
          }}
          bgColor="bg-fuchsia-500"
          text="text-white text-xs font-bold"
          padding="px-6 py-3"
          borderRadius="rounded-2xl"
        >
          Success Toast (no auto close) bottom-center
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
          Info Toast (7s) bottom-center
        </BtnOutline>
      </div>

      <div className="grid items-center justify-center w-full grid-cols-4 gap-2 mt-20 h-1/2 justify-items-center">
        <BtnSolid
          onClick={() => {
            modalRef.current.openModal({
              title: "Modal Title",
              content: "Modal Content",
              footer: "Modal Footer",
              animation: modalAnimation.unfolding,
            });
          }}
          bgColor="bg-emerald-500"
          text="text-xs text-white font-bold"
          padding="px-6 py-3"
          borderRadius="rounded"
        >
          Unfolding modal
        </BtnSolid>
        <BtnOutline
          onClick={() => {
            modalRef.current.openModal({
              title: "Modal Title",
              content: "Modal Content",
              footer: "Modal Footer",
              animation: modalAnimation.revealing,
            });
          }}
          bgColor="bg-emerald-500"
          text="text-emerald-500 text-xs font-bold"
          padding="px-6 py-3"
          borderRadius="rounded"
        >
          Revealing modal
        </BtnOutline>
        <BtnSolid
          onClick={() => {
            modalRef.current.openModal({
              title: "Modal Title",
              content: "Modal Content",
              footer: "Modal Footer",
              animation: modalAnimation.uncovering,
            });
          }}
          bgColor="bg-slate-500"
          text="text-xs text-white font-bold"
          padding="px-6 py-3"
          borderRadius="rounded"
        >
          Uncovering modal
        </BtnSolid>
        <BtnOutline
          onClick={() => {
            modalRef.current.openModal({
              title: "Modal Title",
              content: "Modal Content",
              footer: "Modal Footer",
              animation: modalAnimation.blowUp,
            });
          }}
          bgColor="bg-slate-500"
          text="text-xs text-slate-500 font-bold"
          padding="px-6 py-3"
          borderRadius="rounded"
        >
          BlowUp modal
        </BtnOutline>
        <BtnSolid
          onClick={() => {
            modalRef.current.openModal({
              title: "Modal Title",
              content: "Modal Content",
              footer: "Modal Footer",
              animation: modalAnimation.meep,
            });
          }}
          bgColor="bg-cyan-500"
          text="text-xs text-white font-bold"
          padding="px-6 py-3"
          borderRadius="rounded"
        >
          Meep modal
        </BtnSolid>
        <BtnOutline
          onClick={() => {
            modalRef.current.openModal({
              title: "Modal Title",
              content: "Modal Content",
              footer: "Modal Footer",
              animation: modalAnimation.sketch,
            });
          }}
          bgColor="bg-cyan-500"
          text="text-xs text-cyan-500 font-bold"
          padding="px-6 py-3"
          borderRadius="rounded"
        >
          Sketch modal
        </BtnOutline>
        <BtnSolid
          onClick={() => {
            modalRef.current.openModal({
              title: "Modal Title",
              content: "Modal Content",
              footer: "Modal Footer",
              animation: modalAnimation.bond,
            });
          }}
          bgColor="bg-sky-500"
          text="text-xs text-white font-bold"
          padding="px-6 py-3"
          borderRadius="rounded"
        >
          Bond modal
        </BtnSolid>
      </div>
    </>
  );
};
