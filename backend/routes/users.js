const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()             //mongoose method
        .then(users => res.json(users))         //return in json format
        .catch(err => res.status(400).json('Error: '+err));       //error prompt
});

router.route('/add').post((req, res) => {               //post request
    const username = req.body.username;  
    const password = req.body.password;     

    const newUser = new User({
        username,
        password,
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json ('Error: '+err));
});

module.exports = router;