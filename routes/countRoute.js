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


router.post('/getSettingMax',(req,res)=>{
    console.log(req.body);
    //console.log(req.body.Metal);
   //Nor.insertData("glass",req.body.glass);
   //Nor.insertData("Metal",req.body.Metal);
   //Nor.insertData("plastic",req.body.plastic);
   //Nor.insertData("trash",req.body.trash);
   var s={"결과": "성공"};
    res.json(s);

});
module.exports = router;