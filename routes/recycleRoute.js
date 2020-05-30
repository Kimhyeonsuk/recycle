var express = require('express');
var router = express.Router();
var Mat=require('../models/materials');

/* GET users listing. */
router.post('/check',(req,res)=>{
    console.log(req.body);

    var checkMetal='checkMetal';
    var frequency='frequency';
    Mat.insertData(checkMetal,req.body.metal);
    Mat.insertData(frequency,req.body.sound);
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