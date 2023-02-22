import { useContext, useRef } from "react";
// prettier-ignore
import { RenderWhen, ToastContext } from "components";

export const Home = () => {
  const x = 3;
  return (
    <>
      <RenderWhen>
        <RenderWhen.If isTrue={x === 2}>show If true</RenderWhen.If>
        <RenderWhen.If isTrue={x === 4}>show If 4</RenderWhen.If>
        <RenderWhen.If isTrue>show If false</RenderWhen.If>
      </RenderWhen>
    </>
  );
};
