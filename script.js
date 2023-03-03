/* var pastSimple = document.querySelector(psimple)
var pastParticiple = document.querySelector(pparticiple)
// var infinitive = ??? возможно, нужно использовать random как в игре камень-ножницы-бумага

// submit.onclick

if ()
*/

let infinitiveDisplay = document.querySelector('.out-1');
let randomInfinitive;


function geninfinitive() {
  let infinitiveArray=['do', 'make', 'have', 'bring', 'take', 'catch', 'build', 'become', 'buy', 'dig', 'drink'];
  randomInfinitive = infinitiveArray[Math.floor(Math.random()*infinitiveArray.length)];
  infinitiveDisplay.innerHTML = randomInfinitive;
  message.innerHTML = '';
  userInput.value = '';
  }

  let userInput = document.querySelector('.psimple-input');
  let message = document.querySelector('.out-2');


  let verbs = [
    {infinitive: 'do', psimple: 'did'},
    {infinitive: 'have', psimple: 'had'},
    {infinitive: 'make', psimple: 'made'},
    {infinitive: 'bring', psimple: 'brought'},
    {infinitive: 'take', psimple: 'took'},
    {infinitive: 'catch', psimple: 'caught'},
    {infinitive: 'build', psimple: 'built'},
    {infinitive: 'become', psimple: 'became'},
    {infinitive: 'buy', psimple: 'bought'},
    {infinitive: 'dig', psimple: 'dug'},
    {infinitive: 'drink', psimple: 'drank'}
  ]

  
  function checkForms() {

    let correctAnswer = verbs.find((element) => {
      return element.infinitive == randomInfinitive
    }).psimple;
    

    if (userInput.value == correctAnswer || userInput.value == correctAnswer + ' ' || userInput.value == correctAnswer.charAt(0).toUpperCase()+correctAnswer.split('').splice(1, correctAnswer.length).join('') || userInput.value == correctAnswer.charAt(0).toUpperCase()+correctAnswer.split('').splice(1, correctAnswer.length).join('') + ' ') {
      message.innerHTML = 'Correct!'
    } else {
      
      message.innerHTML = 'Wrong!'
    }
}

// solution found here https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp

psimple.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    checkForms();
  }
});


/* 
{infinitive: 'awake', psimple: 'awoke', pparticiple: 'awoken'},
{infinitive: 'beat', psimple: 'beat', pparticiple: 'beaten'},
{infinitive: 'become', psimple: 'became', pparticiple: 'become'},
{infinitive: 'bend', psimple: 'bent', pparticiple: 'bent'},
{infinitive: 'begin', psimple: 'began', pparticiple: 'begun'},


{infinitive: 'bet', psimple: 'bet', pparticiple: 'bet'},

{infinitive: 'bid', psimple: 'bid', pparticiple: 'bid'},

{infinitive: 'bite', psimple: 'bit', pparticiple: 'bitten'},

{infinitive: 'blow', psimple: 'blew', pparticiple: 'blown'},

{infinitive: 'break', psimple: 'broke', pparticiple: 'broken'},

{infinitive: 'bring', psimple: 'brought', pparticiple: 'brought'},

{infinitive: 'awake', psimple: 'awoke', pparticiple: 'awoken'},
{infinitive: 'beat', psimple: 'beat', pparticiple: 'beaten'},
{infinitive: 'become', psimple: 'became', pparticiple: 'become'},
{infinitive: 'awake', psimple: 'awoke', pparticiple: 'awoken'},
{infinitive: 'beat', psimple: 'beat', pparticiple: 'beaten'},
{infinitive: 'become', psimple: 'became', pparticiple: 'become'},
{infinitive: 'awake', psimple: 'awoke', pparticiple: 'awoken'},
{infinitive: 'beat', psimple: 'beat', pparticiple: 'beaten'},
{infinitive: 'become', psimple: 'became', pparticiple: 'become'},