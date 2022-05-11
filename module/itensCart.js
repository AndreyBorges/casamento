import { helpers } from "./index.js";
import princArr from "./dado.js";

const initItensCart = () => {
  // * Variaveis da section de lista de presentes
  const cartItens = document.querySelectorAll(".itens li");
  const itens = document.querySelector(".itens");
  const options = document.querySelector(".options");
  const btnOptions = options.querySelector("button");

  // * Variaveis da section de compras
  const containerListaCompras = document.querySelector(
    ".containerListaCompras"
  );
  const listaCompras = document.querySelector(".listaCompras");
  const btnItensList = document.querySelectorAll(".btnItensList button");
  const valorTot = document.querySelector(".valorTot");

  // * Variaveis da section de resumo de compras
  const resume = document.getElementById("resume");
  const valorTotPresent = document.querySelector(".valorTotPresent span");
  const cardValue = document.querySelector(".cardValue");
  const allValorTot = document.querySelector(".allValorTot span");
  const returnCart = document.querySelector(".returnCart");
  const removePresentCard = document.querySelector(".removePresentCard");

  // * Variaveis da section de modal 1
  const modalContainer = document.querySelector(".conainerModal1");
  const reject = document.querySelector(".reject");

  // * Variaveis da section de modal 3
  const spanValorTot = document.querySelector(".spanValorTot");
  // * Variaveis da section carrinho vazio
  const btnReturnItens = document.querySelector(".nItens button");

  // * Variaveis para retorno de valores
  const arrTot = [];
  let total = 0;

  const handleMoreItens = () => {
    if (arrTot.length >= 3) {
      const span = document.querySelector(".containerListaCompras > span");
      span.style.display = "block";
      span.innerHTML = "Você pode escolher até três presentes por compra.";
      return;
    } else {
      const span = document.querySelector(".containerListaCompras > span");
      span.style.display = "none";
    }

    containerListaCompras.style.display = "none";
    options.style.display = "flex";
    itens.style.display = "grid";
  };

  const handleResumeItens = () => {
    containerListaCompras.style.display = "none";
    resume.style.display = "grid";
    valorTotPresent.innerHTML = `R$ ${total}`;
    const tot = total + 14.9;
    allValorTot.innerHTML = `R$ ${tot.toFixed(2)}`;
    spanValorTot.innerHTML = `R$ ${total}`;
    console.log(tot)
  };

  const handleResumeNoCart = () => {
    containerListaCompras.style.display = "none";
    resume.style.display = "grid";
    cardValue.style.display = "none";
    valorTotPresent.innerHTML = `R$ ${total}`;
    allValorTot.innerHTML = `R$ ${total}`;
    modalContainer.classList.toggle("active");
    removePresentCard.style.display = "none";
  };

  const handleReturnCart = () => {
    containerListaCompras.style.display = "flex";
    resume.style.display = "none";
  };

  cartItens.forEach((giftItem) => {
    const btn = giftItem.querySelector("button");

    const changeSection = () => {
      itens.style.display = "none";
      options.style.display = "none";
      containerListaCompras.style.display = "flex";
      listaCompras.style.display = "grid";
    };

    const handleCartItens = () => {
      const dataId = giftItem.getAttribute("data-id");
      const findItem = princArr.find((item) => item.id === +dataId);

      const itemAllReadyExist = arrTot.find((item) => item.id === findItem.id);
      if (itemAllReadyExist) return;

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

      btnOptions.addEventListener("click", () => {
        changeSection();
      });

      liGifts.forEach((item) => {
        const btn = item.querySelector("button");

        btn.addEventListener("click", () => {
          item.remove();
          const newArr = arrTot.filter(
            (arrItem) => arrItem.id !== +item.getAttribute("data-id")
          );
          newArr.length === 0
            ? containerListaCompras.classList.add("void")
            : null;

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
    const handleReturnItens = () => {
      containerListaCompras.style.display = "none";
      options.style.display = "flex";
      itens.style.display = "grid";
      containerListaCompras.classList.remove("void");
    };

    btnReturnItens.onclick = handleReturnItens;
    btn.onclick = handleCartItens;
  });
  returnCart.onclick = handleReturnCart;
  btnItensList[0].addEventListener("click", handleMoreItens);
  btnItensList[1].addEventListener("click", handleResumeItens);
  reject.onclick = handleResumeNoCart;
};

export default initItensCart;
