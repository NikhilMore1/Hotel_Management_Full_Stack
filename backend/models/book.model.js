const mongoose = require('mongoose');
const bookSchema = mongoose.Schema({
    userName:{type:String},
    hotelName:{type:String},
    amount:{type:Number,required:true},
    rooms:{type:Number,required:true},
    image:{type:String}
},{timestamps:true}); 
 
const bookModel = mongoose.model('book',bookSchema);
module.exports = bookModel;     