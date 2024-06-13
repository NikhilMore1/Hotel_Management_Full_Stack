//Main file from where my project starts its execution
const express = require('express');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const cloudinary = require('cloudinary');
const bodyParser = require('body-parser');
const cors = require('cors');//helping you to connect frontend with backend
require('dotenv').config();   
require('./config'); //included DB Connection
const app = express();
var Namec = 'dkfakg7mw'; 
var key = '472725881526577';   
var sec = 'j5oQTkwakGjAq8jLCcDGiO2s7jM'; 
cloudinary.config({ 
    cloud_name: Namec,
    api_key: key,      
    api_secret:sec
}); 
     
 
mongoose.connect("mongodb://localhost:27017/ims" )   
.then(()=>console.log("conne"))
.catch(err=>console.log(err)); 
app.use(cookieParser()) 
    
app.get('/',(req,res)=>{    
    res.status(200).send('server are start')  
})   
app.use(express.json()); //parse data to json
app.use('/uploads', express.static('uploads')) //to access images in frontend
app.use(cors());//allow third party to ac cess my APIS
// app.use('/api/user', require('./routes/user.route')); 
app.use('/api/product', require('./routes/product.route')); 
app.use('/api/book',require('./routes/book.route'));
app.use('/api/user',require('./routes/registration.route'));
app.use('/api/nikhil',require('./routes/adminreg.route')); 
app.listen(process.env.PORT, () => {
    console.log(`Server listining to PORT ${process.env.PORT}`);
})
                