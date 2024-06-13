// // const cloudinary = require('cloudinary');
// // const fs = require('fs');
// // const AdminReg1 = require('../models/AdminReg.model');
// // const Aregister = async (req, res) => {
// //     try {
// //         const { Rname, lastName, password, pincode, district, state } = req.body;

// //         if (!req.file) {
// //             return res.status(400).send({ error: 'No file uploaded' });
// //         }

// //         const result = await cloudinary.uploader.upload(req.file.path);
// //         fs.unlinkSync(req.file.path);

// //         const newAdmin = new AdminReg1({
// //             Rname,
// //             lastName,
// //             password,
// //             pincode,
// //             district,
// //             state,
// //             ProfilePhoto: result.secure_url
// //         });

// //         const resp = await newAdmin.save();

// //         res.status(201).send({
// //             message: 'New admin created',
// //             Admin: resp,
// //             image_url: result.secure_url
// //         });

// //         console.log(resp);
// //     } catch (error) {
// //         console.log(error);
// //         return res.status(500).send({ error: 'An error occurred' });
// //     }
// // };

// // const getAllAdmin = async (req, res) => {
// //     try {
// //         const resp = await AdminReg1.find();
// //         res.status(200).send({ Admins: resp });
// //     } catch (error) {
// //         console.log(error);
// //         return res.status(500).send({ error: 'An error occurred' });
// //     }
// // };

// // module.exports = {
// //     Aregister,
// //     getAllAdmin
// // };

// const cloudinary = require('cloudinary');
// const fs = require('fs');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const aModel = require('../models/amodel.model');
 
// const aregister = async (req,res)=>{
//     try{
//         const {userName,lastName,userNames,mobile,password,pincode,district,state} = req.body;
//         const existingUser = await aModel.findOne({ userNames });
//         if (existingUser) { 
//             return res.status(400).json({ error: 'User already exists' });
//         }
//         const filename = req.file.filename;
//         const result = await cloudinary.uploader.upload(req.file.path);
//         fs.unlinkSync(req.file.path);
//         res.status(201).send({
//             message:'image sended',
//             image_url:result.secure_url
//         })
//         const newAdmin = new aModel({
//             userName,lastName,userNames,mobile,password,pincode,district,state,image:result.secure_url
//         })
//         const resp = newAdmin.save();
//         res.status(201).send({
//             message:'admin are created',
//             prod:resp
//         })
//         console.log(resp);
//     }catch(error){
//         console.log(error);
//         return res.status(500).send({error:'error occured'});
//     }
// }


// const getAllAdmins = async (req,res)=>{
//     try{
//         const resp = await aModel.find();
//         res.status(200).send({prods:resp})
//     }catch(error){
//         console.log(error);
//         return res.status(500).send({error:"error occured"})
//     }
// }

// const loginUser = async (req, res) => {
//     try {
//         const { userNames,mobile, password } = req.body;

//         const user = await aModel.findOne({ userNames });
//         if (!user) {
//             return res.status(400).json({ error: 'Invalid credentials' });
//         }
//         const mob = await aModel.findOne({mobile});
//         if(!mob){
//             return res.status(400).json({error:'invalid mobile'});
//         }

//         const isMatch = await bcrypt.compare(password, aModel.password);
//         if (!isMatch) {
//             return res.status(400).json({ error: 'Invalid credentials' });
//         }

//         const token = jwt.sign({ id: aModel._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

//         res.json({ token });
//     } catch (error) {
//         res.status(500).json({ error: 'Server error' });
//     }
// };

// module.exports = {
//     aregister,
//     getAllAdmins,
//     loginUser
// }



const cloudinary = require('cloudinary');
const fs = require('fs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const aModel = require('../models/amodel.model');

// Register Admin
const aregister = async (req, res) => {  
    try {
        const { userName, lastName, userNames, mobile, password, pincode, district, state,role='user' } = req.body;
        
        // Check if user already exists
        const existingUser = await aModel.findOne({ userNames }); 
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Upload image
        const result = await cloudinary.uploader.upload(req.file.path);
        fs.unlinkSync(req.file.path);  

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
   
        // Create new admin
        const newAdmin = new aModel({
            userName,
            lastName,
            userNames,
            mobile,
            password: hashedPassword,
            pincode,
            district,
            state,
            image: result.secure_url,
            role 
        });

        const resp = await newAdmin.save();

        res.status(201).send({  
            message: 'Admin created',
            admin: resp,
            image_url: result.secure_url
        });

        console.log(resp);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: 'An error occurred' });
    }
};

// Get all admins
const getAllAdmins = async (req, res) => {
    try {
        const resp = await aModel.find();
        res.status(200).send({ admins: resp });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: 'An error occurred' });
    }   
};

// Login User
const loginUser = async (req, res) => {
    try { 
        const { userNames, mobile, password } = req.body;

        // Find user by username and mobile
        const user = await aModel.findOne({ userNames, mobile });
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

module.exports = {
    aregister,
    getAllAdmins,
    loginUser
};
