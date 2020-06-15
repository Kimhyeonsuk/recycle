var express = require('express');
var router = express.Router();
var Nor  = require('../models/numberOfRecycleds');
/* GET users listing. */
router.post('/modify',(req,res)=>{
    console.log('요청 들어옴',Object.keys(req.body)[0]);
    var tmp=Object.keys(req.body)[0];
    Nor.modifyData(tmp);
    var s={"결과": "성공"};
    res.json(s);
});

module.exports = router;