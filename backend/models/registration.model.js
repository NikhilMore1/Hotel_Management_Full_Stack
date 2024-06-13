const mongoose = require('mongoose');
const regSchema = mongoose.Schema({
    name:{type:String},
    username:{type:String}, 
    mobile:{type:Number},
    email:{type:String},
    password:{type:String},
    image:{type:String}
},{timestamps:true});
const regModel = mongoose.model("userpanel",regSchema);
module.exports = regModel;               