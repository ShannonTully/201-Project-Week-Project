'use strict';

var dayNum;
var user;
(function() {
  user = JSON.parse(localStorage.getItem('current'));
  dayNum = parseInt(user.day.slice(-1));
})();

var daySelector = dayNum;
console.log('day', daySelector);

var mainEl = document.getElementById('main');
console.log('mainEl', mainEl);

var day1El = document.getElementById('day1-resource');
console.log('day1El', day1El);
var day2El = document.getElementById('day2-resource');
console.log('day2El', day2El);
var day3El = document.getElementById('day3-resource');
console.log('day3El', day3El);
var day4El= document.getElementById('day4-resource');
console.log('day4El', day4El);
var day5El = document.getElementById('day5-resource');
console.log('day5El', day5El);

var screenDate = function() {
  var dateEl = document.getElementById('day-of-week');
  var pEl = document.createElement('p');
  pEl.textContent = 'RESOURCES   Day: ' + dayNum;
  dateEl.appendChild(pEl);
};
screenDate();

var daySelectorResource = function () {
  if (daySelector === 1) {
    mainEl.removeChild(day2El);
    mainEl.removeChild(day3El);
    mainEl.removeChild(day4El);
    mainEl.removeChild(day5El);
  }
  else if (daySelector === 2) {
    mainEl.removeChild(day3El);
    mainEl.removeChild(day4El);
    mainEl.removeChild(day5El);
  } else if (daySelector === 3) {
    mainEl.removeChild(day4El
    );
    mainEl.removeChild(day5El);
  } else if (daySelector === 4) {
    mainEl.removeChild(day5El);
  }
};
daySelectorResource();
console.log(daySelectorResource);
