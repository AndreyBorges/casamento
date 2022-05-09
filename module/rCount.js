const initRegressiveCount = () => {
  const day = document.querySelector(".days");
  const dhour = document.querySelector(".hours");
  const dmin = document.querySelector(".minutes");
  const dsec = document.querySelector(".seconds");

  const countDown = () => {
    const now = new Date();
    const eventDate = new Date("2022-05-17T24:00:00");
    const diff = eventDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    day.innerHTML = days;
    dhour.innerHTML = String(hours).padStart(2, "0");
    dmin.innerHTML = String(minutes).padStart(2, "0");
    dsec.innerHTML = String(seconds).padStart(2, "0");
  };
  countDown();
  setInterval(countDown, 1000);
};

export default initRegressiveCount;
