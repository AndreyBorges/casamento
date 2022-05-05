const initSendMessage = () => {
  const formMessage = document.querySelector("#message form");
  const btnSendMessage = document.querySelector("#message button");
  const dataForm = {
    mConvidado: "",
    email: "",
    menssagem: "",
  };
  const arrayUser = localStorage.getItem("users")
    ? [...JSON.parse(localStorage.getItem("users"))]
    : [];

  const changeForm = ({ target }) => {
    const name = target.name;
    const value = target.value;
    dataForm[name] = value;
  };

  const handleSendMessage = () => {
    arrayUser.push(dataForm);
    saveData("users", JSON.stringify(arrayUser));
  };

  const saveData = (name, value) => {
    localStorage[name] = value;
  };

  btnSendMessage.onclick = handleSendMessage;
  formMessage.onchange = changeForm;
};

export default initSendMessage;
