const initImportMessage = () => {
  const importMessage = () => {
    const localUsers = localStorage.getItem("users");
    const storageData = JSON.parse(localUsers ? localUsers : "[]");
    const feedback = document.querySelector(".feedback");

    storageData.forEach((e) => {
      const li = document.createElement("li");
      const h2 = document.createElement("h2");
      const p = document.createElement("p");
      feedback.appendChild(li); 
      li.appendChild(h2);
      li.appendChild(p);
      h2.innerHTML = e.mConvidado;
      p.innerHTML = e.menssagem;
    });
  };
  importMessage();
};

export default initImportMessage;
