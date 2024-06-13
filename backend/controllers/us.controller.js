const userModel = require('../models/registration.model');

const userProfile = async(req,res)=>{
    try{
        const id = req.id;
        const user = await userModel.findOne({_id:id});
        res.status(200).send(user);
    }catch(err){
        res.status(500).send({message:"internal error"});
    }
}

module.exports = userProfile;