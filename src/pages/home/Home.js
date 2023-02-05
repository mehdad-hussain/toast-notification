import { ToastContext } from "App";
import { useContext } from "react";

export const Home = () => {
  const toast = useContext(ToastContext);

  return (
    <>
      <button
        className="bg-green-300 btn btn-primary"
        onClick={() => {
          toast.current.success({ message: "Success", timer: 5 });
        }}
      >
        Add Toast
      </button>

      <button className="bg-red-400 btn" onClick={() => "error"}>
        Add Error Toast
      </button>

      <button className="bg-red-400 btn" onClick={() => "warning"}>
        Add Warning Toast
      </button>

      <button className="bg-red-400 btn" onClick={() => "error"}>
        Add Auto Toast
      </button>
    </>
  );
};
