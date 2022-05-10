const  initModal = () => {
  const btnOpen = document.querySelector(".removePresentCard");
  const btnClose = document.querySelector(".closed");
  const btnAccept = document.querySelector(".accept");
  const modalContainer = document.querySelector(".conainerModal1");

  const handleModalToggle = (ev) => {
    ev.preventDefault();
    modalContainer.classList.toggle("active");
  };

  const outSideClick = ({ target }) => {
    target.closest(".modal") ? null : modalContainer.classList.remove("active");
  };

  btnOpen.onclick = handleModalToggle;
  btnAccept.onclick = handleModalToggle;
  btnClose.onclick = handleModalToggle;
  modalContainer.onclick = outSideClick;
}

export default initModal;

