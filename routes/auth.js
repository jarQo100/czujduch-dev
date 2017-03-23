var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var models  = require('../models');

router.post('/', function (req, res, next) {

    var user = {
        id: bcrypt.genSaltSync(15),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: bcrypt.hashSync(req.body.password),
        email: req.body.email,
    };

    models.User.create(user).then(
        result => { res.status(201).json({
            message: 'User created',
            obj: result
        })},
        err => {res.status(500).json({
            title: 'An error occurred',
            error: err
        })}
    );

});

router.post('/signin', function(req, res, next) {
    models.User.findOne({email: req.body.email}).then(
        user => {
            //Sprawdzamy czu user istnije
            if (!user) {
                return res.status(401).json({
                    title: 'Login failed',
                    error: {message: 'Invalid login credentials'}
                });
            }
            console.log(req.body.password);
            console.log(user.password);
            //Sprawdzamy czy zgadzają się hasła podane przez użytkownika
            var result = bcrypt.compareSync(req.body.password, user.password);
            if (!result) {
                return res.status(401).json({
                    title: 'Login failed',
                    error: {message: 'Invalid password credentials'}
                });
            }
            //Nadajemy token logowania, zwracamy kounikat success
            var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
            res.status(200).json({
                    message: 'Successfully logged in',
                    token: token,
                    userId: user.id
                });
        
        },
        error => {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
        }
     
    );
        
});

module.exports = router;
