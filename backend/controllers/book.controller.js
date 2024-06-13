const cloudinary = require('cloudinary');
const fs = require('fs');
const bookModel = require('../models/book.model');
//i3HW2Nvr2DweJG3e
const book = async (req,res)=>{
    try{
        const {userName,hotelName,amount,rooms} = req.body;
        const filename = req.file.filename;
        const result = await cloudinary.uploader.upload(req.file.path);
        fs.unlinkSync(req.file.path); 
        res.status(201).send({
            message:'image cloude ', 
            image_url:result.secure_url
        })
        const newBooking = new bookModel({
            userName,hotelName,amount,rooms,image:result.secure_url
        })
        const resp = newBooking.save(); 
        res.status(201).send({
            message:'booking are created',
            product:resp
        })
        console.log(resp);

    }catch(error){
        console.log(error);
        return res.status(500).send({error:'error occured'});
    } 
}  
 
const getAllBookings=async (req, res) => {
    try { 
        const resp= await bookModel.find();
        res.status(200).send({ products:resp })
    } catch (error) {
        console.log(error);
        return res.status(500).send({error:"Error Occured"}) 
     }
} 


const deleteBooking = async (req, res) => {
    try {
        const bookingId = req.params.id;
        const booking = await bookModel.findByIdAndDelete(bookingId);
        if (!booking) {
            return res.status(404).send({ message: "Booking not found" });
        }
        res.status(200).send({ message: "Booking deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: "Error Occurred" });
    }
};
module.exports = {
    book,
    getAllBookings,
    deleteBooking
}