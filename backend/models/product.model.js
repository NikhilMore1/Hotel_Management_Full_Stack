const mongoose = require('mongoose');
const productS = mongoose.Schema({
    id:{type:Number},
    name:{type:String,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:true},
    address:{type:String,required:true}, 
    rating:{type:String,required:true},
    image:{type:String}
},{timestamps:true});

const productM = mongoose.model('pro',productS);
module.exports = productM;