const router = require('express').Router();
let Books = require('../models/books.model');

router.route('/').get((req, res) => {
    Books.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: '+err));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const isbn = req.body.isbn;
    const pageCount = req.body.pageCount;
    const publishedDate = Date.parse(req.body.publishedDate);
    const thumbnailUrl = req.body.thumbnailUrl;
    const shortDescription = req.body.shortDescription;
    const longDescription = req.body.longDescription;
    const authors = req.body.authors;

    const newBooks = new Books({
        title,
        isbn,
        pageCount,
        thumbnailUrl,
        shortDescription,
        longDescription,
    });

    newBooks.save()
        .then(() => res.json('Book added!'))
        .catch(err => res.status(400).json('Error: ' +err));
});

router.route('/:id').get((req,res) => {
    Books.findById(req.params.id)
        .then(() => res.json(books))
        .catch(err => res.status(400).json('Error: ' +err));
})
module.exports = router;