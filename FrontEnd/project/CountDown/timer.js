const startBtn = document.getElementById('start-btn');
const secondsInput = document.getElementById('seconds');
const timerElement = document.getElementById('timer');

let ciId;
let remainSeconds;

startBtn.addEventListener('click', () => {
  remainSeconds = parseInt(secondsInput.value);
  intervalId = setInterval(() => {
    timerElement.innerHTML = `Time left: ${remainSeconds} seconds`;
    remainSeconds--;
    if (remainSeconds < 0) {
      clearInterval(ciId);
     
    }
  }, 1000);
});