import { ToastContext } from "App";
import { BtnOutline } from "components";
import { useContext } from "react";

export const Home = () => {
  const toast = useContext(ToastContext);

  return (
    <>
      {/* make a button container  tailwind classes */}
      <div className="grid items-center justify-center w-1/2 grid-cols-2 gap-2 h-1/2 justify-items-center">
        <button
          className="btn-outline btn"
          onClick={() => {
            toast.current.success({
              message: " It's a Successful Message ",
              timer: 5,
            });
          }}
        >
          Add Success Toast (5s)
        </button>
        <button
          className="btn-outline btn"
          onClick={() => {
            toast.current.error({
              message: " It's a Error Message ",
              timer: 3,
            });
          }}
        >
          Add Error Toast (3s)
        </button>
        <button
          className="btn-outline btn"
          onClick={() => {
            toast.current.warn({
              message: " It's a Warning Message ",
              timer: 4,
            });
          }}
        >
          Add Warning Toast (4s)
        </button>

        <button
          className="btn-outline btn"
          onClick={() => {
            toast.current.info({
              message: " It's a Info Message ",
              timer: 6,
            });
          }}
        >
          Add Info Toast (6s)
        </button>
        <button
          className="btn-outline btn"
          onClick={() => toast.current.clear()}
        >
          Clear Toasts
        </button>
      </div>

      <BtnOutline
        bgColor="bg-teal-500"
        textColor="text-teal-500"
        size="px-6 py-2"
        borderRadius="rounded"
      >
        NEW
      </BtnOutline>

      <div className="card">card</div>
    </>
  );
};
