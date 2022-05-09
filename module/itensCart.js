import { helpers } from "./index.js";
import princArr from "./dado.js";

const initItensCart = () => {
  const cartItens = document.querySelectorAll(".itens li");

  const itens = document.querySelector(".itens");
  const options = document.querySelector(".options");

  const containerListaCompras = document.querySelector(
    ".containerListaCompras"
  );
  const listaCompras = document.querySelector(".listaCompras");
  const arrTot = [];
  let total = 0;
  const btnItensList = document.querySelectorAll(".btnItensList button");
  const valorTot = document.querySelector(".valorTot");
  const btnOptions = options.querySelector("button");

  const handleMoreItens = () => {
    if (arrTot.length >= 3) {
      const span = document.querySelector(".containerListaCompras > span");
      span.innerHTML = "Você pode escolher até três presentes por compra.";
      return;
    }

    containerListaCompras.style.display = "none";
    options.style.display = "flex";
    itens.style.display = "grid";
  };
  btnItensList[0].addEventListener("click", handleMoreItens);

  cartItens.forEach((giftItem) => {
    const btn = giftItem.querySelector("button");

    const changeSection = () => {
      itens.style.display = "none";
      options.style.display = "none";
      containerListaCompras.style.display = "block";
      listaCompras.style.display = "grid";
    };

    const handleCartItens = () => {
      const dataId = giftItem.getAttribute("data-id");
      const findItem = princArr.find((item) => item.id === +dataId);

      const itemAllReadyExist = arrTot.find((item) => item.id === findItem.id);
      if (itemAllReadyExist) return;
      if (listaCompras.length >= 3) return;

      const formatedItem = helpers.formatItems(findItem);
      arrTot.push(findItem);
      total = arrTot.reduce((acc, item) => acc + item.price, 0);
      valorTot.innerHTML = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });

      listaCompras.appendChild(formatedItem);
      changeSection();

      const liGifts = document.querySelectorAll(".listaCompras li");
      btnOptions.disabled = arrTot.length ? false : true;
      btnOptions.innerHTML = `Ver carrinho (${arrTot.length} presentes)`;

      btnOptions.addEventListener("click", (e) => {
        changeSection();
      });

      liGifts.forEach((item) => {
        const btn = item.querySelector("button");

        btn.addEventListener("click", () => {
          item.remove();
          const newArr = arrTot.filter(
            (arrItem) => arrItem.id !== +item.getAttribute("data-id")
          );
          arrTot.splice(0, arrTot.length, ...newArr);
          btnOptions.innerHTML = arrTot.length
            ? `Ver carrinho (${arrTot.length} presentes)`
            : `Carrinho vazio`;
          btnOptions.disabled = arrTot.length ? false : true;

          total = newArr.reduce((acc, item) => acc + item.price, 0);
          valorTot.innerHTML = total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          });
        });
      });
    };

    btn.onclick = handleCartItens;
  });
};

export default initItensCart;
