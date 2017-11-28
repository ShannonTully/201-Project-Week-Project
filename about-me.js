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
var  shannon= new AboutPerson('Shannon', 'http://via.placeholder.com/150x150', 'This is Shannon\'s bio');
var koko = new AboutPerson('Koko', 'http://via.placeholder.com/150x150', 'This is Koko\'s bio');
var skylar = new AboutPerson('Skylar', 'http://via.placeholder.com/150x150', 'This is Skylar\'s bio');
var josh = new AboutPerson('Josh', 'http://via.placeholder.com/150x150', 'This is Josh\'s bio');
console.log('aboutTeam array: ', aboutTeam);


var clickCount = 0;
//var lhButton = document.getElementById('left-button');
//BUTTON IS NOT FUNCTIONAL YET

var bioInfoEl = document.getElementById('bio');

var bioNameEl = document.createElement('h3');
bioNameEl.textContent = aboutTeam[clickCount].aboutName;
bioInfoEl.appendChild(bioNameEl);

var bioPicEl = document.createElement('img');
bioPicEl.src = aboutTeam[clickCount].photoUrl;
bioPicEl.setAttribute ('width', '250');
bioPicEl.setAttribute ('alt', 'picture of ' + aboutTeam[clickCount].aboutName);
bioInfoEl.appendChild(bioPicEl);

var bioBioEl = document.createElement('p');
bioBioEl.textContent = aboutTeam[clickCount].bioText;
bioInfoEl.appendChild(bioBioEl);



//CREATE A EVENT LISTENER FOR THE "NEXT BUTTON" ALSO CLEAN UP CODE AND REMOVE REPEATS
// onClick: function(event) {
//   clickCount++;
//   var bioNameEl = document.createElement('h3');
//   bioNameEl.textContent = aboutTeam[clickCount].aboutName;
//   bioInfoEl.appendChild(bioNameEl);
//
//   var bioPicEl = document.createElement('img');
//   bioPicEl.src = aboutTeam[clickCount].photoUrl;
//   bioPicEl.setAttribute ('width', '250');
//   bioPicEl.setAttribute ('alt', 'picture of ' + aboutTeam[clickCount].aboutName);
//   bioInfoEl.appendChild(bioPicEl);
//
//   var bioBioEl = document.createElement('p');
//   bioBioEl.textContent = aboutTeam[clickCount].bioText;
//   bioInfoEl.appendChild(bioBioEl);
//
//   if(clickCount === 5) {
//     remove.Event.Listener
//   }
// }
