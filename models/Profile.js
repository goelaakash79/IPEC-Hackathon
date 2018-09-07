const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Book = require("../models/Book");

const ProfileSchema = new Schema({
  recommended_books:{
      type: [],
      ref: Book
    },
  user_id: String,
  user_password: String,
  history:{
      type: [],
      ref: Book
    }
});

module.exports = Profile = mongoose.model('profiles', ProfileSchema);
