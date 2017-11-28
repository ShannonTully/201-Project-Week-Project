'use strict';

var users = [];

function User(username, password) {
  this.username = username;
  this.password = password;
  users.push(this);
}

(function() {
  var localUsers = [];
  for(var i = 0; i < 99; i++) {
    if(localStorage.getItem('user' + i)) {
      localUsers.push(JSON.parse(localStorage.getItem('user' + i)));
    }
  }
  users = localUsers;
})();

var loginForm = {
  formEl: document.getElementById('login-form'),

  persist: function(index) {
    var string = JSON.stringify(users[index]);
    localStorage.setItem('user' + index, string);
  },

  loginSubmit: function(event) {
    event.preventDefault();

    var username = event.target.username.value.toLowerCase();
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

loginForm.formEl.addEventListener('submit', loginForm.loginSubmit);
