import { IAuthInteractor } from "../interfaces/IAuthIteractor";
import { Request,Response } from "express";

export class AuthController{

    private authInteractor:IAuthInteractor

    constructor(authInteractor:IAuthInteractor){
        this.authInteractor=authInteractor
    }

   async  OnRegisterUser(req:Request,res:Response){

      try{
console.log(req.body,'contr');

        const {username,email,password,mobileNumber}=req.body
        const token=await this.authInteractor.registerUser(username,email,password,mobileNumber)
        return res.json(token)

      }
      catch(error:any){
        res.status(400).json({message:error.message})


      }
             
           
             
    }

    async OnLogin(req:Request,res:Response){
        try{
        const {email,password}=req.body
        const userData=await this.authInteractor.logIn(email,password)
        return res.json(userData)


        }catch(error:any){
            console.log(error);
            res.status(400).json({message:error.message})
            
            
        }
    }

     
    


    
}