import orderBy from "./orderList.js";
import makeGiftElements from "./formatData.js";
import arr from "./dado.js";

const initPresentItens = () => {
  const listItens = document.querySelector(".itens");
  const radios = document.querySelectorAll("[name='order']");
  let value = "description";

  const handleChange = (event) => {
    value = event.target.value === "preco" ? "price" : "description";

    radios.forEach((radio) => {
      radio.removeAttribute("checked");
    });

    event.target.setAttribute("checked", true);

    const ordered = orderBy(arr, value);

    listItens.innerHTML = "";

    render(ordered);
  };

  radios.forEach((radio) => {
    radio.addEventListener("change", handleChange);
  });

  const render = (arr) => {
    arr.map((item) => {
      const li = makeGiftElements(item);
      listItens.appendChild(li);
    });
  };

  render(arr);
};
export default initPresentItens;
