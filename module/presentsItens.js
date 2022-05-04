const initPresentItens = () => {
  const listItens = document.querySelector(".itens");
  function makeGiftElements({ url, description, price }) {
    const element = document.createElement("li");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const span = document.createElement("span");
    const button = document.createElement("button");
    const priceFomated = String(price).split(".");

    img.setAttribute("src", url);
    h2.innerText = description;
    span.innerText = priceFomated[0];
    p.innerHTML = `R$ <span>${priceFomated[0]},</span> ${priceFomated[1]}`;
    button.innerText = 'Presentear';
    element.appendChild(img);
    element.appendChild(h2);
    element.appendChild(p);
    element.appendChild(button);

    return element;
  }

  const arr = [
    {
      url: "https://cdn-assets-legacy.casar.com/thumb/240x240x1/dados/sitenoivos/wed419795/presentes/DQU4d_1624814964.png",
      description: "Air Fryer",
      price: 325.5,
    },
    {
      url: "https://cdn-assets-legacy.casar.com/thumb/240x240x1/dados/sitenoivos/wed419795/presentes/4GCVJ_1624829665.jpeg",
      description: "Ajuda no primeiro mercado do casal",
      price: 520.24,
    },
    {
      url: "https://cdn-assets-legacy.casar.com/thumb/240x240x1/dados/sitenoivos/wed419795/presentes/8vXKT_1628522837.jpg",
      description: "Alexa Echo dot com relógio",
      price: 494.23,
    },
    {
      url: "https://cdn-assets-legacy.casar.com/thumb/240x240x1/dados/sitenoivos/wed419795/presentes/uB0JK_1624813476.png",
      description: "Aparador Buffet",
      price: 416.19,
    },
    {
      url: "https://cdn-assets-legacy.casar.com/thumb/240x240x1/dados/sitenoivos/wed419795/presentes/00h3R_1624815186.jpg",
      description: "Aparelho de fondue",
      price: 156.07,
    },
    {
      url: "https://cdn-assets-legacy.casar.com/thumb/240x240x1/dados/sitenoivos/wed419795/presentes/zHB22_1624816085.jpg",
      description: "Aparelho de jantar 42 peças",
      price: 624.28,
    },
    {
      url: "https://cdn-assets-legacy.casar.com/thumb/240x240x1/dados/sitenoivos/wed419795/presentes/xGJ1E_1624818951.png",
      description: "Aspirador de pó",
      price: 176.88,
    },
    {
      url: "https://cdn-assets-legacy.casar.com/thumb/240x240x1/dados/sitenoivos/wed419795/presentes/f2inR_1628465036.jpg",
      description: "Batedeira",
      price: 104.98,
    },
    {
      url: "https://cdn-assets-legacy.casar.com/thumb/240x240x1/dados/sitenoivos/wed419795/presentes/OR3gb_1624826539.jpeg",
      description: "Boleira bambu",
      price: 135.21,
    },
    {
      url: "https://cdn-assets-legacy.casar.com/thumb/240x240x1/dados/sitenoivos/wed419795/presentes/mn3Jl_1624821562.jpeg",
      description: "Cabeceira de cama queen",
      price: 312.14,
    },
    {
      url: "https://cdn-assets-legacy.casar.com/thumb/240x240x1/dados/sitenoivos/wed419795/presentes/FLR22_1629208641.jpg",
      description: "Cafeteira",
      price: 135.16,
    },
    {
      url: "https://cdn-assets-legacy.casar.com/thumb/240x240x1/dados/sitenoivos/wed419795/presentes/Hnd84_1624813566.png",
      description: "Cafeteira Nespresso",
      price: 415.15,
    },
    {
      url: "https://cdn-assets-legacy.casar.com/thumb/240x240x1/dados/sitenoivos/wed419795/presentes/Acob2_1624910446.jpg",
      description: "Caixa organizadora 3 peças",
      price: 62.32,
    },
    {
      url: "https://cdn-assets-legacy.casar.com/thumb/240x240x1/dados/sitenoivos/wed419795/presentes/PP6XS_1624821262.png",
      description: "Cama Queen",
      price: 3641.66,
    },
    {
      url: "https://cdn-assets-legacy.casar.com/thumb/240x240x1/dados/sitenoivos/wed419795/presentes/v0njp_1624913260.jpg",
      description: "Cesta de pães",
      price: 31.21,
    },
    {
      url: "https://cdn-assets-legacy.casar.com/thumb/240x240x1/dados/sitenoivos/wed419795/presentes/E6bPE_1624830495.png",
      description: "Cesto de Roupa Suja",
      price: 165.44,
    },
    {
      url: "https://cdn-assets-legacy.casar.com/thumb/240x240x1/dados/sitenoivos/wed419795/presentes/eyz4k_1624818523.png",
      description: "Churrasqueira elétrica",
      price: 218.51,
    },
    {
      url: "https://cdn-assets-legacy.casar.com/thumb/240x240x1/dados/sitenoivos/wed419795/presentes/MA1SP_1624911887.jpg",
      description: "Colher Medidora 4 Peças Inox",
      price: 31.21,
    },
    {
      url: "https://cdn-assets-legacy.casar.com/thumb/240x240x1/dados/sitenoivos/wed419795/presentes/7K7L8_1624818076.jpeg",
      description: "Conjunto da tábuas",
      price: 59.21,
    },
    {
      url: "https://cdn-assets-legacy.casar.com/thumb/240x240x1/dados/sitenoivos/wed419795/presentes/W0dxg_1624825805.jpeg",
      description: "Conjunto de assadeiras",
      price: 144.63,
    },
    {
      url: "https://cdn-assets-legacy.casar.com/thumb/240x240x1/dados/sitenoivos/wed419795/presentes/cnmq2_1624912931.jpg",
      description: "Conjunto de assadeiras",
      price: 46.81,
    },
    {
      url: "https://cdn-assets-legacy.casar.com/thumb/240x240x1/dados/sitenoivos/wed419795/presentes/i5DiA_1624824433.png",
      description: "Conjunto de assadeiras",
      price: 176.76,
    },
    {
      url: "https://cdn-assets-legacy.casar.com/thumb/240x240x1/dados/sitenoivos/wed419795/presentes/Bj1y3_1624911231.jpg",
      description: "Conjunto de assadeiras inox",
      price: 52.01,
    },
    {
      url: "https://cdn-assets-legacy.casar.com/thumb/240x240x1/dados/sitenoivos/wed419795/presentes/Ov3OE_1624817631.jpeg",
      description: "Conjunto de bowls",
      price: 93.63,
    }

  ];

  arr.forEach((item) => {
    const li = makeGiftElements(item);
    listItens.appendChild(li);
    
  });
};

export default initPresentItens;
