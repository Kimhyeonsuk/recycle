var express = require('express');
var router = express.Router();
var Nor  = require('../models/numberOfRecycleds');
/* GET users listing. */
router.post('/modify',(req,res)=>{
    console.log('요청 들어옴',req.body);
    
    Nor.modifyData(req.body.name);
    var s={"결과": "성공"};
    res.json(s);
});

module.exports = router;