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

  console.log(randomInfinitive)
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


  console.log(verbs[0].infinitive);

  
  // ПОРАБОТАТЬ С МЕТОДОМ FIND

  function checkForms() {

    let correctAnswer = verbs.find((element) => {
      return element.infinitive == randomInfinitive
    }).psimple;
    

    if (userInput.value == correctAnswer || userInput.value == correctAnswer + ' ' || userInput.value == correctAnswer.charAt(0).toUpperCase()+correctAnswer.split('').splice(1, correctAnswer.length).join('') || userInput.value == correctAnswer.charAt(0).toUpperCase()+correctAnswer.split('').splice(1, correctAnswer.length).join('') + ' ') {
      message.innerHTML = 'Correct!'
    } else {
      
      message.innerHTML = 'Wrong!'
    }

    console.log(correctAnswer);
}


// return numConverter.find((number) => {
//   return number.arabicNum === num; 
// }).romanNum;

// let verbsList = {
//   do: ['did', 'done'],
//   have: ['had', 'had'],
//   make: ['made', 'made'],
// }

// console.log(
//   Object.entries(verbsList).map((filterItem) => filterItem[0] + " - " + filterItem[1]).join(', ')
// );
  




  // JS смотрит на предыдущий infinitiveDisplay, а не новый после нажатия generate infinitive

  /* 
  const listOfInf = {
    "do": "did",
    "have": "had",
    "make": "made"
  }

  if (infinitiveDisplay.value = listOfInf[prop]) {
    if (psimple == listOfInf[prop][value]) {
        document.querySelector('.out-2').innerHTML = 'Correct!';
       } else {
        document.querySelector('.out-2').innerHTML = 'False!';
      }
    console.log(listOfInf[prop])
  } else {
    console.log('no match');
  }
}

  const listOfInf = {
    "do": "did",
    "have": "had",
    "make": "made"
  }


*/


 


 







/* function generateInfinitive() {

 if (infinitiveDisplay.value = 'do') {
    if (psimple == 'did') {
      document.querySelector('.out-2').innerHTML = 'Correct!'
    } else {
      document.querySelector('.out-2').innerHTML = 'False!'
    }
  }

  if (infinitiveDisplay.value = 'make') {
    if (psimple == 'made') {
      document.querySelector('.out-2').innerHTML = 'Correct!'
    } else {
      document.querySelector('.out-2').innerHTML = 'False!'
    }
  }

  if (infinitiveDisplay.value = 'have') {
    if (psimple == 'had') {
      document.querySelector('.out-2').innerHTML = 'Correct!'
    } else {
      document.querySelector('.out-2').innerHTML = 'False!'
    }
  }
  }
  */

  






  /* 
  var arrayOfInfinitives = ["do", "make", "have"];
  var infinitive = randomGenerator(0, arrayOfInfinitives.length - 1); 
  var item = array[infinitive];
  const infinitiveDisplay = document.getElementById("infinitive_id").value = infinitive;


  
  Put these items in an array. var array = ["Horse", "Pig", "Dog", "Cat", "Parrot", "Iguana"];
  Generate a random number. var randInt = randomGenerator(0, array.length - 1); ( Generating random whole numbers in JavaScript in a specific range? )
  Use the random number to get an item from the array. var item = array[randInt];
  Use document.getElementById to get the textbox you want, and use .value = to set the textbox's value. var textbox = document.getElementById("textbox_id").value = randInt; */