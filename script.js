/* var pastSimple = document.querySelector(psimple)
var pastParticiple = document.querySelector(pparticiple)
// var infinitive = ??? возможно, нужно использовать random как в игре камень-ножницы-бумага

// submit.onclick

if ()
*/

let infinitiveDisplay = document.querySelector('.out-1');
let randomInfinitive;


function geninfinitive() {
  let infinitiveArray=["awake", "beat", "become", "begin", "bend", "bet", "bid", "bite", "blow", "break", "bring", "broadcast", "build", "burn", "buy", "catch", "choose", "come", "cost", "cut", "dig", "do", "draw", "dream", "drive", "drink", "eat", "fall", "feel", "fight", "find", "fly", "forget", "forgive", "freeze", "get", "give"];
  randomInfinitive = infinitiveArray[Math.floor(Math.random()*infinitiveArray.length)];
  infinitiveDisplay.innerHTML = randomInfinitive;
  message.innerHTML = '';
  userInput.value = '';
  }

  let userInput = document.querySelector('.psimple-input');
  let message = document.querySelector('.out-2');


  let verbs = [
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
    {infinitive: 'broadcast', psimple: 'broadcast', pparticiple: 'broadcast'},
    {infinitive: 'build', psimple: 'built', pparticiple: 'built'},
    {infinitive: 'burn', psimple: 'burnt', pparticiple: 'burnt'},
    {infinitive: 'catch', psimple: 'caught', pparticiple: 'caught'},
    {infinitive: 'choose', psimple: 'chose', pparticiple: 'chosen'},
    {infinitive: 'come', psimple: 'came', pparticiple: 'come'},{infinitive: 'cost', psimple: 'cost', pparticiple: 'cost'},
    {infinitive: 'cut', psimple: 'cut', pparticiple: 'cut'},
    {infinitive: 'dig', psimple: 'dug', pparticiple: 'dug'},
    {infinitive: 'do', psimple: 'did', pparticiple: 'done'},
    {infinitive: 'draw', psimple: 'drew', pparticiple: 'drawn'},
    {infinitive: 'dream', psimple: 'dreamt', pparticiple: 'dreamt'},
    {infinitive: 'drive', psimple: 'drove', pparticiple: 'driven'},
    {infinitive: 'eat', psimple: 'ate', pparticiple: 'eaten'},
    {infinitive: 'fall', psimple: 'fell', pparticiple: 'fallen'},
    {infinitive: 'feel', psimple: 'felt', pparticiple: 'felt'},
    {infinitive: 'fight', psimple: 'fought', pparticiple: 'fought'},
    {infinitive: 'find', psimple: 'found', pparticiple: 'found'},
    {infinitive: 'fly', psimple: 'flew', pparticiple: 'flown'},
    {infinitive: 'forget', psimple: 'forgot', pparticiple: 'forgotten'},
    {infinitive: 'forgive', psimple: 'forgave', pparticiple: 'forgiven'},
    {infinitive: 'freeze', psimple: 'froze', pparticiple: 'frozen'},
    {infinitive: 'get', psimple: 'got', pparticiple: 'got'},
    {infinitive: 'give', psimple: 'gave', pparticiple: 'given'}
    
  ]

  
  function checkForms() {

    let correctAnswer = verbs.find((element) => {
      return element.infinitive == randomInfinitive
    }).psimple;
    

    if (userInput.value == correctAnswer || userInput.value == correctAnswer + ' ' || userInput.value == correctAnswer.charAt(0).toUpperCase()+correctAnswer.split('').splice(1, correctAnswer.length).join('') || userInput.value == correctAnswer.charAt(0).toUpperCase()+correctAnswer.split('').splice(1, correctAnswer.length).join('') + ' ') {
      message.innerHTML = 'Correct!';
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
{infinitive: 'broadcast', psimple: 'broadcast', pparticiple: 'broadcast'},
{infinitive: 'build', psimple: 'built', pparticiple: 'built'},
{infinitive: 'burn', psimple: 'burnt', pparticiple: 'burnt'},
{infinitive: 'catch', psimple: 'caught', pparticiple: 'caught'},
{infinitive: 'choose', psimple: 'chose', pparticiple: 'chosen'},
{infinitive: 'come', psimple: 'came', pparticiple: 'come'},{infinitive: 'cost', psimple: 'cost', pparticiple: 'cost'},
{infinitive: 'cut', psimple: 'cut', pparticiple: 'cut'},
{infinitive: 'dig', psimple: 'dug', pparticiple: 'dug'},
{infinitive: 'do', psimple: 'did', pparticiple: 'done'},
{infinitive: 'draw', psimple: 'drew', pparticiple: 'drawn'},
{infinitive: 'dream', psimple: 'dreamt', pparticiple: 'dreamt'},
{infinitive: 'drive', psimple: 'drove', pparticiple: 'driven'},
{infinitive: 'eat', psimple: 'ate', pparticiple: 'eaten'},
{infinitive: 'fall', psimple: 'fell', pparticiple: 'fallen'},
{infinitive: 'feel', psimple: 'felt', pparticiple: 'felt'},
{infinitive: 'fight', psimple: 'fought', pparticiple: 'fought'},
{infinitive: 'find', psimple: 'found', pparticiple: 'found'},
{infinitive: 'fly', psimple: 'flew', pparticiple: 'flown'},
{infinitive: 'forget', psimple: 'forgot', pparticiple: 'forgotten'},
{infinitive: 'forgive', psimple: 'forgave', pparticiple: 'forgiven'},
{infinitive: 'freeze', psimple: 'froze', pparticiple: 'frozen'},
{infinitive: 'get', psimple: 'got', pparticiple: 'got'},
{infinitive: 'give', psimple: 'gave', pparticiple: 'given'},




*/