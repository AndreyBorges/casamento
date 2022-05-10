const initModalForm = () => {
  const btnClose = document.querySelector(".exit"); 
  const modalContainer = document.querySelector(".conainerModal3");
  const fristModal = document.querySelector(".conainerModal2");
  const payments = document.querySelectorAll(".payment");
  const btnReturn = document.querySelector(".btnsModal button");
  console.log(btnReturn);

  const handleModalToggle = (ev) => {
    ev.preventDefault();
    modalContainer.classList.toggle("active");
    fristModal.classList.remove("active");

  };

  const handleReturnModal = () => {
    modalContainer.classList.remove("active");
    fristModal.classList.add("active");
  }

  const outSideClick = ({ target }) => {
    target.closest(".modalForm") ? null : modalContainer.classList.remove("active");
  };

  btnReturn.onclick = handleReturnModal;
  btnClose.onclick = handleModalToggle;
  modalContainer.onclick = outSideClick;
  payments.forEach((payment) => {
    payment.onclick = handleModalToggle;
  })
}

export default initModalForm;