var questionDisplay = document.querySelector("#question-spot");
var answertime = document.querySelector("#answertime");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
// var answer = document.querySelector("#results");
var correctSpan = document.querySelector("#correct");
var wrongSpan = document.querySelector("#wrong");
var correct = localStorage.getItem("correct");
var wrong = localStorage.getItem("wrong");
var timeLeft = 60;
var timeLeftSpan = document.querySelector("#time-left");
var isPlaying = false;
var startBtn = document.querySelector("#start");
var currentQuestion;
var currentNo = 0;
//display the link to submit username and score
var finalScore = document.querySelector("#finalscore");
var timeOutAlert = document.querySelector("#timeoutalert");
//to track score and save in localstorage
var correct = localStorage.getItem("correct");
var wrong = localStorage.getItem("wrong");
var totalAttempt = localStorage.getItem("totalattempt");
var scoremsg = document.querySelector("#finalscoremsg");

var questionArray = [];
var question1, question2, question3, question4, question5;

questionArray = [
  {
    question: "1.Inside which HTML element do we put the JavaScript?",
    choice: ["A.scripting", "B.js", "C.script", "D.javascript"],
    answer: "C.script",
    answerNumber: 3,
  },

  {
    question: "2.Where is the correct place to insert a Javascript?",
    choice: [
      "A.<body> section",
      "B.<head> section",
      "C.<header> section",
      "D.Both the <head> section and the <body> section are correct",
    ],
    answer: "D.Both the <head> section and the <body> section are correct",
    answerNumber: 4,
  },

  {
    question: "3.How does a FOR loop start?",
    choice: [
      "A.for (i=0; i<=5; i++)",
      "B.for (i=0; i<=5)",
      "C.for i=1 to 5",
      "D.for (i<=5; i++)",
    ],
    answer: "A.for (i=0; i<=5; i++)",
    answerNumber: 1,
  },

  {
    question: "4.How do you write 'Hello World' in an alert box?",
    choice: [
      "A.msg('Hello World')",
      "B.alertBox('Hello World')",
      "C.msgBox('Hello World')",
      "D.alert('Hello World')",
    ],
    answer: "D.alert('Hello World')",
    answerNumber: 4,
  },

  {
    question: "5.How to write an IF statement in JavaScript?",
    choice: ["A.if i=5", "B.if i=5 then", "C.if (i==5)", "D.if i==5 then"],
    answer: "C.if (i==5)",
    answerNumber: 3,
  },
];

localStorage.clear();

//start the countdown to start the game
countdown();
showquestion();

document.addEventListener("click", checkclick);

//check if the click is on a choice button
function checkclick(event) {
  if (event.target.matches("button")) {
    checkanswer(event);
  }
}
//check is the correct answer is clicked, correct answer is in green
function checkanswer(event) {
  if (event.target.textContent === currentQuestion.answer) {
    correct++;
    totalAttempt++;
    event.target.style.color = "darkgreen";
    localStorage.setItem("totalattempt", totalAttempt);
    localStorage.setItem("correct", correct);
    correctSpan.textContent = correct;
    showquestion();
  } else {
    wrong++;
    totalAttempt++;
    localStorage.setItem("totalattempt", totalAttempt);
    event.target.style.color = "red";
    answerNo = currentQuestion.answerNumber;
    localStorage.setItem("wrong", wrong);
    wrongSpan.textContent = wrong;
  }
}

//show question & decode if the question number has reached 5
function showquestion() {
  if (currentNo == 5) {
    //after 5 question, stop the timer
    scoremsg.textContent = "Congratulation! You just finished all the questions!"
    link = "./finalscore.html"
    finalScore.innerHTML = '<a href="' + link +'">Click to submit your score</a>'
    totalAttempt = correct + wrong
    console.log(totalAttempt);
    localStorage.getItem("totalattempt", totalAttempt);

    clearInterval(countdownTimer);
  } else {
    choice1.style.color = "black";
    choice2.style.color = "black";
    choice3.style.color = "black";
    choice4.style.color = "black";
    currentQuestion = questionArray[currentNo];
    console.log(currentNo);
    questionDisplay.textContent = currentQuestion.question;
    choice1.textContent = currentQuestion.choice[0];
    choice2.textContent = currentQuestion.choice[1];
    choice3.textContent = currentQuestion.choice[2];
    choice4.textContent = currentQuestion.choice[3];
    currentNo++;
  }
}

function countdown() {
  //start timer
  timeLeft = 60;
  timeLeftSpan.textContent = timeLeft;
  countdownTimer = setInterval(function () {
    timeLeft--;
    timeLeftSpan.textContent = timeLeft;
    if (timeLeft <= 0) {
      // if time runs out, lose the game
      // finalScore.hidden = "false";
      clearInterval(countdownTimer);
      timeOutAlert.textContent = "Time is out.";
    }
  }, 1000);
}
