var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var materialSchema = new Schema({
  sensor: String,
  value: Number,
}, { versionKey: false });


var Mat = module.exports = mongoose.model('sensor', materialSchema);
// module.exports.getData=function(dd){
//     Temp.find((err,data)=>{
//         if(err)return dd.status(500).send({err:'database failure'});
//         dd.json(data);
//     });
// }
module.exports.showData = function (sendor) {
  Mat.find((err, data) => {
    console.log(data);
    if (err) return sendor.status(500).send({ err: 'database failure' });
    sendor.json(data);
  });
};
module.exports.insertData = function (sensor, val) {
  var query = { sensor: sensor };
  var operator = { sensor: sensor, value: val };
  var option = { upsert: true };
  Mat.replaceOne(query, operator, option, function (err, upserted) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('.');
    }
  });
};

// User.findOne({email:request.body.email,password:request.body.password},(err,users)=>{
//     if(err)return response.status(500).send({error: 'database failure'});
//     if(!users)return response.send('이메일 또는 패스워드가 일치하지않습니다');
//     response.send('로그인 성공!'+users.email);
// });
module.exports.extractData = function (res) {
 

 var resultMaterial;
  Mat.find( (err, data) => {
    if (err) return res.status(500).send({ err: 'database failure' });
  

    if(data[0].value!=0){//금속 탐지 값
      if(data[0].value==1){
        resultMaterial="metal"
      }
    }
    if(data[1].value!=0){//사운드 센서 값 0,400,650 (trash,plastic,glass)
      if(data[1].value==0){
        resultMaterial="trash";
      }
      else if(data[1].value==400){
        resultMaterial="plastic";
      }
      else if(data[1].value==650){
        resultMaterial="glass";
      }
    }

    // if(data[1].value!=-1){
    //   if(data[1]<30){
    //     if(data[0]<30){//물건이 들어오고 안드로이드에 경고 보내야함
    //       entUltramove=0;//입구 열고 있는다
    //     }    
    //     else{
    //       entUltramove=1;//입구 닫는다.
    //     }
    //   } 
    // }
    
    var s = { material:`${resultMaterial}`
    };
    console.log('send!');
    res.json(s);
  });
};