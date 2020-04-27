var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Wind = require('../models/winds');


//mongoose.set('useNewUrlParser', true);



router.get('/update', function(req, res, next) {
  Wind.insertData(res);
});

router.get('/winds', function (req,res) {
  Wind.getData(res);
});
module.exports = router;





