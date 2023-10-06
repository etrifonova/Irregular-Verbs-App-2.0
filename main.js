import { verbs as verbs } from "./verbs.js";

let infinitiveDisplay = document.querySelector(".out-1");
let randomInfinitive;
const buttonGen = document.querySelector(".generate");
const buttonCheck = document.querySelector(".check-button");
let userInput = document.querySelector(".psimple-input");
let userInput2 = document.querySelector(".pparticiple-input");
let message = document.querySelector(".out-2");

// Generate random infinitive
buttonGen.onclick = function () {
  randomInfinitive = verbs.map((element) => element.infinitive)[
    Math.floor(Math.random() * verbs.length)
  ];
  infinitiveDisplay.innerHTML = randomInfinitive;
  message.innerHTML = "";
  userInput.value = "";
  userInput2.value = "";
};

// Check forms entered by user
buttonCheck.onclick = function () {
  let correctAnswer = verbs.find((element) => {
    return element.infinitive == randomInfinitive;
  }).psimple;

  let correctAnswer2 = verbs.find((element) => {
    return element.infinitive == randomInfinitive;
  }).pparticiple;

  if (userInput.value.trim().toLowerCase() === correctAnswer) {
    if (userInput2.value.trim().toLowerCase() === correctAnswer2) {
      message.innerHTML = "Correct!";
    } else {
      message.innerHTML = "Wrong!";
    }
  } else {
    message.innerHTML = "Wrong!";
  }
};

// solution found here https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp

userInput2.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    function check() {
      let correctAnswer = verbs.find((element) => {
        return element.infinitive == randomInfinitive;
      }).psimple;

      let correctAnswer2 = verbs.find((element) => {
        return element.infinitive == randomInfinitive;
      }).pparticiple;

      if (userInput.value.trim().toLowerCase() === correctAnswer) {
        if (userInput2.value.trim().toLowerCase() === correctAnswer2) {
          message.innerHTML = "Correct!";
        } else {
          message.innerHTML = "Wrong!";
        }
      } else {
        message.innerHTML = "Wrong!";
      }
    }
    check();
  }
});
