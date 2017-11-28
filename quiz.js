'use strict';
//
// //var daySelector = 1;
//
// var day1Q = document.createElement('h3');
//
// var newContent = document.createTextNode('Question 1, Day 1');
// day1Q.appendChild(newContent);
// var oldForm = document.getElementById('form');
//
//
//
// var parentMain = oldForm.parentNode;
// parentMain.replaceChild(day1Q, oldForm);
var day1quizzes = [];
var day2quizzes = [];
var day3quizzes = [];
var day4quizzes = [];
var day5quizzes = [];

var user;
var dayNum;

(function() {
  user = JSON.parse(localStorage.getItem('current'));
  dayNum = parseInt(user.day.slice(-1));
})();

function Questions(day, qstn, a1, a2, a3, a4) {
  this.day = day;
  this.qstn = qstn;
  this.a1 = a1;
  this.a2 = a2;
  this.a3 = a3;
  this.a4 = a4;
  (function() {
    if(day === 1) {
      day1quizzes.push(this);
    }else if(day === 2){
      day2quizzes.push(this);
    }else if(day === 3){
      day3quizzes.push(this);
    }else if(day === 4){
      day4quizzes.push(this);
    }else if(day === 5) {
      day5quizzes.push(this);
    }
  })();
}

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
  var formEl = document.getElementById('form');
  var mainEl = document.getElementById('main');
  mainEl.removeChild(formEl);
  if (dayNum === 1) {
    var day1Q = document.createElement('h3');
    var newContent = document.createTextNode(day1quizzes[1].qstn);
    day1Q.appendChild(newContent);
    var a1El = document.createElement('input');
    a1El.attribute.type='radio';

  }
}
var formEl = document.getElementById('form');
formEl.addEventListener('submit', onSubmitQuizType);
