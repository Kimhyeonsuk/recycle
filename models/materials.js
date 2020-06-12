var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var materialSchema = new Schema({
  sensor: String,
  value: Number,
}, { versionKey: false });
var Mat = module.exports = mongoose.model('sensor', materialSchema);
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
    }
  });
};
module.exports.extractData = function (res) {
 var resultMaterial;
  Mat.find( (err, data) => {
    if (err) return res.status(500).send({ err: 'database failure' });
  

    if(data[0].value<1023){
      resultMaterial="Metal"
    }
    else if(data[1].value>0&&data[1].value<400){
      resultMaterial="trash";
    }
    else if(data[1].value>=400&&data[1].value<650){
      resultMaterial="plastic";
    }
    else if(data[1].value>=650){
      resultMaterial="glass";
    }

    var s = { material:`${resultMaterial}`
    };
    console.log('전달하는 내용',resultMaterial);
    res.json(s);
  });
};