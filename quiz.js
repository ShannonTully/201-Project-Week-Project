'use strict';

var user;
var dayNum;

(function() {
  user = JSON.parse(localStorage.getItem('current'));
  dayNum = parseInt(user.day.slice(-1));
})();

function onSubmitQuizType(event) {
  event.preventDefault();
  var quizType = event.target.options.value;
  if (quizType === 'single-day') {
    single();
  } else if (quizType === 'full-review') {
    full();
  } else if (quizType === 'quiz-review') {
    results();
  }
}

function single() {
}

var formEl = document.getElementById('form');
formEl.addEventListener('submit', onSubmitQuizType);
