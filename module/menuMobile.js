const initMenuMobile = () => {
  const headerContainer = document.querySelector(".headerContainer");
  const menuHamb = document.querySelector(".menuHamb");
  const evs = ["click", "touchstart"];
  console.log(headerContainer, menuHamb);
  const handleMenuHamb = (e) => {
    menuHamb.classList.toggle("active");
    headerContainer.classList.toggle("active");
  };

  const closeMenuHamb = ({ target }) => {
    if (target.closest(".menuHamb")) return;
    menuHamb.classList.remove("active");
    headerContainer.classList.remove("active");
    console.log(target);
  };

  evs.forEach((ev) => menuHamb.addEventListener(ev, handleMenuHamb));
  evs.forEach((ev) => document.body.addEventListener(ev, closeMenuHamb));
};

export default initMenuMobile;
