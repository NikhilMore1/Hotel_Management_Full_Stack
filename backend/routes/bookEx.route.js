const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bookModel = require('../models/book.model'); // Adjust path as needed

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API endpoint to handle form submission
app.post('/api/bookings', async (req, res) => {
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
}); 