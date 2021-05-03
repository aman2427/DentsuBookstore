const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;          //port

app.use(cors());            //cors middleware
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDb database connected sucessfully.");
})

const booksRouter = require('./routes/books');
const usersRouter = require('./routes/users');
app.use('/books', booksRouter);
app.use('/users', usersRouter);

app.listen(port, () => {            //starts server
    console.log(`Server is running on port: ${port}`);
});