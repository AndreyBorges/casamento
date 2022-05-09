function makeGiftElements({ url, description, price, id }) {
  const element = document.createElement("li");
  const img = document.createElement("img");
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const span = document.createElement("span");
  const button = document.createElement("button");
  const priceFomated = String(price).split(".");

  element.setAttribute("data-id", id);
  img.setAttribute("src", url);
  h2.innerText = description;
  span.innerText = priceFomated[0];
  p.innerHTML = `R$ <span>${priceFomated[0]},</span> ${priceFomated[1]}`;
  button.innerText = "Presentear";
  element.appendChild(img);
  element.appendChild(h2);
  element.appendChild(p);
  element.appendChild(button);

  return element;
}

export default makeGiftElements;
