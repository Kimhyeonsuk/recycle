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
      console.log('updated successfully');
    }
  });
};


// User.findOne({email:request.body.email,password:request.body.password},(err,users)=>{
//     if(err)return response.status(500).send({error: 'database failure'});
//     if(!users)return response.send('이메일 또는 패스워드가 일치하지않습니다');
//     response.send('로그인 성공!'+users.email);
// });
module.exports.extractData = function (res) {
  var entUltramove = '1';//입구 닫고 있어라
  var fUltramove='0';
  var sUltramove='0';
  var sound='0';
 

  Mat.find( (err, data) => {
    if (err) return res.status(500).send({ err: 'database failure' });
    if(data[0].value>=0&&data[0].value<=10){
      entUltramove='0';
    }

    if(data[1].value>=0&&data[0].value<=10){
      fUltramove='1';
    }
    var s = { entranceM: `${ entUltramove}`,
    firstM:`${fUltramove}`,
    secondM:`${sUltramove}`,
    thirdM:`${sound}` 
    };
    res.json(s);

  });
  // Mat.findOne({ sensor: "fUltra" }, (err, data) => {
  //   if (err) return res.status(500).send({ err: 'database failure' });
  //   if (data.value > 0) {
  //     fUltramove = '1';//물체가 들어와있으니 작동하여라
  //   }
  // });
  
};