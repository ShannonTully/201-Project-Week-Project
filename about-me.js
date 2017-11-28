'use strict';

//div = objects
var aboutTeam = [];

function AboutPerson(name, url, bioText) {
  this.aboutName = name;
  this.photoUrl = url;
  this.bioText = bioText;
  aboutTeam.push(this);
}

var shannon = new AboutPerson('Shannon', 'http://via.placeholder.com/150x150', 'This is Shannon\'s bio');

var koko = new AboutPerson('Koko', 'http://via.placeholder.com/150x150', 'This is Koko\'s bio');

var skylar = new AboutPerson('Skylar', 'http://via.placeholder.com/150x150', 'This is Skylar\'s bio');

var josh = new AboutPerson('Josh', 'http://via.placeholder.com/150x150', 'This is Josh\'s bio');

console.log(aboutTeam);


var bioInfo = document.getElementById('bio');


//css display none on everything except what is picked
