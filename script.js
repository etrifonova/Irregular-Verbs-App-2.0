
let infinitiveDisplay = document.querySelector('.out-1');
let randomInfinitive;


function geninfinitive() {
  let infinitiveArray=["awake", "beat", "become", "begin", "bend", "bet", "bid", "bite", "blow", "break", "bring", "broadcast", "build", "burn", "buy", "catch", "choose", "come", "cost", "cut", "dig", "do", "draw", "dream", "drive", "drink", "eat", "fall", "feel", "fight", "find", "fly", "forget", "forgive", "freeze", "get", "give", "go", "grow", "hang", "have", "hear", "hide", "hit", "hold", "hurt", "keep", "know", "lay", "lead", "learn", "leave", "lend", "let", "lie", "lose", "make", "mean", "meet", "pay", "put", "read", "ride", "ring", "rise", "run", "say", "see", "sell", "send", "show", "shut", "sing", "sink", "sit", "sleep", "speak", "spend", "stand", "stink", "swim", "take", "teach", "tear", "tell", "think", "throw", "understand", "wake", "wear", "win", "write"];
  randomInfinitive = infinitiveArray[Math.floor(Math.random()*infinitiveArray.length)];
  infinitiveDisplay.innerHTML = randomInfinitive;
  message.innerHTML = '';
  userInput.value = '';
  userInput2.value = '';
  }

  let userInput = document.querySelector('.psimple-input');
  let userInput2 = document.querySelector('.pparticiple-input');
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
    {infinitive: 'come', psimple: 'came', pparticiple: 'come'},
    {infinitive: 'cost', psimple: 'cost', pparticiple: 'cost'},
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
    {infinitive: 'go', psimple: 'went', pparticiple: 'gone'},
    {infinitive: 'grow', psimple: 'grew', pparticiple: 'grown'},
    {infinitive: 'hang', psimple: 'hung', pparticiple: 'hung'},
    {infinitive: 'have', psimple: 'had', pparticiple: 'had'},
    {infinitive: 'hear', psimple: 'heard', pparticiple: 'heard'},
    {infinitive: 'hide', psimple: 'hid', pparticiple: 'hidden'},
    {infinitive: 'hit', psimple: 'hit', pparticiple: 'hit'},
    {infinitive: 'hold', psimple: 'held', pparticiple: 'held'},
    {infinitive: 'hurt', psimple: 'hurt', pparticiple: 'hurt'},
    {infinitive: 'keep', psimple: 'kept', pparticiple: 'kept'},
    {infinitive: 'know', psimple: 'knew', pparticiple: 'known'},
    {infinitive: 'lay', psimple: 'laid', pparticiple: 'laid'},
    {infinitive: 'lead', psimple: 'led', pparticiple: 'led'},
    {infinitive: 'learn', psimple: 'learnt', pparticiple: 'learnt'},
    {infinitive: 'leave', psimple: 'left', pparticiple: 'left'},
    {infinitive: 'lend', psimple: 'lent', pparticiple: 'lent'},
    {infinitive: 'let', psimple: 'let', pparticiple: 'let'},
    {infinitive: 'lie', psimple: 'lay', pparticiple: 'lain'},
    {infinitive: 'lose', psimple: 'lost', pparticiple: 'lost'},
    {infinitive: 'make', psimple: 'made', pparticiple: 'made'},
    {infinitive: 'mean', psimple: 'meant', pparticiple: 'meant'},
    {infinitive: 'meet', psimple: 'met', pparticiple: 'met'},
    {infinitive: 'pay', psimple: 'paid', pparticiple: 'paid'},
    {infinitive: 'put', psimple: 'put', pparticiple: 'put'},
    {infinitive: 'read', psimple: 'read', pparticiple: 'read'},
    {infinitive: 'ride', psimple: 'rode', pparticiple: 'ridden'},
    {infinitive: 'ring', psimple: 'rang', pparticiple: 'rung'},
    {infinitive: 'rise', psimple: 'rose', pparticiple: 'risen'},
    {infinitive: 'run', psimple: 'ran', pparticiple: 'run'},
    {infinitive: 'say', psimple: 'said', pparticiple: 'said'},
    {infinitive: 'see', psimple: 'saw', pparticiple: 'seen'},
    {infinitive: 'sell', psimple: 'sold', pparticiple: 'sold'},
    {infinitive: 'send', psimple: 'sent', pparticiple: 'sent'},
    {infinitive: 'show', psimple: 'showed', pparticiple: 'shown'},
    {infinitive: 'shut', psimple: 'shut', pparticiple: 'shut'},
    {infinitive: 'sing', psimple: 'sang', pparticiple: 'sung'},
    {infinitive: 'sink', psimple: 'sank', pparticiple: 'sunk'},
    {infinitive: 'sit', psimple: 'sat', pparticiple: 'sat'},
    {infinitive: 'sleep', psimple: 'slept', pparticiple: 'slept'},
    {infinitive: 'speak', psimple: 'spoke', pparticiple: 'spoken'},
    {infinitive: 'spend', psimple: 'spent', pparticiple: 'spent'},
    {infinitive: 'stand', psimple: 'stood', pparticiple: 'stood'},
    {infinitive: 'stink', psimple: 'stank', pparticiple: 'stunk'},
    {infinitive: 'swim', psimple: 'swam', pparticiple: 'swum'},
    {infinitive: 'take', psimple: 'took', pparticiple: 'taken'},
    {infinitive: 'teach', psimple: 'taught', pparticiple: 'taught'},
    {infinitive: 'tear', psimple: 'tore', pparticiple: 'torn'},
    {infinitive: 'tell', psimple: 'told', pparticiple: 'told'},
    {infinitive: 'think', psimple: 'thought', pparticiple: 'thought'},
    {infinitive: 'throw', psimple: 'threw', pparticiple: 'thrown'},
    {infinitive: 'understand', psimple: 'understood', pparticiple: 'understood'},
    {infinitive: 'wake', psimple: 'woke', pparticiple: 'woken'},
    {infinitive: 'wear', psimple: 'wore', pparticiple: 'worn'},
    {infinitive: 'win', psimple: 'won', pparticiple: 'won'},
    {infinitive: 'write', psimple: 'wrote', pparticiple: 'written'}
  ]

  
  function checkForms() {

    let correctAnswer = verbs.find((element) => {
      return element.infinitive == randomInfinitive
    }).psimple;

    let correctAnswer2 = verbs.find((element) => {
      return element.infinitive == randomInfinitive
    }).pparticiple;
    
// || userInput.value == correctAnswer + ' ' || userInput.value == correctAnswer.charAt(0).toUpperCase()+correctAnswer.split('').splice(1, correctAnswer.length).join('') || userInput.value == correctAnswer.charAt(0).toUpperCase()+correctAnswer.split('').splice(1, correctAnswer.length).join('') + ' '

// ПОДУМАТЬ, КАК ПРОПИСАТЬ ДОП УСЛОВИЯ ВЫШЕ. ВАРИАНТЫ: РЕГУЛЯРКИ ИЛИ ТЕРНАРНЫЙ ОПЕРАТОР

    if (userInput.value == correctAnswer && userInput2.value == correctAnswer2) {
      message.innerHTML = 'Correct!';
    } else {
        message.innerHTML = 'Wrong!'
    }
}

// solution found here https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp

let pparticipleInput = document.getElementById("pparticiple");

pparticipleInput.addEventListener("keypress", function(event) {
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


part II:
{infinitive: 'go', psimple: 'went', pparticiple: 'gone'},
{infinitive: 'grow', psimple: 'grew', pparticiple: 'grown'},
{infinitive: 'hang', psimple: 'hung', pparticiple: 'hung'},
{infinitive: 'have', psimple: 'had', pparticiple: 'had'},
{infinitive: 'hear', psimple: 'heard', pparticiple: 'heard'},
{infinitive: 'hide', psimple: 'hid', pparticiple: 'hidden'},
{infinitive: 'hit', psimple: 'hit', pparticiple: 'hit'},
{infinitive: 'hold', psimple: 'held', pparticiple: 'held'},
{infinitive: 'hurt', psimple: 'hurt', pparticiple: 'hurt'},
{infinitive: 'keep', psimple: 'kept', pparticiple: 'kept'},
{infinitive: 'know', psimple: 'knew', pparticiple: 'known'},{infinitive: 'lay', psimple: 'laid', pparticiple: 'laid'},
{infinitive: 'lead', psimple: 'led', pparticiple: 'led'},
{infinitive: 'learn', psimple: 'learnt', pparticiple: 'learnt'},
{infinitive: 'leave', psimple: 'left', pparticiple: 'left'},
{infinitive: 'lend', psimple: 'lent', pparticiple: 'lent'},
{infinitive: 'let', psimple: 'let', pparticiple: 'let'},
{infinitive: 'lie', psimple: 'lay', pparticiple: 'lain'},
{infinitive: 'lose', psimple: 'lost', pparticiple: 'lost'},
{infinitive: 'make', psimple: 'made', pparticiple: 'made'},
{infinitive: 'mean', psimple: 'meant', pparticiple: 'meant'},
{infinitive: 'meet', psimple: 'met', pparticiple: 'met'},
{infinitive: 'pay', psimple: 'paid', pparticiple: 'paid'},{infinitive: 'put', psimple: 'put', pparticiple: 'put'},
{infinitive: 'read', psimple: 'read', pparticiple: 'read'},
{infinitive: 'ride', psimple: 'rode', pparticiple: 'ridden'},
{infinitive: 'ring', psimple: 'rang', pparticiple: 'rung'},
{infinitive: 'rise', psimple: 'rose', pparticiple: 'risen'},
{infinitive: 'run', psimple: 'run', pparticiple: 'run'},
{infinitive: 'say', psimple: 'said', pparticiple: 'said'},
{infinitive: 'see', psimple: 'saw', pparticiple: 'seen'},
{infinitive: 'sell', psimple: 'sold', pparticiple: 'sold'},
{infinitive: 'send', psimple: 'sent', pparticiple: 'sent'},
{infinitive: 'show', psimple: 'showed', pparticiple: 'shown'},
{infinitive: 'shut', psimple: 'shut', pparticiple: 'shut'},
{infinitive: 'sing', psimple: 'sang', pparticiple: 'sung'},
{infinitive: 'sink', psimple: 'sank', pparticiple: 'sunk'},
{infinitive: 'sit', psimple: 'sat', pparticiple: 'sat'},
{infinitive: 'sleep', psimple: 'slept', pparticiple: 'slept'},
{infinitive: 'speak', psimple: 'spoke', pparticiple: 'spoken'},
{infinitive: 'spend', psimple: 'spent', pparticiple: 'spent'},{infinitive: 'stand', psimple: 'stood', pparticiple: 'stood'},
{infinitive: 'stink', psimple: 'stank', pparticiple: 'stunk'},
{infinitive: 'swim', psimple: 'swam', pparticiple: 'swum'},
{infinitive: 'take', psimple: 'took', pparticiple: 'taken'},{infinitive: 'teach', psimple: 'taught', pparticiple: 'taught'},
{infinitive: 'tear', psimple: 'tore', pparticiple: 'torn'},
{infinitive: 'tell', psimple: 'told', pparticiple: 'told'},
{infinitive: 'think', psimple: 'thought', pparticiple: 'thought'},
{infinitive: 'throw', psimple: 'threw', pparticiple: 'thrown'},
{infinitive: 'understand', psimple: 'understood', pparticiple: 'understood'},
{infinitive: 'wake', psimple: 'woke', pparticiple: 'woken'},
{infinitive: 'wear', psimple: 'wore', pparticiple: 'worn'},
{infinitive: 'win', psimple: 'won', pparticiple: 'won'},
{infinitive: 'write', psimple: 'wrote', pparticiple: 'written'}

*/