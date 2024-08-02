const mongoose = require('mongoose');

const loginCredentials = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const login = mongoose.model('logins', loginCredentials);

module.exports = login;