var mongoose = require('mongoose');
var Schema = mongoose.Schema;




var userSchema = new Schema({
    name: String,
    email:{type:String,required:true,unique:true},
    password:String,
},{versionKey:false});





var User=module.exports = mongoose.model('user',userSchema);


module.exports.showUser=function(response){
    User.findOne({email:"philippe10@naver.com"},(err,users)=>{
        if(err)return res.status(500).send({error:'database failure'});
        response.json(users);
    });
}

module.exports.findUser=function(request,response){
    User.findOne({email:request.body.email,password:request.body.password},(err,users)=>{
        if(err)return response.status(500).send({error: 'database failure'});
        if(!users)return response.send('이메일 또는 패스워드가 일치하지않습니다');
        response.send('로그인 성공!'+users.email);
    });
}

module.exports.insertUser=function(request,response){
    var user=new User();
      user.name=request.body.name;
      user.email=request.body.email;
      user.password=request.body.password;
      user.save((err)=>{
        if(err){
          console.log(err);
          response.json({result: 0});
          return ;
        }
        response.json({result:3});
      });
}

