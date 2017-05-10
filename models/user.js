var mongoose= require('mongoose');

var UserSchema= new mongoose.Schema({
  name:{type: String},
  data:{type: String},
  created_at:{type:Date, default:Date.now},
});


module.exports=mongoose.model('User', UserSchema);
