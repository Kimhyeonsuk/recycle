var express = require('express');
var router = express.Router();
var Mat=require('../models/materials');

/* GET users listing. */

router.post('/check',(req,res)=>{
    console.log(req.body);
    var sensor='rain';
    var value='humidity';
    var floor='temperature';
    // console.log(tmp);
    // Nature.insertData(rain,req.body.rain);
    // Nature.insertData(humid,req.body.humidity);
    // Nature.insertData(temp,req.body.temp);
});

router.get('/readDataAll', (req, res) =>{
   Mat.showData(res);
});

router.get('/sendvalue',(req,res)=>{
    //Temp.extractData(res);
    // var a={boilerStatus:'ON'};
    // console.log('보낼값',a);
    // res.json(a);
   // Nature.extractData(res);
});
module.exports = router;