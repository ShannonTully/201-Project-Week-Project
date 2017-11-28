'use strict';

var days = [];

function Days(resource1, resource2, resource3) {
  this.resource1 = resource1;
  this.resource2 = resource2;
  this.resource3 = resource3;
  days.push(this);
}

var Day1 = new Days('https://www.codefellows.org/','https://www.codefellows.org/','https://www.codefellows.org/');
var Day2 = new Days('https://www.codefellows.org/','https://www.codefellows.org/','https://www.codefellows.org/');
var Day3 = new Days('https://www.codefellows.org/','https://www.codefellows.org/','https://www.codefellows.org/');
var Day4 = new Days('https://www.codefellows.org/','https://www.codefellows.org/','https://www.codefellows.org/');
var Day5 = new Days('https://www.codefellows.org/','https://www.codefellows.org/','https://www.codefellows.org/');
console.log('days array', days);

var daySelector = ['1','2','3','4','5'];
