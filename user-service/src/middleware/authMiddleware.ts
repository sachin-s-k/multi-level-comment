import { Request,Response,NextFunction } from "express"
import  jwt from "jsonwebtoken"

const authMiddleware=(req:Request,res:Response,next:NextFunction)=>{
    
    const token =req.header('Authorization')

    if(!token){
        return res.status(401).json({message:"Access denied, no token provided."})
    }

    try{
        const decoded= jwt.verify(token, process.env.JWT_SECRET_KEY as string);

        (req as any).user=decoded

    }catch(error){
        res.status(400).json({message:'Invalid token'})

    }

}