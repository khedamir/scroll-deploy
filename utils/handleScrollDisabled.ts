export const handleScrollDisabled = (value: boolean) => {
  if (value) {
    document.body.classList.add("scroll-disabled");
  } else {
    document.body.classList.remove("scroll-disabled");
  }
};
