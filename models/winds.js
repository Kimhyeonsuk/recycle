var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var windSchema = new Schema({
    name: String,
    value:Number,
    last_Update_h: Number,
    last_Update_m: Number
},{versionKey:false});



var Wind=module.exports = mongoose.model('wind', windSchema);
module.exports.getData=function(dd){
    Wind.find((err,data)=>{
        if(err)return dd.status(500).send({err:'database failure'});
        dd.json(data);
    });
}

module.exports.insertData=function(ff){
        var query={name:'wind'};
        var date=new Date();
        var operator={name:'wind',value:10,last_Update_h:date.getHours(),last_Update_m:date.getMinutes()};
        var option={upsert:true};
        Wind.replaceOne(query,operator,option,function(err,upserted){
          if(err){
            console.log(err);
          }
          else{
            console.log('updated successfully');
          }
        });
    ff.send('hello');
};


