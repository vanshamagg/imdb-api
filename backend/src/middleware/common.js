const jwt=require('jsonwebtoken');
const load = require("dotenv").config();
if (load.error) throw load.error;


exports.requireSignin=(req,res,next)=>{
    const token=req.header('x-auth-token');
    if(!token){
        return res.status(401).json({msg:"no token found...."});
    }
    try{
       const decodetoken=jwt.verify(token,process.env.SecretKey);
       req.user=decodetoken;
       
    }catch{
      res.status(401).json({msg:"Token is invalid"});
    }
    next();
}
// exports.userMiddleware = (req, res, next) => {
//    // console.log(req.user.role);
//     if(req.user.role !== 'user'){
//         return res.status(400).json({ message: 'User access denied' })
//     }
//     next();
// }


exports.adminMiddleware = (req, res, next) => {
  //  console.log(req.user.role);
    if(req.user.role !== 'admin'){
        return res.status(400).json({ message: 'Admin access denied' })
    }
    next();
}
