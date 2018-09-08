const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  Publisher: String,
  BookAuthor: String,
  ImageURL: String,
  ISBN: String,
  predited_rating: String,
  YearOfPublication: String,
  BookTitle: String,
  ImageURLM: String
});

module.exports = Book = mongoose.model('books', BookSchema);
