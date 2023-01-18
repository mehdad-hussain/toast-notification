export const joinClasses = (...params) => {
  return params.filter(Boolean).join(" ");
};
