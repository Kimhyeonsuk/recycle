var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var materialSchema = new Schema({
  sensor: String,
  value: Number,
}, { versionKey: false });


var Mat = module.exports = mongoose.model('material', materialSchema);
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
    var s=`[${data}]`;
    sendor.json(s);
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
  var entUltramove = -1;//입구 닫고 있어라
  var fUltramove=-1;
  var sUltramove=-1;
  var sound=-1;
 

  Mat.find( (err, data) => {
    if (err) return res.status(500).send({ err: 'database failure' });
  
    if(data[1].value!=-1){
      if(data[1]<30){
        if(data[0]<30){//물건이 들어오고 안드로이드에 경고 보내야함
          entUltramove=0;//입구 열고 있는다
        }    
        else{
          entUltramove=1;//입구 닫는다.
        }
      }
      
    }
    if(data[2].value!=-1){
      if(data[2].value==0){
        fUltramove=3
      }
    }
    if(data[3].value=-1){

    }
    if(data[4].value=-1){

    }
    var s = { entranceM: `${ entUltramove}`,
    firstM:`${fUltramove}`,
    secondM:`${sUltramove}`,
    thirdM:`${sound}` 
    };

    console.log('send!');
    res.json(s);

  });
  // Mat.findOne({ sensor: "fUltra" }, (err, data) => {
  //   if (err) return res.status(500).send({ err: 'database failure' });
  //   if (data.value > 0) {
  //     fUltramove = '1';//물체가 들어와있으니 작동하여라
  //   }
  // });
  
};