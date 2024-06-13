const regModel = require('../models/registration.model');
const bcrypt = require('bcrypt');
const cloudinary = require('cloudinary').v2;
const jwt = require('jsonwebtoken');
const fs = require('fs');

const register = async (req, res) => {
    try {
        const { name, username, mobile, email, password } = req.body;

        // Check if user already exists
        const existingUser = await regModel.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Upload image
        const result = await cloudinary.uploader.upload(req.file.path);
        fs.unlinkSync(req.file.path);

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new regModel({
            name,
            username,
            mobile,
            email,
            password: hashedPassword,
            image: result.secure_url,
        });

        const resp = await newUser.save();

        res.status(201).send({
            message: 'User created',
            user: resp,
            image_url: result.secure_url
        });

        console.log(resp);
    } catch (error) {
        console.error('Error during registration:', error);
        if (!res.headersSent) {
            return res.status(500).send({ error: 'An error occurred during registration' });
        }
    }
}


const loginUser = async (req, res) => {
    try { 
        const { username, mobile, password } = req.body;

        // Find user by username and mobile
        const user = await regModel.findOne({ username, mobile });
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });     
        }

        // Compare password   
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
 
        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, role: user.role});
        res.json({ token });
         
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Server error' });
    }
};
 
const getAlluser = async (req, res) => {
    try {
        const users = await regModel.find();
        res.json({ products: users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });  
    }
}

module.exports = {
    register,
    loginUser,
    getAlluser
}
