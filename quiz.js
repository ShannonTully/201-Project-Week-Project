'use strict';

var answerArr=[];
var user;
var dayNum;
var dayNumFull = 1;
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

(function() {
  for(var i = 1; i <= 5; i++) {
    debugger;
    var tempStr = String('day' + i);
    document.getElementById(tempStr).style.display = 'none';
  }
})();

function results(){
  for(var i = 1; i <= 5; i++) {
    for(var j = 1; j <= 10; j++) {
      for(var l = 1; l <= 4; l++) {
        var tempStr = String('d' + i + 'q' + j + 'a' + l);
        var temp = document.getElementById(tempStr).className;
        document.getElementById(tempStr).className = temp + ' selected';
      }
    }
  }

  var daySelector = dayNum;
  console.log('day', daySelector);

  var mainEl = document.getElementById('main');
  console.log('mainEl', mainEl);

  var day1El = document.getElementById('d1');
  var day2El = document.getElementById('d2');
  var day3El = document.getElementById('d3');
  var day4El= document.getElementById('d4');
  var day5El = document.getElementById('d5');

  if (daySelector === 1) {
    day1El.style.display = 'block';
  }
  else if (daySelector === 2) {
    day1El.style.display = 'block';
    day2El.style.display = 'block';
  } else if (daySelector === 3) {
    day1El.style.display = 'block';
    day2El.style.display = 'block';
    day3El.style.display = 'block';
  } else if (daySelector === 4) {
    day1El.style.display = 'block';
    day2El.style.display = 'block';
    day3El.style.display = 'block';
    day4El.style.display = 'block';
  }else if (daySelector === 5) {
    day1El.style.display = 'block';
    day2El.style.display = 'block';
    day3El.style.display = 'block';
    day4El.style.display = 'block';
    day5El.style.display = 'block';
  }
}

function onSubmitQuizType(event) {
  event.preventDefault();
  document.getElementById('form').style.display = 'none';
  var quizType = event.target.options.value;
  if (quizType === 'single-day') {
    single();
  } else if (quizType === 'full-review') {
    full();
  }
}

function showQuestion(day, qNum){
  var tempStr = String('q' + qNum +'d' + day);
  var temp = document.getElementById(tempStr);
  temp.style.display = 'block';
  temp.addEventListener('submit', recordAnswer);
  //wait();
}

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
  }else {
    showQuestion(dayNum, questionCounter);
    return;
  }
  answerArr.push(selanswr);
  event.target.style.display = 'none';
  questionCounter++;
  if(questionCounter <= 10) {
    showQuestion(dayNum, questionCounter);
  } else {
    results();
  }
}

function single() {
  questionCounter = 1;
  showQuestion(dayNum, 1);
}

function recordAnswerFull(event) {
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
  } else {
    showQuestionFull(dayNumFull, questionCounter);
    return;
  }

  answerArr.push(selanswr);
  event.target.style.display = 'none';
  if(dayNumFull <= dayNum){
    questionCounter++;
    if(questionCounter <= 10) {
      showQuestionFull(dayNumFull, questionCounter);
    } else if(dayNumFull < 5) {
      dayNumFull++;
      questionCounter = 1;
      showQuestionFull(dayNumFull, questionCounter);
    }
  } else {
    results();
  }
}

function showQuestionFull(day, qNum){
  var tempStr = String('q' + qNum +'d' + day);
  var temp = document.getElementById(tempStr);
  temp.style.display = 'block';
  temp.addEventListener('submit', recordAnswerFull);
  //wait();
}

function full() {
  questionCounter = 1;
  showQuestionFull(1, 1);
}

var formEl = document.getElementById('form');
formEl.addEventListener('submit', onSubmitQuizType);
