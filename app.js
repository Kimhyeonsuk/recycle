const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
var fs=require('fs');
var compression=require('compression')
var mongoose = require('mongoose');

//[OCNFIGURE MONGOOSE]
//CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function () {
  //CONNECTED TO MONGODB SERVER
  console.log("CONNECTED to mongod server");
});
mongoose.connect('mongodb://humba:1234@13.124.99.108:27017/recycle?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false',{useCreateIndex:true,useNewUrlParser:true,useUnifiedTopology:true});


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());
//passport 초기화 및 express-session 설정v




var firstrouter=require('./routes/firstRoute');
app.use('/',firstrouter);

var materialrouter=require('./routes/recycleRoute');
app.use('/recycle',materialrouter);




app.get('/api/hello',(req,res)=>{
  res.send(req.user);
});


app.listen(3000, () => {
  console.log("Express connected!");
});

module.exports = app;




