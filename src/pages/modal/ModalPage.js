import { useRef } from "react";
// prettier-ignore
import { BtnOutline, modalAnimation, ModalContainer, modalSize } from "components";
import { BtnSolid } from "components/buttons/btn-solid/BtnSolid";

export const ModalPage = () => {
  const modalRef = useRef(null);

  return (
    <>
      <ModalContainer ref={modalRef} />

      <div className="grid items-center justify-center w-full grid-cols-4 gap-2 mt-20 h-1/2 justify-items-center">
        <BtnSolid
          onClick={() => {
            modalRef.current.openModal({
              size: modalSize.xl,
              title: "Unfolding modal",
              content:
                "Modal Content Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, esse?",
              footer: "Modal Footer",
              animation: modalAnimation.unfolding,
              closeableBackdrop: false,
              borderRadius: "rounded-tl-3xl rounded-br-3xl",
              bgColor: "bg-lime-500",
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
              size: modalSize.md,
              title: "Revealing modal",
              content: "Modal Content",
              footer: "Modal Footer",
              animation: modalAnimation.revealing,
              bgColor: "bg-sky-500",
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
              size: modalSize.lg,
              title: "Uncovering modal",
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
              size: modalSize.xl,
              title: "BlowUp modal",
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
              size: modalSize.sm,
              title: "Meep modal",
              content: "Modal Content",
              // footer: (
              //   <BtnOutline
              //     onClick={() => {
              //       console.log("clicked");
              //     }}
              //     bgColor="bg-cyan-500"
              //     text="text-xs text-cyan-500 font-bold"
              //     padding="px-6 py-3"
              //     borderRadius="rounded"
              //   >
              //     Close
              //   </BtnOutline>
              // ),
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
              size: modalSize.md,
              title: "Sketch modal",
              content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, esse? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, esse?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, esse?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, esse?",
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
              size: modalSize.md,
              title: "Bond modal",
              content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, esse?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, esse?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, esse?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, esse?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, esse?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, esse?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, esse?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, esse?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, esse?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, esse?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, esse?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, esse?",
              footer: "Modal Footer",
              animation: modalAnimation.bond,
              modalBgColor: "bg-gray-500",
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
