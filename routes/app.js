var express = require('express');
var router = express.Router();

var models = require('../models/index');
var Sequelize = require('sequelize');
var jwt = require('jsonwebtoken');

// router.use('/content', function (req, res, next) {
//     jwt.verify(req.query.token, 'secret', function (err, decoded) {
//         if (err) {
//             res.redirect('/auth/signin');
//         }
//     });
//     next();
// });

router.get('/', function (req, res, next) {
    //var decoded = jwt.decode(req.query.token);
    res.redirect('/auth/signin');

});

module.exports = router;
