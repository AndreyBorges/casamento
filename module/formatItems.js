function elementItens({ url, description, price, id }) {
  const element = document.createElement("li");
  const img = document.createElement("img");
  const div = document.createElement("div");
  const p = document.createElement("p");
  const btn = document.createElement("button");
  const span = document.createElement("span");
  
  element.setAttribute("data-id", id);
  img.setAttribute("src", url);
  p.innerHTML = description;
  btn.innerHTML = "Remover";
  span.innerHTML = price.toLocaleString('pt-BR', {style: 'currency',currency: 'BRL', minimumFractionDigits: 2});

  element.appendChild(img);
  element.appendChild(div);
  div.appendChild(p);
  div.appendChild(btn);
  element.appendChild(span);

  return element;
}

export default elementItens;
