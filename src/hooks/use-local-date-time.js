export const useLocalDateTime = (value) => {
  const timeStamp = new Date(parseInt(value.toString().slice(0, 8), 16) * 1000);

  const date = timeStamp.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const time = timeStamp.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return { date, time };
};
