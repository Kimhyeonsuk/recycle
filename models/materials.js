var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var materialSchema = new Schema({
    sensor:String,
    value:Number,
    floor:Number
},{versionKey:false});


var Mat=module.exports = mongoose.model('material', materialSchema);
// module.exports.getData=function(dd){
//     Temp.find((err,data)=>{
//         if(err)return dd.status(500).send({err:'database failure'});
//         dd.json(data);
//     });
// }
module.exports.showData=function(sendor){
    Mat.find((err,data)=>{
        console.log(data);
        if(err)return sendor.status(500).send({err:'database failure'});
        sendor.json(data);
    });
  };
module.exports.insertData=function(name,val,floor){
    var query={sensor:name};
    var operator={sensor:name,value:val,floor:floor};
    var option={upsert:true};
      Nature.replaceOne(query,operator,option,function(err,upserted){
      if(err){
        console.log(err);
      }
      else{
        console.log('updated successfully');
      }
    });
  };
module.exports.insertData=function(name,val){
  var query={name:name};
  var operator={name:name,value:val};
  var option={upsert:true};
    Nature.replaceOne(query,operator,option,function(err,upserted){
    if(err){
      console.log(err);
    }
    else{
      console.log('updated successfully');
    }
  });
};

// User.findOne({email:request.body.email,password:request.body.password},(err,users)=>{
//     if(err)return response.status(500).send({error: 'database failure'});
//     if(!users)return response.send('이메일 또는 패스워드가 일치하지않습니다');
//     response.send('로그인 성공!'+users.email);
// });
module.exports.extractData=function(res){
    Nature.findOne({name:"rain"},(err,data)=>{
                if(err)return res.status(500).send({err:'database failure'});
                var a={boilerStatus:'ON'};
                var b={boilerStatus:'OFF'};
                if(data.value==0){
                    res.json(a);
                }
                else{
                    res.json(b);
                }
                // res.json(data.value);
            });
};