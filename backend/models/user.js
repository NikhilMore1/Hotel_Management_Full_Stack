//name,email,mobile,address
const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name:{type:String,required:true},
    avail:{type:Number,required:true},
    price:{type:Number,required:true},
    address:{type:String,required:true},
    image:{type:String,required:true}
},{timestamps:true});

const productModel = mongoose.model('product',productSchema);
module.exports = productModel;