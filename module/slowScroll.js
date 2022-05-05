const initSlowScroll = () => {
  const sectionsScroll = document.querySelectorAll(
    '[data-scroll="slow"] a[href^="#"]'
  );
  const evts = ["click", "touchstart"];

  const handleScrollSlow = (e) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute("href");
    const section = document.querySelector(target);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  evts.forEach((ev) => {
    sectionsScroll.forEach((sects) => {
      sects.addEventListener(ev, handleScrollSlow);
    });
  });
};
export default initSlowScroll;
