'use strict';

var aboutTeam = [];
//constructor
function AboutPerson(name, url, bioText) {
  this.aboutName = name;
  this.photoUrl = url;
  this.bioText = bioText;
  aboutTeam.push(this);
}

//objects
var shannon= new AboutPerson('Shannon', 'http://via.placeholder.com/150x150', 'Hi, my name is Shannon, and this is my bio. I have a cat and his name is Mr. Kittycat Meowface. I go to school at Code Fellows. I have two roommates and they both work at Pikes Place Market for a produce vender.');
var koko = new AboutPerson('Koko', 'http://via.placeholder.com/150x150', 'My name is Kowser Kassa but I’ve gone by “Koko” since childhood. I am 23 years old and a student at Code Fellows. I hope to begin a career as a Full-Stack JavaScript devloper and continue to travel the world. I want to explore as much as I can while encouraging young children of color persue STEM careers.');
var skylar = new AboutPerson('Skyler', 'http://via.placeholder.com/150x150', 'My name is Skyler Williams, I graduated High school 2 years ago, and during that time I was always interested in the tech field, both hardware and software wise. Now I\'m a student here at Code Fellows.');
var josh = new AboutPerson('Josh', 'http://via.placeholder.com/150x150', 'This is Josh\'s bio');
console.log('aboutTeam array: ', aboutTeam);


var clickCount = 0;
var lhButton = document.getElementById('left-button');
var rhButton = document.getElementById('right-button');

var displayer =function() {
  var bioInfoEl = document.getElementById('bio');

  var bioNameEl = document.createElement('h3');
  bioNameEl.id = 'recall3';
  bioNameEl.textContent = aboutTeam[clickCount].aboutName;
  bioInfoEl.appendChild(bioNameEl);

  var bioPicEl = document.createElement('img');
  bioPicEl.id ='recall2';
  bioPicEl.src = aboutTeam[clickCount].photoUrl;
  bioPicEl.setAttribute ('width', '250');
  bioPicEl.setAttribute ('alt', 'picture of ' + aboutTeam[clickCount].aboutName);
  bioInfoEl.appendChild(bioPicEl);

  var bioBioEl = document.createElement('p');
  bioBioEl.id = 'recall1';
  bioBioEl.textContent = aboutTeam[clickCount].bioText;
  bioInfoEl.appendChild(bioBioEl);
};

displayer();

function onClickLH() {
  var bioInfoEl = document.getElementById('bio');
  var bioBioEl = document.getElementById('recall1');
  var bioPicEl = document.getElementById('recall2');
  var bioNameEl = document.getElementById('recall3');

  bioInfoEl.removeChild(bioBioEl);
  bioInfoEl.removeChild(bioPicEl);
  bioInfoEl.removeChild(bioNameEl);

  if(clickCount === 0){
    clickCount = 3;
  } else if (clickCount === 1){
    clickCount = 0;
  } else if (clickCount === 2) {
    clickCount = 1;
  } else if (clickCount === 3) {
    clickCount = 2;
  }
  displayer();
}

function onClickRH() {
  var bioInfoEl = document.getElementById('bio');
  var bioBioEl = document.getElementById('recall1');
  var bioPicEl = document.getElementById('recall2');
  var bioNameEl = document.getElementById('recall3');

  bioInfoEl.removeChild(bioBioEl);
  bioInfoEl.removeChild(bioPicEl);
  bioInfoEl.removeChild(bioNameEl);

  if(clickCount === 0){
    clickCount = 1;
  } else if (clickCount === 1){
    clickCount = 2;
  } else if (clickCount === 2) {
    clickCount = 3;
  } else if (clickCount === 3) {
    clickCount = 0;
  }
  displayer();
}
lhButton.addEventListener('click', onClickLH);
rhButton.addEventListener('click', onClickRH);
//CREATE A EVENT LISTENER FOR THE "NEXT BUTTON" ALSO CLEAN UP CODE AND REMOVE REPEATS
