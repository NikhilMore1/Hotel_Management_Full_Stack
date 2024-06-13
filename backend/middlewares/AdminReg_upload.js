const multer = require('multer');
const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null, 'uploads/'); // Ensure this directory exists
    },
    filename:(req, file, cb) =>{
        const uniqueSuffix=Date.now();
        const fileExtention= file.originalname.split('.').pop();
        cb(null,file.fieldname+'-'+uniqueSuffix+'.'+fileExtention);
    }
})
const upload = multer({ storage: storage,
    limits:{
        fileSize:2024*2024*200
    }
 })

module.exports = upload;
