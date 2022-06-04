const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  googleId: {
    type: String
  }
});

module.exports = mongoose.model('users', UserSchema);
