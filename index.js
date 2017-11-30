'use strict';

var mainEl = document.getElementById('main');
var dayMoodEl = document.getElementById('day-mood');
var users = [];
var username;

function User(username, password) {
  this.username = username;
  this.password = password;
  this.day;
  this.mood;
  users.push(this);
}


var loginForm = {
  formEl: document.getElementById('login-form'),

  persist: function(index) {
    var string = JSON.stringify(users[index]);
    localStorage.setItem('user' + index, string);
    localStorage.setItem('current', string);
    loginForm.changeForm();
  },

  changeForm: function() {
    var mainEl = document.getElementById('main');
    mainEl.removeChild (loginForm.formEl);
    dayMoodForm.showForm();
  },

  loginSubmit: function(event) {
    event.preventDefault();

    username = event.target.username.value.toLowerCase();
    var password = event.target.password.value.toLowerCase();
    console.log(username, password);

    var contains = false;
    for(var i in users) {
      if(users[i].username === username) {
        contains = true;
        loginForm.persist(i);
        break;
      }
    }
    if(contains === false) {
      var user = new User(username, password);
      loginForm.persist(users.length - 1);
    }
  }
};

var dayMoodForm = {
  dayFormEl: document.getElementById('day-mood'),

  showForm: function () {
    mainEl.appendChild(dayMoodEl);
  },

  dayMoodSubmit: function(event) {
    event.preventDefault();
    for(var i in users) {
      if(users[i].username === username) {
        users[i].mood = event.target.mood.value;
        users[i].day = event.target.day.value;
        dayMoodForm.persist(i);
        break;
      }
    }
  },
  persist: function(index) {
    var string = JSON.stringify(users[index]);
    localStorage.setItem('user' + index, string);
    localStorage.setItem('current', string);
    for(var i in users) {
      if(users[i].username === username) {
        if(users[i].mood === 'mood-3') {
          window.location.replace('resource.html');
        } else {
          window.location.replace('quiz.html');
        }
      }
    }
  },
};

(function() {
  var localUsers = [];
  for(var i = 0; i < 99; i++) {
    if(localStorage.getItem('user' + i)) {
      localUsers.push(JSON.parse(localStorage.getItem('user' + i)));
    }
  }
  users = localUsers;
  mainEl.removeChild(dayMoodEl);
})();

loginForm.formEl.addEventListener('submit', loginForm.loginSubmit);
dayMoodForm.dayFormEl.addEventListener('submit', dayMoodForm.dayMoodSubmit);
