var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var numOfRecSchema = new Schema({
  type: String,
  number: Number,
  max: Number
}, { versionKey: false });


var Nor = module.exports = mongoose.model('numberOfRecycled', numOfRecSchema);
// module.exports.getData=function(dd){
//     Temp.find((err,data)=>{
//         if(err)return dd.status(500).send({err:'database failure'});
//         dd.json(data);
//     });
// }
module.exports.showData = function (sendor) {
  Nor.find((err, data) => {
    console.log(data);
    if (err) return sendor.status(500).send({ err: 'database failure' });
    sendor.json(data);
  });
};
module.exports.insertData = function (sensor, val) {
  var query = { sensor: sensor };
  var operator = { sensor: sensor, value: val };
  var option = { upsert: true };
  Nor.replaceOne(query, operator, option, function (err, upserted) {
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
 
  Nor.find( (err, data) => {
    if (err) return res.status(500).send({ err: 'database failure' });
    var s = { entranceM: `${ entUltramove}`,
    firstM:`${fUltramove}`,
    secondM:`${sUltramove}`,
    thirdM:`${sound}` 
    };
    console.log('send!');
    res.json(s);
  });
};