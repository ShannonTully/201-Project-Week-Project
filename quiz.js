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
  day1quizzes.push(this);
  // (function() {
  //   if(day === 1) {
  //     day1quizzes.push(this);
  //   }else if(day === 2){
  //     day2quizzes.push(this);
  //   }else if(day === 3){
  //     day3quizzes.push(this);
  //   }else if(day === 4){
  //     day4quizzes.push(this);
  //   }else if(day === 5) {
  //     day5quizzes.push(this);
  //   }
  // })();
}


 //var q1d1 = new Questions (1, 'What does Math.floor() do?', ' It truncates the decimal values from a floating point number ', 'It generates decimal numbers of the number digits that are passed in as an argument', ' It picks a random number and attaches it to the prototype', ' It takes a decimal and invokes it up to the next higher integer value ');

 var q1d1 = new Questions (1,'Which is the correct way to invoke the wizardsOfMiddleEarth function. \
  function wizardsOfMiddleEarth() {    \
    this.gray = "Gandalf";    \
    this.white = "Saurumon";  \
    this.brown = "Radaghast";   \
    this.blue = ["Alatar", "Pallando"];    \
    return this.gray + this.white + this.brown + this.blue[0] + this.blue [1]; }', 'new wizardsOfMiddleEarth();', 'wizardsOfMiddleEarth;', 'wizardsOfMiddleEarth();', 'wizardsOfMiddleEarth()');

var q2d1 = new Questions (1, 'When used inside of an object, this refers to:', 'The object that it is used in', 'Any variable that is declared either immediately before or immediately after the use of this', 'The block of code following this', ' The function concatenation that it is used inside of');

var q3d1 = new Questions (1, 'var rabbit = {};  This line of code creates an object by using:', 'Cascading prototypal inheritance', 'A constructor function', 'Object literal notation', 'Properties and methods');

var q4d1 = new Questions (1,'In the line of code var turtle = newAnimal("Michelangelo",1); "Michelangelo" and 1 are:', 'Function expressions', 'Variables', 'Arguments', 'Instantiations');

var q5d1 = new Questions (1,'What is the term we use for a function that is associated with (or, attached to) an object?', 'A method', 'An instance', 'An ability', 'An action');

var q6d1 = new Questions (1,'What does DOM stand for?', 'Distribution of Methods', 'Domain Oriented Manipulation', 'Document Object Model', 'Direct Object-oriented Maintenance');

var q7d1 = new Questions (1,'True/false: An object is a collection of properties and methods', 'True', 'False');

var q8d1 = new Questions (1,'True/false: Figuring out your problem domain should only be done after you start writing code; otherwise you do not know whether the code actually works', 'True', 'False');

var q9d1 = new Questions (1,'True/false: Javascript cannot be used to manipulate HTML elements; it is only used in web applications to solve arithmetic calculations.', 'True', 'False');

var q10d1 = new Questions (1,'Which is the correct way to invoke the wizardsOfMiddleEarth function. <br> function wizardsOfMiddleEarth() {   <br> this.gray = "Gandalf";   <br> this.white = "Saurumon";   <br> this.brown = "Radaghast";   <br>this.blue = ["Alatar", "Pallando"];   <br> return this.gray + this.white + this.brown + this.blue[0] + this.blue [1]; }', 'new wizardsOfMiddleEarth();', 'wizardsOfMiddleEarth;', 'wizardsOfMiddleEarth();', 'wizardsOfMiddleEarth()');






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
  var qzEl = document.getElementById('qz');
  mainEl.removeChild(formEl);
  if (dayNum === 1) {
    var day1Q = document.createElement('p');
    day1Q.id = 'questionText';
    var newContent = document.createTextNode(day1quizzes[0].qstn);
    mainEl.appendChild(day1Q);
    day1Q.appendChild(newContent);
    var a1El = document.createElement('input');
    a1El.type = 'radio';
    a1El.name = 'a1';
    qzEl.appendChild(a1El);
    var l1El = document.createElement('label');
    l1El.appendChild(document.createTextNode(day1quizzes[0].a1));
    qzEl.appendChild(l1El);

    var a2El = document.createElement('input');
    a2El.type = 'radio';
    a2El.name = 'a1';
    qzEl.appendChild(a2El);
    var l2El = document.createElement('label');
    l2El.appendChild(document.createTextNode(day1quizzes[0].a2));
    qzEl.appendChild(l2El);

    var a3El = document.createElement('input');
    a3El.type = 'radio';
    a3El.name = 'a1';
    qzEl.appendChild(a3El);
    var l3El = document.createElement('label');
    l3El.appendChild(document.createTextNode(day1quizzes[0].a3));
    qzEl.appendChild(l3El);

    var a4El = document.createElement('input');
    a4El.type = 'radio';
    a4El.name = 'a1';
    qzEl.appendChild(a4El);
    var l4El = document.createElement('label');
    l4El.appendChild(document.createTextNode(day1quizzes[0].a4));
    qzEl.appendChild(l4El);
  }
}

var formEl = document.getElementById('form');
formEl.addEventListener('submit', onSubmitQuizType);
