var express = require('express');
var router = express.Router();
var User = require('../model/user');
var regdata = require('../model/test');
//  เปิดหน้าแรก
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

// เปิดหน้า register
router.get('/register', function(req, res, next) {
    res.render('reg');
});


//  เมื่อกดสมัครเสร็จให้บันทึกข้อมูลไปยัง db
// router.post('/', function(req, res, next) {
//     const user = new User(req.body);
//     user.save()
//         .then(function() {
//             res.render('index')

//         })
//         .catch(function(err) {
//             res.status(400).send("Fail")
//         });
// });
router.post('/', function(req, res, next) {
    const user = new regdata(req.body);
    user.save()
        .then(function() {
            console.log("Success!!")
            res.render('index')

        })
        .catch(function(err) {
            res.status(400).send("Fail")
        });
});




module.exports = router;