var express = require('express');
var router = express.Router();

var models = require('../models/index');


router.get('/', function (req, res, next) {
    //var decoded = jwt.decode(req.query.token);
    //res.redirect('/auth/signin');

});

router.post('/add', function(req, res, next) {

    console.log(req.body);
    // models.User.findOne({email: req.body.email}).then(
    //     user => {
    //         //Sprawdzamy czu user istnije
    //         if (!user) {
    //             return res.status(401).json({
    //                 title: 'Login failed',
    //                 error: {message: 'Invalid login credentials'}
    //             });
    //         }
    //         //Sprawdzamy czy zgadzają się hasła podane przez użytkownika
    //         var result = bcrypt.compareSync(req.body.password, user.password);
    //         if (!result) {
    //             return res.status(401).json({
    //                 title: 'Login failed',
    //                 error: {message: 'Invalid password credentials'}
    //             });
    //         }
    //         //Nadajemy token logowania, zwracamy kounikat success
    //         var token = jwt.sign({user: user}, 'secret', {expiresIn: 7200});
    //         res.status(200).json({
    //                 message: 'Successfully logged in',
    //                 token: token,
    //                 userId: user.id
    //             });
        
    //     },
    //     error => {
    //         if (err) {
    //             return res.status(500).json({
    //                 title: 'An error occurred',
    //                 error: err
    //             });
    //         }
    //     }
     
});

module.exports = router;
