var points;

$(document).ready(function functionName() {
  for (var i = 0; i < questions.length; i++) {
    showQuestion(questions[i]);
    // wait x seconds
    // add points
  }
})

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

function showQuestion(question) {
  $("#questionLabel").html(question.q);
  $("#choice1").html(question.a[0]);
  $("#choice2").html(question.a[1]);
  $("#choice3").html(question.a[2]);
  $("#choice4").html(question.a[3]);
}
