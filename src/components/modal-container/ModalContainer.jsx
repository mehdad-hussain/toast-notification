import { forwardRef, useImperativeHandle, useState } from "react";
import ReactDOM from "react-dom";

import { usePortal, useUpdateEffect } from "hooks";

import { Modal } from "components";
import { uuid } from "util";
import "./ModalContainer.scss";

export const ModalContainer = forwardRef((props, ref) => {
  const [modal, setModal] = useState([]);
  const [animation, setAnimation] = useState({
    name: "",
    duration: 0,
    isOut: false,
    finished: false,
  });

  const { loaded, portalId } = usePortal("modal", "center");

  const addModal = (modal) => {
    if (modal.length > 0) {
      return;
    }

    setModal((prevModal) => {
      setAnimation({
        ...animation,
        name: modal.animation.name,
        duration: modal.animation.duration,
      });

      return [
        ...prevModal,
        {
          id: uuid(),
          isVisible: true,
          title: modal?.title ? modal.title : "",
          body: props.children,
          footer: modal?.footer ? modal.footer : "",
          animation: modal.animation.name,
        },
      ];
    });
  };

  const removeModal = (id) => {
    setAnimation({ ...animation, isOut: true });
    setModal((prevModal) => {
      return prevModal.map((modal) => {
        if (modal.id === id) {
          return {
            ...modal,
            isVisible: false,
          };
        } else {
          return modal;
        }
      });
    });
    setTimeout(() => {
      setAnimation({ ...animation, finished: true });
      setModal((prevModal) => {
        return prevModal.filter((modal) => modal.id !== id);
      });
    }, animation.duration);
  };

  useImperativeHandle(ref, () => ({
    openModal: (modal) => {
      addModal(modal);
    },
    closeModal: (id) => {
      removeModal(id);
    },
  }));

  useUpdateEffect(() => {
    let backContentClass =
      animation.name === "uncovering"
        ? "uncovering-modal-back-content"
        : animation.name === "revealing"
        ? "revealing-modal-back-content"
        : animation.name === "blowUp"
        ? "blowUp-modal-back-content"
        : "";

    let backContentOutClass =
      animation.name === "uncovering"
        ? "uncovering-out-modal-back-content"
        : animation.name === "revealing"
        ? "revealing-out-modal-back-content"
        : animation.name === "blowUp"
        ? "blowUp-out-modal-back-content"
        : "";

    // section: logic for ending animation
    if (animation.isOut) {
      document.getElementById("modal-container")?.classList.add("out");
      if (
        animation.name === "uncovering" ||
        animation.name === "revealing" ||
        animation.name === "blowUp"
      ) {
        document.getElementById("root").classList.remove(backContentClass);

        document.getElementById("root")?.classList.add(backContentOutClass);
      }
    }
    // section: logic for removing classes after animation is finished and resetting animation state
    else if (animation.finished) {
      document
        .getElementById("modal-container")
        ?.classList.remove(animation.name, "out");
      if (
        animation.name === "uncovering" ||
        animation.name === "revealing" ||
        animation.name === "blowUp"
      ) {
        document.getElementById("root")?.classList.remove(backContentOutClass);
      }
      setAnimation({
        name: "",
        duration: 500,
        isOut: false,
        finished: false,
      });
    }
    // section: logic for starting animation
    else if (animation.name !== "") {
      document.getElementById("modal-container")?.classList.add(animation.name);
      if (
        animation.name === "uncovering" ||
        animation.name === "revealing" ||
        animation.name === "blowUp"
      ) {
        document.getElementById("root").classList.add(backContentClass);
      }
    }
  }, [animation]);

  return loaded ? (
    ReactDOM.createPortal(
      <div className="modalContainer" id="modal-container">
        {modal.map((modal) => (
          <Modal
            key={modal.id}
            id={modal.id}
            title={modal.title}
            body={modal.body}
            footer={modal.footer}
            isVisible={modal.isVisible}
            onClose={() => removeModal(modal.id)}
          />
        ))}
      </div>,
      document.getElementById(portalId)
    )
  ) : (
    <></>
  );
});

export const modalAnimation = {
  unfolding: {
    name: "unfolding",
    duration: 1300,
  },
  revealing: {
    name: "revealing",
    duration: 500,
  },
  uncovering: {
    name: "uncovering",
    duration: 500,
  },
  blowUp: {
    name: "blowUp",
    duration: 500,
  },
  meep: {
    name: "meep",
    duration: 500,
  },
  sketch: {
    name: "sketch",
    duration: 500,
  },
  bond: {
    name: "bond",
    duration: 2000,
  },
};
