var express = require('express');
var router = express.Router();
var User=require('../models/users');

/* GET users listing. */


router.post('/userinsert',(req,res)=>{
  console.log(req.body);
  User.insertUser(req,res);
});

router.post('/users',(req,res)=>{
  User.showUser(res);
});
router.get('/users',(req,res)=>{
  User.showUser(res);
});

router.post('/login',(req,res)=>{
  User.findUser(req,res);
});
module.exports = router;
