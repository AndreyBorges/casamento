import {
  initPresentItens,
  initItensCart,
  initMenuMobile,
  initRegressiveCount,
  initSlowScroll,
  initSendMessage,
  initImportMessage,
  initReturnStart,
  Slide,
  initModal,
  initBuyModal,
  initModalForm,
} from "./index.js";

initPresentItens();
initItensCart();
initMenuMobile();
initRegressiveCount();
initSlowScroll();
initSendMessage();
initImportMessage();
initReturnStart();
initModal();
initBuyModal();
initModalForm();

const slide = new Slide(".slide", ".slide-wrapper");
const nextSlide = new Slide(".slideCart", ".cartWrapper");
slide.init();
slide.addArrow(".prev", ".next");
slide.addControlEvents(".custom-control");
nextSlide.init();
nextSlide.addArrow(".cPrev", ".cNext");
