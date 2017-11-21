var points = 0;
var qIndex = 0;
var response;
var timer;

$(document).ready(function () {
  // BUTTONS
  $("#startBtn").on("click", function () {
    points = 0;
    qIndex = 0;
    $("#startBtn").hide();
    $("#pts").html("Points: " + points);
    setupGameTimer();
    showNextQuestion();
  });
  $("#choice1").on("click", function () {
    response = 0;
    checkResponse(0);
  });
  $("#choice2").on("click", function () {
    response = 1;
    checkResponse(1);
  });
  $("#choice3").on("click", function () {
    response = 2;
    checkResponse(2);
  });
  $("#choice4").on("click", function () {
    response = 3;
    checkResponse(3);
  });
  // function myLoop() {
  //   setTimeout(function () {
  //     showQuestion(questions[qIndex]);
  //     qIndex++
  //   }, 2000)
  //   if (qIndex < questions.length) {
  //     myLoop();
  //   }
  // }
  // myLoop();
  // intervalId = setInterval(this.count(), 1000);
  // for (var i = 0; i < questions.length; i++) {
  //   qIndex = i;
  //   setTimeout(function () {
  //     showQuestion(questions[qIndex]);
  //   }, 5000);
  //   if (response == questions[qIndex].c) {
  //     points++;
  //     console.log("points: " + points);
  //   }
  // }
})

function showNextQuestion() {
  $("#questionLabel").html(questions[qIndex].q);
  $("#choice1").html("A: " + questions[qIndex].a[0]);
  $("#choice2").html("B: " + questions[qIndex].a[1]);
  $("#choice3").html("C: " + questions[qIndex].a[2]);
  $("#choice4").html("D: " + questions[qIndex].a[3]);
}

function setupGameTimer() {
  var seconds = 9;
  $("#timerLabel").html((seconds+1) + " left");
  $("#timerLabel").show();
  timer = setInterval(function () {
    $("#timerLabel").html(seconds + " left");
    seconds--;
    if(seconds < 0) {
      showResult(false);
    }
  }, 1000);
}

function showResult(didWin) {
  $("#timerLabel").hide();
  $("#choice1").empty();
  $("#choice2").empty();
  $("#choice3").empty();
  $("#choice4").empty();
  clearInterval(timer);
  if (didWin) {
    points++;
    $("#questionLabel").html("Congratulations! " + questions[qIndex].a[response] + " is correct!");
    $("#pts").html("Points: " + points);
  } else {
    $("#questionLabel").html("The answer is actually " + questions[qIndex].a[questions[qIndex].c]);
  }
  qIndex++;
  if (qIndex >= questions.length) {
    $("#questionLabel").append(" GAME OVER");
    $("#startBtn").show();
  } else {
    setTimeout(function () {
      showNextQuestion();
      setupGameTimer();
    }, 3000);
  }
}

function checkResponse(response) {
  if (questions[qIndex].c == response) {
    showResult(true);
  } else {
    showResult(false);
  }
}

var questions = [
  {
    q: "Where in the world is Fort Lauderdale?",   // question
    a: ["Nowhere", "Florida", "Colorado", "Ohio"], // answers
    c: 1                                           // array index of answer
  },

  {
    q: "What is this quiz written in?",
    a: ["Java", "C++", "Swift", "Javascript"],
    c: 3
  }
]
