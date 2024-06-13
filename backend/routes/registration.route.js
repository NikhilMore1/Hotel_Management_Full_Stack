const express = require('express');
const { register, getAlluser, loginUser } = require('../controllers/registration.controller');

const router = express.Router();
const up = require('../middlewares/AdminReg_upload');
router.post('/',up.single('image'),register);
router.get('/',getAlluser);
router.post('/log',loginUser);
module.exports = router;
   