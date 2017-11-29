'use strict';

var user;
var dayNum;
var mainEl = document.getElementById('main');
var done = false;
var selanswr;
var questionCounter = 1;
(function() {
  user = JSON.parse(localStorage.getItem('current'));
  dayNum = parseInt(user.day.slice(-1));
})();

(function() {
  for(var i = 1; i <= 5; i++) {
    for(var j = 1; j <= 10; j++) {
      var tempStr = String('q' + j +'d' + i);
      document.getElementById(tempStr).style.display = 'none';
    }
  }
})();


function onSubmitQuizType(event) {
  event.preventDefault();
  document.getElementById('form').style.display = 'none';
  var quizType = event.target.options.value;
  if (quizType === 'single-day') {
    single();
  } else if (quizType === 'full-review') {
    full();
  } else if (quizType === 'quiz-review') {
    results();
  }
}

function showQuestion(day, qNum){
  var tempStr = String('q' + qNum +'d' + day);
  var temp = document.getElementById(tempStr);
  temp.style.display = 'block';
  temp.addEventListener('submit', recordAnswer);
  //wait();
}

// function wait() {
//   if(done === false) {
//     window.setTimeout(wait, 100);
//   }
// }

function recordAnswer(event) {
  event.preventDefault();

  done = true;
  if(event.target.answer.value === 'a1') {
    selanswr = 1;
  } else if (event.target.answer.value === 'a2') {
    selanswr = 2;
  } else if(event.target.answer.value === 'a3') {
    selanswr = 3;
  } else if(event.target.answer.value === 'a4') {
    selanswr = 4;
  }
  event.target.style.display = 'none';
  questionCounter++;
  if(questionCounter <= 10) {
    showQuestion(dayNum, questionCounter);
  }
}

function single() {
  questionCounter = 1;
  showQuestion(dayNum, 1);
}

var formEl = document.getElementById('form');
formEl.addEventListener('submit', onSubmitQuizType);
