var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var models = require('../models');

router.get('/', function (req, res, next) {
    //var decoded = jwt.decode(req.query.token);
    //res.redirect('/auth/signin');

});

router.post('/add', function (req, res, next) {

    var stopien = {
        name: req.body.name,
        type: req.body.type,
        work: req.body.work,
        dateBegin: req.body.dateBegin,
        commandBegin: req.body.commandBegin,
        dateEnd: req.body.dateEnd,
        commandEnd: req.body.commandEnd,
        guide: req.body.guide,
        whoGive: req.body.whoGive,
        description: req.body.description,
        userId: req.body.userId
    };

    var decoded = jwt.decode(req.query.token);
    models.User.findOne({ userId: req.params.userId }).then(
        () => {
            models.Stopien.create(stopien).then(
                result => {
                    res.status(201).json({
                        message: 'Added stopien to database',
                        obj: result
                    })
                },
                err => {
                    res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    })
                }
            );
        },
        (err) => {
            return res.status(401).json({
                title: 'User not authorize',
                error: err
            });
        }

    );

});

router.post('/list:token', function (req, res, next) {
    var decoded = jwt.decode(req.params.token);
    models.User.findById(decoded.user.userId).then(
        (result) => {

            models.Stopien.findAll({ userId: decoded.user.userId, order: 'dateEnd DESC' }).then(
                data => {
                    res.status(201).json({
                        message: 'Data list from table stopnie for user',
                        obj: data
                    })
                },
                err => {
                    res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    })
                }
            )
        },
        (err) => {
            return res.status(401).json({
                title: 'User not authorize',
                error: err
            });
        }
    );

});

router.delete('/delete/:token/:id', function (req, res, next) {
    var decoded = jwt.decode(req.params.token);
    models.User.findById(decoded.user.userId).then(
        (result) => {
            models.Stopien.findOne({ id: req.params.id, userId: decoded.user.userId }).then(
                data => {
                    data.destroy().then(
                        () => {
                            models.Stopien.findAll({ userId: decoded.user.userId, order: 'dateEnd DESC' }).then(
                                data => {
                                    return res.status(201).json({
                                        message: 'Delete success',
                                        obj: data
                                    });
                                }
                            );
                        },
                        err => {
                            return res.status(401).json({
                                message: 'Something went wrong',
                                obj: err
                            });
                        }
                    )
                },
                err => {
                    return res.status(401).json({
                        message: 'Didnt find any result in database',
                        obj: err
                    });
                }
            );
        },
        err => {
            return res.status(401).json({
                title: 'User not authorize',
                error: err
            });
        }

    );

});

module.exports = router;