'use strict';

var users = [];

function User(username, password) {
  this.username = username;
  this.password = password;
  users.push(this);
}

var loginForm = {
  formEl: document.getElementById('login-form'),

  persist: function(index) {
    
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
        var user = i;
        loginForm.persist(user);
        break;
      }
    }
    if(contains === false) {
      var user = new User(username, password);
      loginForm.persist(users[users.length - 1]);
    }
  }
};

loginForm.formEl.addEventListener('submit', loginForm.loginSubmit);
