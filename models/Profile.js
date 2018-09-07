const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Book = require("../models/Book");

// Create Schema

const ProfileSchema = new Schema({
  recommended_books:{
      type: [],
      ref: Book
    },
  user_id: String,
  user_password: String,
  name: String,
  expiry_date: String,
  address: String,
  email: String,
  history:{
      type: [],
      ref: Book
    }
});

module.exports = Profile = mongoose.model('profiles', ProfileSchema);
