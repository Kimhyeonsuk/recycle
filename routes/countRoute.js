var express = require('express');
var router = express.Router();
var Nor  = require('../models/numberOfRecycleds');
/* GET users listing. */
router.post('/modify',(req,res)=>{
    console.log('요청 들어옴',req.body.name);
    
    Nor.modifyData(req.body.name);
});

module.exports = router;