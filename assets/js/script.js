var questionDisplay = document.querySelector("#question-spot");
var answertime = document.querySelector("#answertime");
var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
// var answer = document.querySelector("#results");
var results = document.querySelector("#results");
var resultsAlert = document.querySelector("#results-alert");
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
var finalScore = document.body.children[1].children[0].children[8];
var delayLeft;
var finalscoreNo;
var scoremsg = document.querySelector("#scoreannouncement")

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

finalScore.hidden = true;
localStorage.clear();

countdown();
showquestion();

document.addEventListener("click", checkclick);

//check if the click is on a choice button
function checkclick(event) {
  console.log(event.target.matches("button"));
  if (event.target.matches("button")) {
    checkanswer(event);

  } else {
    return;
  }
}

//check is the correct answer is clicked
function checkanswer(event) {
  if (event.target.textContent === currentQuestion.answer) {
    correct++;
    results.textContent = currentQuestion.answer;
    resultsAlert.textContent = "Your answer is correct! Next Question.";
    results.style.color = "darkgreen";
    localStorage.setItem("correct", correct);
    correctSpan.textContent = correct;
    stopquestion();
    showquestion();
  } else {
    wrong++;
    localStorage.setItem("wrong", wrong);
    wrongSpan.textContent = wrong;
    results.style.color = "red";
    results.textContent = currentQuestion.answer;
    resultsAlert.textContent = "Sorry your answer is wrong. Next Question.";
    stopquestion();
    showquestion();
  }
}

//the result/answer will show for 3s and then go into next question
function delay() {
  delayLeft = 3;
  answertime.textContent = delayLeft;
  console.log(delayLeft);
  delaycountdownTimer = setInterval(function () {
    delayLeft = delayLeft -1;
    if (timeLeft === 0) {
      clearInterval(delaycountdownTimer);
      results.textContent = "";
      resultsAlert.textContent = "";
      console.log(delayLeft);
    }
  }, 2000);
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
      clearInterval(countdownTimer);
      resultsAlert.textContent = "Time is out.";
      finalScore.hidden = false;
    }
  }, 1000);
}

function showquestion() {
  currentQuestion = questionArray[currentNo];
  questionDisplay.textContent = currentQuestion.question;
  choice1.textContent = currentQuestion.choice[0];
  choice2.textContent = currentQuestion.choice[1];
  choice3.textContent = currentQuestion.choice[2];
  choice4.textContent = currentQuestion.choice[3];
  currentNo++;
}

function stopquestion(){
  if (currentNo === 5) {
    //after 5 question, stop the timer
    clearInterval(countdownTimer);
    finalScore.hidden = false;
    finalPoint = correct*10 - wrong*10
    scoremsg.textContent = "Your total score is " + finalPoint + " !"
    return finalPoint
  }
}
