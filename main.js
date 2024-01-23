import { BASIC_VERBS as BASIC_VERBS } from "./verbs.js";
import { INTERMEDIATE_VERBS as INTERMEDIATE_VERBS } from "./verbs.js";

let verbsLeft = document.querySelector('.select__verbs-left');
let verbs;
let infinitiveDisplay = document.querySelector(".out-1");
let randomElement;
let randomInfinitive;
const buttonGen = document.querySelector(".generate");
const buttonCheck = document.querySelector(".check-button");
const select = document.querySelector(".select");
const buttonShow = document.querySelector(".show-button");
let userInput = document.querySelector(".psimple-input");
let userInput2 = document.querySelector(".pparticiple-input");
let message = document.querySelector(".out-2");
let showBlock = document.querySelector(".out-3");

select.onchange = function () {
  let x = formid.ddlselect[formid.ddlselect.selectedIndex].value;
  document.querySelector('.select__category').innerHTML=("category: " + formid.ddlselect[formid.ddlselect.selectedIndex].text);
  switch(x) {
    case 'part1':
      verbs = BASIC_VERBS;
      verbsLeft.innerHTML = ("verbs left: " + verbs.length);
      break;
  
    case 'part2':
      verbs = INTERMEDIATE_VERBS;
      verbsLeft.innerHTML = ("verbs left: " + verbs.length);
      break;
  
    default:
      verbs = BASIC_VERBS;
  }
}
// Generate random infinitive
buttonGen.onclick = function () {
  randomElement = verbs.map((element) => element)[
    Math.floor(Math.random() * verbs.length)
  ];
  randomInfinitive = randomElement.infinitive;
  infinitiveDisplay.innerHTML = randomInfinitive;
  message.innerHTML = "";
  userInput.value = "";
  userInput2.value = "";
    // Show Answer Function
  buttonShow.onclick = function() {
    console.log(randomElement.psimple + ' ' + randomElement.pparticiple);
    showBlock.innerHTML = randomElement.psimple + ' ' + randomElement.pparticiple;
  }
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
      verbs.splice(verbs.indexOf(randomElement), 1);
      verbsLeft.innerHTML = ("verbs left: " + verbs.length);
      setTimeout(() => {
        randomElement = verbs.map((element) => element)[
          Math.floor(Math.random() * verbs.length)
        ];
        randomInfinitive = randomElement.infinitive;
        infinitiveDisplay.innerHTML = randomInfinitive;
        message.innerHTML = "";
        userInput.value = "";
        userInput2.value = "";
    }, 1500)
      // genQuestion();
    } else {
      message.innerHTML = "Wrong!";
    }
  } else {
    message.innerHTML = "Wrong!";
  }
};

// solution found here https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp

/* userInput2.addEventListener("keypress", function (event) {
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
*/
