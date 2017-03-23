var express = require('express');
var router = express.Router();

var models = require('../models/index');
var Sequelize = require('sequelize');

router.get('/', function (req, res, next) {
    


   models.users.create({
        id: "2",
        firstName: 'janedoe',
        lastName: 'fds',
        email: "dasda@o2.pl",
        password: "fdsfds"
    }).then(function(user) {
        res.json(user);
    }).error;

    // user.save().then(function() {
    //     console.log(User + "done");
    // });

    
    
    res.render('index');
});

module.exports = router;
