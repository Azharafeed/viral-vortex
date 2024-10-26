var express = require('express');
var router = express.Router();
const homeCoontroler = require('../controler/home_controler')

/* GET home page. */
router.get('/',homeCoontroler.home);
router.get('/digital',homeCoontroler.digital);
router.get('/video',homeCoontroler.video);
router.get('/photo',homeCoontroler.photo);
router.get('/webdev',homeCoontroler.webdev);
router.get('/contact',homeCoontroler.contact);

module.exports = router;
