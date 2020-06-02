var express = require('express');
var router = express.Router();
var Mat=require('../models/materials');

/* GET users listing. */
router.post('/check',(req,res)=>{
    console.log('하드웨에 에서 받은값',req.body);

    var checkMetal='checkMetal';
    var frequency='frequency';
    Mat.insertData(checkMetal,req.body.metal);
    Mat.insertData(frequency,req.body.sound);
});
router.get('/readDataAll', (req, res) =>{
   console.log('connect!');
   Mat.showData(res);
});
router.get('/sendvalue',(req,res)=>{
   Mat.extractData(res);
});
module.exports = router;