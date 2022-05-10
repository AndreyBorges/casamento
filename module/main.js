import {
  initPresentItens,
  initItensCart,
  initMenuMobile,
  initRegressiveCount,
  initSlowScroll,
  initSendMessage,
  initImportMessage,
  initReturnStart,
  Slide
} from "./index.js";

initPresentItens();
initItensCart();
initMenuMobile();
initRegressiveCount();
initSlowScroll();
initSendMessage();
initImportMessage();
initReturnStart()

const slide = new Slide(".slide", ".slide-wrapper");
slide.init();
slide.addArrow(".prev", ".next");
slide.addControlEvents(".custom-control") 
