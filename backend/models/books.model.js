const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const booksSchema = new Schema({
    title: {type: String, required: true},
    isbn: {type: String, requires:true},
    pageCount: {type: String, required:true},
    thumbnailUrl: {type: String, required:true},
    shortDescription: {type: String, required: true},
    longDescription: {type: String, required: true},
},{
    timestamps: true,
});

const Books = mongoose.model('Books', booksSchema);

module.exports = Books;