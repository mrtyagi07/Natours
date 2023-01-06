const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A user must have a name'],
    unique: true,
  },
  phone: {
    type: Number,
    required: [true, 'A user must have a number'],
    unique: true,
  },
  address: {
    type: String,
  },
  age: {
    type: Number,
    default: 18,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
