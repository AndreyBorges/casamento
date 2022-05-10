const initReturnStart = () => {
  const returnStart = document.querySelector(".returnStart");
  const history = document.getElementById("history");
  const scrollReturnStart = () => {
    const sectionTop = history.getBoundingClientRect().top;
    sectionTop < 0
      ? returnStart.classList.add("active")
      : returnStart.classList.remove("active");
  };
  window.addEventListener("scroll", scrollReturnStart);
};
export default initReturnStart;
