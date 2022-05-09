const initPutCartItens = () => {
  const cartItens = document.querySelectorAll(".itens li");
  const itens = document.querySelector(".itens");
  const options = document.querySelector(".options");
  const containerListaCompras = document.querySelector(
    ".containerListaCompras"
  );
  const listaCompras = document.querySelector(".listaCompras");

  cartItens.forEach((i) => {
    const img = i.querySelector("img");
    const title = i.querySelector("h2");
    const price = i.querySelector("p");
    const btn = i.querySelector("button");
    const allData = {
      img: "",
      title: "",
      price: "",
    };
    const arrayUser = localStorage.getItem("itens")
      ? [...JSON.parse(localStorage.getItem("itens"))]
      : [];

    const handleCartItens = () => {
      allData.img = img.getAttribute("src");
      allData.title = title.innerHTML;
      allData.price = price.innerHTML;
      arrayUser.push(allData);
      saveData("itens", JSON.stringify(arrayUser));
      itens.style.display = "none";
      options.style.display = "none";
      containerListaCompras.style.display = "block";
      listaCompras.style.display = "grid";
    };

    const saveData = (name, value) => {
      localStorage[name] = value;
    };

    btn.onclick = handleCartItens;
  });
};

export default initPutCartItens;
