const express = require('express');
const authenticat = require('../middleware/auth');
const userProfile = require('../controllers/user.controller');
const router = express.Router();

router.get('/prof',authenticat,userProfile);

module.exports = router;