const productModel = require('../models/user');
const addproduct = async (req,res)=>{
    try {
        const {name,avail,price,address} = req.body;
        const filename = req.file.filename;
        const newProductModel = new productModel({
            name,avail,price,address,image:filename
        })
        const resp =await newProductModel.save();
        res.status(201).send({
            message:"created",
            product:resp
        });
    } catch (error) {
        console.log({error:"error created"});
        
    }
}
const getAllUser  = async(req,res)=>{
    try {
        const resp= await productModel.find();
        res.status(200).send({ products:resp })
    } catch (error) {
        console.log(error);
        return res.status(500).send({error:"Error Occured"})
    }
}
module.exports={
    addproduct,
    getAllUser
}