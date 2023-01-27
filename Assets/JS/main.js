let sec = 00;
let miliSec = 00;
const appendMiliSec = document.getElementById("miliSec");
const appendSec = document.getElementById("sec");
const buttonStart = document.getElementById("button-start");
const buttonStop = document.getElementById("button-stop");
const buttonReset = document.getElementById("button-reset");
let interval; // to store timer values

// this function will run when click on start

function startTimer() {
  miliSec++;

  if (miliSec < 9) {
    appendMiliSec.innerHTML = "0" + miliSec;
  }
  if (miliSec > 9) {
    appendMiliSec.innerHTML = miliSec;
  }
  if (miliSec > 99) {
    sec++;
    appendSec.innerHTML = "0" + sec;
    miliSec = 0;
    appendMiliSec.innerHTML = "0" + 0;
  }
  if (sec > 9) {
    appendSec.innerHTML = sec;
  }
}

buttonStart.onclick = function () {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(startTimer);
};

buttonStop.onclick = function () {
  clearInterval(interval);
};

buttonReset.onclick = function () {
  clearInterval(interval);
  miliSec = "00";
  sec = "00";
  appendSec.innerHTML = sec;
  appendMiliSec.innerHTML = miliSec;
};
