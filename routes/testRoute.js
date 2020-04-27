var express = require('express');
var router = express.Router();
var Nature=require('../models/natures');

/* GET users listing. */

router.post('/rcvValue',(req,res)=>{
    console.log(req.body);
    var rain='rain';
    var humid='humidity';
    var temp='temperature';
    console.log(tmp);
    Nature.insertData(rain,req.body.rain);
    Nature.insertData(humid,req.body.humidity);
    Nature.insertData(temp,req.body.temp);
});

router.get('/readDataAll', (req, res) =>{
    console.log("나 실행");
    res.json({success : "조까"});
});

router.get('/sendvalue',(req,res)=>{
    //Temp.extractData(res);
    // var a={boilerStatus:'ON'};
    // console.log('보낼값',a);
    // res.json(a);
    Nature.extractData(res);
});
module.exports = router;