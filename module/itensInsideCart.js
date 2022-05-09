const initItensInsideCart = () => {
  const itens = document.querySelector(".itens");
  const options = document.querySelector(".options");
  const listaCompras = document.querySelector(".listaCompras");
  const lis = listaCompras.querySelectorAll("li");
  const containerListaCompras = document.querySelector(
    ".containerListaCompras"
  );
  const liList = document.querySelectorAll(".listaCompras li");
  const dataLocal = Object.values(localStorage);
  const storageData = JSON.parse(dataLocal[1]);
  const btnItensList = document.querySelector(".btnItensList");
  const btnItens = btnItensList.querySelectorAll("button");

  storageData.forEach((e) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const div = document.createElement("div");
    const p = document.createElement("p");
    const btn = document.createElement("button");
    const span = document.createElement("span");
    img.setAttribute("src", e.img);
    p.innerHTML = e.title;
    btn.innerHTML = "Remover";
    span.innerHTML = e.price;

    li.appendChild(img);
    li.appendChild(div);
    div.appendChild(p);
    div.appendChild(btn);
    li.appendChild(span);
    listaCompras.appendChild(li);

    // const handleRemoveItem = () => {
    //   listaCompras.removeChild(li);
    //   localStorage.removeItem("itens");
    // };

    // btn.onclick = handleRemoveItem;
  });

  // const handleMoreItens = () => {
  //   containerListaCompras.style.display = "none";
  //   options.style.display = "flex";
  //   itens.style.display = "grid";
  // };

  // btnItens[0].onclick = handleMoreItens;

  // storageData.length === 0 ? containerListaCompras.classList.add('void') : containerListaCompras.classList.remove('void');
};
export default initItensInsideCart;
