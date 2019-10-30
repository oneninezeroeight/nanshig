const computed_rem = (picture_width = 750, rem_width = 100) => {
  let html = document.documentElement;
  html.style.fontSize =
    html.clientWidth / (picture_width / (2 * rem_width)) + "px";
  window.onresize = () => {
    let html = document.documentElement;
    html.style.fontSize =
      html.clientWidth / (picture_width / (2 * rem_width)) + "px";
  };
};
export default computed_rem;
