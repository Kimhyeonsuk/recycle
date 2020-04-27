var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/aa',(req,res)=>{
  res.send(req.user);
});
router.post('/aa',(req,res)=>{
  res.send('liverpool');
});
module.exports = router;