import * as React from "react";

export const RenderWhen = ({ limit, isTrue, children }) => {
  let list = [];

  console.log("RenderWhen", isTrue);

  if (isTrue !== true) {
    return null;
  }

  React.Children.map(children, (child) => {
    const { isTrue: isChildTrue } = child?.props || {};

    if (isChildTrue === true && list.length < limit) {
      list = [...list, child];
    }
  });

  return <>{list}</>;
};

RenderWhen.defaultProps = {
  limit: 1,
  isTrue: true,
};

RenderWhen.If = ({ children, isTrue }) => children;

// export default RenderWhen;
