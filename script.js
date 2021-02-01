let multiply = document.getElementsByClassName("multiply")[0];
let primer = document.getElementsByClassName("primer")[0];
let add = document.getElementsByClassName("add")[0];
let otvet = document.getElementsByClassName("otvet")[0];
let title = document.getElementsByClassName("title")[0];
let correctAnswer = 0;
let divide = document.getElementsByClassName("divide")[0]
let subtraction = document.getElementsByClassName("subtraction")[0]
let adition = document.getElementsByClassName("adition")[0]
let timerTitle = document.getElementsByClassName("timerTitle")[0];
let sign, score, timer, time;
let recordTitle = document.getElementsByClassName("record")[0];
let record = 0;

let scoreTitle = document.getElementsByClassName("scoreTitle")[0];
add.disabled = true;
add.style.opacity = 0.5;
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function setTimer() {
  clearInterval(timer);
  add.disabled = false;
  add.style.opacity = 1;
  scoreTitle.style.color = "#666";
  timerTitle.style.color = "#666";
  score = 0;
  scoreTitle.innerHTML = "Счет: " + score;
  time = 60;
  timerTitle.innerHTML = "Время: " + time;
  timer = setInterval(function () {
    time = time - 1;
    timerTitle.innerHTML = "Время: " + time;
    if (time == 0) {
      if (score > record) {
        record = score;
      }
      recordTitle.innerHTML = "Рекорд: " + record;
      clearInterval(timer);
      add.disabled = true;
      add.style.opacity = 0.5;
      scoreTitle.style.color = "lightgreen";
      timerTitle.style.color = "lightcoral";
    }
  }, 1000);
}

function getExample() {
  let firstNumber = getRandom(5, 20);
  let secondNumber = getRandom(1, 15);
  let example = firstNumber + sign + secondNumber;
  correctAnswer = eval(example);
  primer.innerHTML = "Пример: " + example;
}

multiply.onclick = function (event) {
  event.preventDefault();
  sign = " * ";
  setTimer();
  getExample();

}

divide.onclick = function (event) {
  event.preventDefault();
  sign = " / "
  setTimer();
  getExample();
}

subtraction.onclick = function (event) {
  event.preventDefault();
  sign = " - "
  setTimer();
  getExample();
}
adition.onclick = function (event) {
  event.preventDefault();
  sign = " + "
  setTimer();
  getExample();
}
add.onclick = function (event) {
  event.preventDefault();
  if (otvet.value == correctAnswer) {
    score = score + 1;
    scoreTitle.innerHTML = "Счет: " + score;
  }
  getExample();

}