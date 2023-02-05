export const uuid = (length) => {
  const id =
    Math.random().toString(36).substring(2, 4) +
    Date.now().toString(36).substring(2, length);

  return id;
};
