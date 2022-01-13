var quiz = {
  q1: ["Does San Francisco have a problem with homeless people?", "true"],
  q2: ["Is rent crazy expensive in San Francisco", "true",],
  q3: ["Does BART in SF resemble hell if lights were out?", "true"],
  q4: ["Would I move to any other city in the USA?", "false"],
  q5: ["Does San Francisco a whimsical architecture?", "true"],
  q6: ["Is the climate one of the most preferable in the world?", "true"],
  q7: ["Are there good job opportunities in San Francisco?", "true"],
  q8: ["Are there good schools in San Francisco?", "true"],
  q9: ["Is there diverse cuisine in SF?", "true"],
  q10: ["Is San Francisco surrounded by incredible nature?", "true"]
};


let questions = document.querySelector(".questions")
let h1 = document.querySelector("h1");
let nextQues = document.querySelector(".next");
let reset = document.querySelector(".reset");
let btns = document.querySelector(".btns")
let trueBtnCount = document.querySelector("#countTrue");
let falseBtnCount = document.querySelector("#countFalse");
let questionNumber = document.querySelector(".questionNumber")

let arr = Object.values(quiz);

let i = 0;
let trueCount = 0;
let falseCount = 0;


nextQues.addEventListener("click", () => {
  nextQues.innerHTML = "Next Question";
  h1.innerHTML = arr[i][0];
  questions.classList.add("show");

  let trueBtn = document.createElement("button");
  trueBtn.classList.add("trueBtn");
  trueBtn.innerHTML = "true";

  let falseBtn = document.createElement("button");
  falseBtn.classList.add("falseBtn");
  falseBtn.innerHTML = "false";
  btns.innerHTML = '';
  btns.append(trueBtn, falseBtn)

  trueBtn.addEventListener("click", () => {
    trueBtn.disabled = true;
    trueBtn.classList.add("clicked");

    falseBtn.disabled = true;
    if (arr[i - 1][1] === trueBtn.innerHTML.toLowerCase()) {
      trueCount++;
      trueBtnCount.innerHTML = trueCount;
    } else {
      falseCount++;
      falseBtnCount.innerHTML = falseCount;
    }
  });

  falseBtn.addEventListener("click", () => {
    falseBtn.classList.add("clicked")
    falseBtn.disabled = true
    trueBtn.disabled = true;
    if (arr[i - 1][1] === falseBtn.innerHTML.toLowerCase()) {
      trueCount++;
      trueBtnCount.innerHTML = trueCount;

    } else {
      falseCount++;
      falseBtnCount.innerHTML = falseCount;
    }
  })

  trueBtn.classList.remove("clicked");
  falseBtn.classList.remove("clicked");
  trueBtn.disabled = false;
  falseBtn.disabled = false;

  i++;

  if (i == 10) {
    nextQues.style.display = "none"
    reset.style.display = "block"
    reset.addEventListener("click", () => {
      resetFunc();
    })
  }
  questionNumber.innerHTML = i;
});

function resetFunc() {
  reset.style.display = "none";
  h1.innerHTML = "Quiz App";
  questions.classList.remove("show");
  nextQues.style.display = "block";
  nextQues.innerHTML = "Start";
  i = 0;
  trueCount = 0;
  falseCount = 0;
  falseBtnCount.innerHTML = trueCount;
  trueBtnCount.innerHTML = trueCount;
}