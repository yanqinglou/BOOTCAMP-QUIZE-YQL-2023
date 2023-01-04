var questionDisplay = document.querySelector("#question-spot");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var answer = document.querySelector("#results");
var results = document.querySelector("#results");
var resultsAlert = document.querySelector("#results-alert");
var correctSpan = document.querySelector("#correct");
var wrongSpan = document.querySelector("#wrong");
var correct = localStorage.getItem("correct");
var wrong = localStorage.getItem("wrong");
var timeLeft = 20;
var timeLeftSpan = document.querySelector("#time-left");
var randomQuestion;
var isPlaying = false;
var startBtn = document.querySelector("#start");

var questionArray = [];
var question1, question2, question3, question4, question5;

question1 = {
  question: "Inside which HTML element do we put the JavaScript?",
  choice: ["A.scripting", "B.js", "C.script", "D.javascript"],
  answer: "C.script",
};
questionArray.push(question1);

question2 = {
  question: "Where is the correct place to insert a Javascript?",
  choice: [
    "A.<body> section",
    "B.<head> section",
    "C.<header> section",
    "D.Both the <head> section and the <body> section are correct",
  ],
  answer: "D.Both the <head> section and the <body> section are correct",
};
questionArray.push(question2);

question3 = {
  question: "How does a FOR loop start?",
  choice: [
    "A.for (i=0; i<=5; i++)",
    "B.for (i=0; i<=5)",
    "C.for i=1 to 5",
    "D.for (i<=5; i++)",
  ],
  answer: "A.for (i=0; i<=5; i++)",
};
questionArray.push(question3);

question4 = {
  question: "How do you write 'Hello World' in an alert box?",
  choice: [
    "A.msg('Hello World')",
    "B.alertBox('Hello World')",
    "C.msgBox('Hello World')",
    "D.alert('Hello World')",
  ],
  answer: "D.alert('Hello World')",
};
questionArray.push(question4);

question5 = {
  question: "How to write an IF statement in JavaScript?",
  choice: ["A.if i=5", "B.if i=5 then", "C.if (i==5)", "D.if i==5 then"],
  answer: "C.if (i==5)",
};
questionArray.push(question5);

results.style.color = "red";
results.style.color = "darkgreen";
resultsAlert.style.color = "darkgreen"

//click to start button to start the quize. differnet html?

//start game
startBtn.addEventListener("click", startGame);

//load questions & choices and start count down
function startGame() {
  if (isPlaying) {
    return;
  }
  //start timer
  timeLeft = 20;
  timeLeftSpan.textContent = timeLeft;
  isPlaying = true;
  countdownTimer = setInterval(function () {
    timeLeft--;
    timeLeftSpan.textContent = timeLeft;
    if (timeLeft <= 0) {
      // if time runs out, lose the game
      clearInterval(countdownTimer);
      results.textContent = randomQuestion.answer;
      resultsAlert.textContent = "Time is out. Next Question.";
    }
  }, 1000);
  randomQuestion =
    questionArray[Math.floor(Math.random() * questionArray.length)];
  console.log(randomQuestion);
  questionDisplay.textContent = randomQuestion.question;
  choice1.textContent = randomQuestion.choice[0];
  choice2.textContent = randomQuestion.choice[1];
  choice3.textContent = randomQuestion.choice[2];
  choice4.textContent = randomQuestion.choice[3];
  console.log(randomQuestion);
}

//click to show right/wrong
choice1.addEventListener("click", function (event) {
  if (!isPlaying) {
    return;
  }
  if (event.target.textContent === randomQuestion.answer) {
    ifture();
  } else {
    ifelse();
  }
});
choice2.addEventListener("click", function (event) {
    if (!isPlaying) {
      return;
    }
    if (event.target.textContent === randomQuestion.answer) {
      ifture();
    } else {
      ifelse();
    }
  });
choice3.addEventListener("click", function (event) {
    if (!isPlaying) {
      return;
    }
    if (event.target.textContent === randomQuestion.answer) {
      ifture();
    } else {
      ifelse();
    }
  });
choice4.addEventListener("click", function (event) {
    if (!isPlaying) {
      return;
    }
    if (event.target.textContent === randomQuestion.answer) {
      ifture();
    } else {
      ifelse();
    }
  });

function ifture() {
  results.textContent = randomQuestion.answer;
  resultsAlert.textContent = "Your answer is correct! Next Question.";
  clearInterval(countdownTimer);
  correct++;
  localStorage.setItem("correct", correct);
  correctSpan.textContent = correct;
  isPlaying = false;
}

function ifelse() {
  clearInterval(countdownTimer);
  wrong++;
  localStorage.setItem("wrong", wrong);
  wrongSpan.textContent = wrong;
  results.textContent = randomQuestion.answer;

  resultsAlert.textContent = "Sorry your answer is wrong. Next Question.";
}

//show final score
//enter user name
//score board

// //reference
// var startBtn = document.querySelector("button#start");
// var winsSpan = document.querySelector("#wins-span");
// var lossesSpan = document.querySelector("#losses-span");
// var resetBtn = document.querySelector("#reset");
// var timeLeftSpan = document.querySelector("#time-left");
// var resultsH2 = document.querySelector("#results")
// var letters = "abcdefghijklmnopqrstuvwxyz";
// var wordsArray = ["manatee","chimpanzee","dolphin","gibbon","capybara","panda","syzygy", "shiva & bahamut, they are so cute!"]
// // var wordsArray = ["shiva & bahamut, they are so cute!"]
// var randomWord;
// var guessedLetters = [];
// var countdownTimer;
// var timeLeft = 10;
// var isPlaying = false;

// resultsH2.style.display="none";

// if(!losses){
//     losses=0
// }

// winsSpan.textContent = wins
// lossesSpan.textContent = losses
// console.log(wins,losses)

// function startGame() {
//     if(isPlaying){
//         return;
//     }
//     //start timer
//     resultsH2.style.display="none";
//     timeLeft=10;
//     timeLeftSpan.textContent = timeLeft;
//     isPlaying=true;
//     countdownTimer = setInterval(function(){
//         timeLeft--;
//         timeLeftSpan.textContent = timeLeft;
//         if(timeLeft<=0){
//             // if time runs out, lose the game
//             clearInterval(countdownTimer);
//             resultsH2.style.display="block";
//             resultsH2.textContent = "You lose!"
//             losses++;
//             localStorage.setItem("losses",losses);
//             lossesSpan.textContent = losses
//             isPlaying=false
//         }
//     },1000)
//     //generate a random word
//     randomWord = wordsArray[Math.floor(Math.random()*wordsArray.length)]
//     console.log(randomWord)
//     // generate a "_" for each char in random word
//     guessedLetters=[];
//     for (let i = 0; i < randomWord.length; i++) {
//         if(letters.includes(randomWord[i])){
//             guessedLetters.push("_")
//         } else if (guessedLetters[i]===" "){
//             guessedLetters.push("&nbsp;")
//         }
//         else {
//             guessedLetters.push(randomWord[i])
//         }
//     }
//     console.log(guessedLetters)
//     wordH2.textContent = guessedLetters.join("");
// }
// //  listen for keystrokes
// document.addEventListener("keyup",function(event){
//     if(!isPlaying){
//         return;
//     }
//     console.log(event.key);
//     console.log(randomWord);
//     if(randomWord.includes(event.key)){
//         //  if letter is in word, replace "_" with the letter
//         for (let i = 0; i < randomWord.length; i++) {
//             if(randomWord[i]===event.key){
//                 guessedLetters[i]=event.key
//             }
//         }
//         wordH2.textContent = guessedLetters.join("");
//         // if all letter guessed, win the game
//         if(guessedLetters.join("")===randomWord){
//             resultsH2.style.display="block";
//             resultsH2.textContent = "You win!"
//             clearInterval(countdownTimer);
//             wins++;
//             localStorage.setItem("wins",wins);
//             winsSpan.textContent = wins
//             isPlaying=false;
//         }
//     }
// })

// // save wins/losses to localstorage

// startBtn.addEventListener("click",startGame);
// resetBtn.addEventListener("click",function(){
//     localStorage.clear();
//     wins = 0;
//     losses = 0;
//     winsSpan.textContent = wins;
//     lossesSpan.textContent = losses;
// })
