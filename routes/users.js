var express = require('express');
var router = express.Router();
var user = require('../model/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send("user page");
});

router.get('/login', function(req, res, next) {
    res.render('login');
});


router.post('/login', function(req, res, next) {
    res.render('login');
});
module.exports = router;