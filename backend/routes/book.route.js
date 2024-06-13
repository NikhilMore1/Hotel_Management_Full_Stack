const express = require('express');
const { book, getAllBookings, deleteBooking } = require('../controllers/book.controller');
const up = require('../middlewares/book_upload')
const router = express.Router();
router.post('/',up.single('image'),book);
router.get('/',getAllBookings);
router.get('/:id',deleteBooking); 
module.exports = router;  