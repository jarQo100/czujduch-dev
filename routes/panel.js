var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var models = require('../models');

router.get('/', function (req, res, next) {
    //var decoded = jwt.decode(req.query.token);
    //res.redirect('/auth/signin');

});

router.post('/add:token', function (req, res, next) {

    var decoded = jwt.decode(req.params.token);

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
        userId: decoded.user.id,
        id: req.body.id
    };



    models.User.findOne({ where: { id: decoded.user.id } }).then(

        () => {
            models.Stopien.findOne({
                where: {
                    id: req.body.id
                }
            }).then(function (obj) {
                console.log(obj);
                if (obj) { // update
                    console.log("update");
                    models.Stopien.update(stopien, { where: { id: req.body.id } }).then(
                        result => {
                            console.log("update");
                            return res.status(201).json({
                                message: 'Added stopien to database',
                                obj: result
                            })
                        },
                        err => {
                            console.log("error update");
                            return res.status(500).json({
                                title: 'An error occurred',
                                error: err
                            })
                        }
                    );
                }
                else { // insert
                    console.log("create");
                    models.Stopien.create(stopien).then(
                        result => {
                            console.log("create");
                            return res.status(201).json({
                                message: 'Added stopien to database',
                                obj: result
                            })
                        },

                        err => {
                            console.log("error create");
                            return res.status(500).json({
                                title: 'An error occurred',
                                error: err
                            });
                        }
                    );
                }
            });
        },
        (err) => {
            console.log("not authorize");
            return res.status(401).json({
                title: 'User not authorize',
                error: err
            });
        }

    );


});
router.post('/list:token', function (req, res, next) {
    var decoded = jwt.decode(req.params.token);
    models.User.findOne({ where: { id: decoded.user.id } }).then(
        (result) => {

            models.Stopien.findAll({
                where: {
                    userId: decoded.user.id
                },
                order: 'dateEnd DESC'
            }
            ).then(
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

router.delete('/delete:token/:id', function (req, res, next) {

    console.log("ID ID ID ID");
    console.log(req.params.id);
    console.log("TOKEN");
    console.log(req.params.token);

    var decoded = jwt.decode(req.params.token);
    models.User.findOne({
        where: {
            id: decoded.user.id
        }
    }).then(
        (result) => {
            models.Stopien.destroy({
                where: {
                    id: req.params.id,
                    userId: decoded.user.id
                }
            }).then(
                () => {
                    models.Stopien.findAll({
                        where: {
                            userId: decoded.user.id,
                        },
                        order: 'dateEnd DESC'
                    }).then(
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

router.post('/getStopienById:token', function (req, res, next) {
    var decoded = jwt.decode(req.params.token);
    models.User.findOne({
        where: {
            id: decoded.user.id
        }
    }).then(
        (result) => {
            models.Stopien.findOne({
                where: {
                    id: req.body.id,
                    userId: decoded.user.id
                }
            }).then(
                data => {
                    res.status(201).json({
                        message: 'Success - row from table',
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

module.exports = router;