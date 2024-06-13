const jwt = require('jsonwebtoken');
// const { log } = require('../controllers/auth.controller');
const authenticat = (req,res,next) =>{
    
        const token = req.cookies.token;
        // console.log(token);
        console.log(token);
        if(!token){
            return res.status(401).send({message:"unauth access"});
        }
        // const key = token.split(' ')[1];
        const decode = jwt.verify(token,process.env.JWT_TOKEN)
        if(!decode){
            return res.status(401).send({message:"unauth"});

        }
        req.id = decode.id;
        next();
}

module.exports = authenticat;