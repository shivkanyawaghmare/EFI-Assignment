const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{type:String,required : true},
    email:{type:String,required :true},
    mobile:{type:Number,required :true},
    age:{type:Number,required :true},
    password:{type:String,required :true},
},
{timestamp : true}
)
const UserModels = mongoose.model('users',UserSchema)
module.exports = UserModels