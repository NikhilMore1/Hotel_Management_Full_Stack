
// const mongoose = require('mongoose');
// const Adminreg = mongoose.Schema({
//     Rname:{type:String,required:true},
//     lastName:{type:String,required:true},
//     password:{type:String,required:true},
//     pincode:{type:String,required:true},
//     district:{type:String,required:true},
//     State:{type:String,required:true},
//     ProfilePhoto:{type:String,required:true}   
// },{timestamps:true});
// const AdminRegi = mongoose.model('Nikhiladmin',Adminreg);
// module.exports = AdminRegi;

const mongoose = require('mongoose');
const aSchema = mongoose.Schema({
    userName:{type:String}, 
    lastName:{type:String},
    userNames:{type:String},
    mobile:{type:Number,required:true},
    password:{type:String,required:true},
    pincode:{type:Number,required:true},
    district:{type:String,required:true},
    state:{type:String,required:true},
    image:{type:String} ,
    role: { type: String, enum: ['user', 'admin'], default: 'user' }              
},{timestamps:true});
 
const aModel = mongoose.model('adim',aSchema);
module.exports = aModel;