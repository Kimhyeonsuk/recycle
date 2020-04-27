var express = require('express');
var router = express.Router();
var Mat=require('../models/materials');

/* GET users listing. */

router.post('/check',(req,res)=>{
    console.log(req.body);
    var entUltra='entUltra';
    var fUltra='fUltra';
    var sUltra='sUltra';
    var checkMetal='checkMetal';
    var frequency='frequency';
    var sound='sound';
    Mat.insertData(entUltra,req.body.entUltra);
    Mat.insertData(fUltra,req.body.fUltra);
    Mat.insertData(sUltra,req.body.sUltra);
    Mat.insertData(checkMetal,req.body.checkMetal);
    Mat.insertData(frequency,req.body.frequency);
    Mat.insertData(sound,req.body.sound);
    console.log('update successfully');
});

router.get('/readDataAll', (req, res) =>{
   console.log('connect!');
   Mat.showData(res);
});

router.get('/sendvalue',(req,res)=>{
    //Temp.extractData(res);
    // var a={boilerStatus:'ON'};
    // console.log('보낼값',a);
    // res.json(a);
   // Nature.extractData(res);
   Mat.extractData(res);
});
module.exports = router;