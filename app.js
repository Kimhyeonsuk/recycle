const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
var fs=require('fs');
var compression=require('compression')
var mongoose = require('mongoose');
var server=require('http').createServer(app);


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




var materialrouter=require('./routes/recycleRoute');
app.use('/recycle',materialrouter);




app.get('/api/hello',(req,res)=>{
  res.send(req.user);
});

server.listen(3000,()=>{
  console.log("연결");
});
// app.listen(3000, () => {
//   console.log("Express connected!");
// });

var Mat=require('./models/materials');



var io=require('socket.io')(server);
io.on('connection',function(socket){
  console.log('connect됨');
  socket.on('disconnect',function(data){
    console.log('disconnect');
  });
  
  socket.on('SEND',function(data){
    console.log('데이타',data);
    data.message="hi";
    socket.emit(data);

    // Mat.findOne({ sensor: "entUltra" }, (err, rcvdata) => {
    //     if (err) return res.status(500).send({ err: 'database failure' });

    //     if (rcvdata.value ==-1) {
    //       data.message='close';
    //     }
    //     else if(rcvdata.value>=20){
          
    //       data.message='keep opening the door';
    //     }
    //     else{
    //       data.message='close';
    //     }
    //     data.message='Message from server: '+data.message;    
    //     socket.emit('SEND',data);
    // });

  })
})
module.exports = app;




