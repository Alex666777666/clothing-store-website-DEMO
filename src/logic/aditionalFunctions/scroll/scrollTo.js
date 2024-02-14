export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const scrollToDown = (ref) => {
  if (ref && ref.current) {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  }
};
