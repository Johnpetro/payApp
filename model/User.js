const mongoose =  require('mongoose')

const userSchems =  mongoose.Schema({
   username:{
    type:String,
    require:true,
    
},
email:{
    type:String,
    require:true,
    unique:true
},
password:{
    type:String,
    require:true
},
phone:{
    type:Number,
    unique:true,
    require:true
}
});
const User =  mongoose.model('users',userSchems);

module.exports=User