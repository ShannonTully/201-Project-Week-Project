'use strict';

var user;
var dayNum;
var mainEl = document.getElementById('main');
var done = false;
var selanswr;

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
  wait();
}

function wait() {
  if(done === false) {
    window.setTimeout(wait, 100);
  }
}

function recordAnswer(event) {
  done = true;
  if(event.target.a1.value === 'on') {
    selanswr = 1;
  } else if (event.target.a2.value === 'on') {
    selanswr = 2;
  } else if(event.target.a3.value === 'on') {
    selanswr = 3;
  } else if(event.target.a4.value === 'on') {
    selanswr = 4;
  }
}

function single() {
  //debugger;
  if(dayNum === 1){
    for(var i = 1; i <= 10; i++){
      showQuestion(1, i);
    }
  } else if(dayNum === 2){
    for(var i = 1; i <= 10; i++){
      showQuestion(2, i);
    }
  } else if(dayNum === 3){
    for(var i = 1; i <= 10; i++){
      showQuestion(3, i);
    }
  } else if(dayNum === 4){
    for(var i = 1; i <= 10; i++){
      showQuestion(4, i);
    }
  } else if(dayNum === 5){
    for(var i = 1; i <= 10; i++){
      showQuestion(5, i);
    }
  }
}

var formEl = document.getElementById('form');
formEl.addEventListener('submit', onSubmitQuizType);
