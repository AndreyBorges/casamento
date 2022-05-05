const initRegressiveCount = () => {
  // const days = document.querySelector(".days")
  const dhour = document.querySelector(".hours")
  const dmin = document.querySelector(".minutes")
  const dsec = document.querySelector(".seconds")

  // const date = new Date("2022-05-17T11:35:00")
  // const hour = new Date().getHours()
  // const minute = new Date().getMinutes()
  // const second = new Date().getSeconds()
  // dhour.innerHTML = hour
  // dmin.innerHTML = minute
  // dsec.innerHTML = second
  // console.log(date)
  const startTime = (duration,display) =>{
    let timer = duration, minutes, seconds;
    setInterval(() =>{
      hours = parseInt(timer / 3600, 10)
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = `${hours}:${minutes}:${seconds}`;

      if (--timer < 0) {
        timer = duration;
      }
    },1000)
  }
};

export default initRegressiveCount;
