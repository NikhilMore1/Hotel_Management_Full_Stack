const productM = require('../models/product.model');
const cloudinary = require('cloudinary');
const fs = require('fs');
const addproductss = async (req,res)=>{
    try{
        const {id,name,price,description,address,rating} = req.body;   
        const existing = await productM.findOne({name});
        if(existing){
            return res.status(400).json({message:"Hotel are already registerd in ur database.."});
        }
        const filename = req.file.filename;
        const result = await cloudinary.uploader.upload(req.file.path);
        fs.unlinkSync(req.file.path);
        res.status(201).send({
            message:'image cloude ',
            image_url:result.secure_url
        })
        const newProducts = new productM({
            id,name,price,description,address,rating,image:result.secure_url
        })
        const resp = newProducts.save();
        res.status(201).send({
            message:'new product',
            product:resp
        })
        console.log(resp); 
    }catch(error){
        console.log(error);
        return res.status(500).send({error:"error occured"})
    }
}

const getAllProducts=async (req, res) => {
    try {
        const resp= await productM.find();
        res.status(200).send({ products:resp })
    } catch (error) {     
        console.log(error);
        return res.status(500).send({error:"Error Occured"})
    }
}
const getProductById = async (req, res) => {  
    try { 
        const productId = req.params.id;
        const product = await productM.findById(productId);
        
        if (!product) {
            return res.status(404).send({ error: "Product not found" });
        }
        
        res.status(200).send({ product });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: "Error occurred" });
    }
}

module.exports = {
    addproductss,
    getAllProducts,
    getProductById
}