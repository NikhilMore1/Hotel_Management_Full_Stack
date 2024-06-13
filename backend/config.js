//db connection using mongoose
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
.then(resp=>console.log('connect'))
.catch(err=>console.log('error'))
 