export default function initBuyModal() {
  const btnOpen = document.querySelector(".buyFinished");
  const btnClose = document.querySelector(".close");
  const modalContainer = document.querySelector(".conainerModal2");
  const cName = document.getElementById("namePresent");
  const errMsg = document.querySelector(".errMsg");

  const handleModalToggle = (ev) => {
    ev.preventDefault();
    if (!cName.checkValidity()) {
      cName.focus();
      cName.classList.add("invalid");
      errMsg.style.display = "block";
      errMsg.innerHTML = "Preencha o seu nome para enviar o presente.";
      return;
    } else {
      cName.classList.remove("invalid");
      errMsg.style.display = "none";
      modalContainer.classList.toggle("active");
    }
  };

  const outSideClick = ({ target }) => {
    target.closest(".modal") ? null : modalContainer.classList.remove("active");
  };

  btnOpen.onclick = handleModalToggle;
  btnClose.onclick = handleModalToggle;
  modalContainer.onclick = outSideClick;
}
