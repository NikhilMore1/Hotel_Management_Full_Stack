const express = require('express');
const router = express.Router();
const productModel = require('../models/user');
const upload = require('../middlewares/fileupload');
const {addproduct,getAllUser} = require('../controllers/user.controller');
router.post('/',upload.single('image'),addproduct);
router.get('/',getAllUser);
// router.post('/',upload.single('image'),addproduct);
module.exports= router; 