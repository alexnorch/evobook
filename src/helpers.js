export const getBookSize = () => {
  const width = window.innerWidth;
  let sizes = {};

  if (width <= 320) {
    sizes = { height: 420, width: 290 };
  } else if (width <= 360) {
    sizes = { height: 460, width: 310 };
  } else if (width <= 412) {
    sizes = { height: 540, width: 365 };
  } else {
    sizes = { height: 560, width: 430 };
  }

  return sizes;
};
