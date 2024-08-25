import { IAuthInteractor } from "../interfaces/IAuthIteractor";
import { Request,Response } from "express";

export class AuthController{

    private authInteractor:IAuthInteractor

    constructor(authInteractor:IAuthInteractor){
        this.authInteractor=authInteractor
    }

   async  OnRegisterUser(req:Request,res:Response){

      try{

        const {username,email,password}=req.body
        const userData=await this.authInteractor.registerUser(username,email,password)
        return res.json(userData)

      }
      catch(error){

      }
             
           
             
    }

    async OnLogin(req:Request,res:Response){
        try{
        const {email,password}=req.body
        const userData=await this.authInteractor.logIn(email,password)
        return res.json(userData)


        }catch(error){
            console.log(error);
            
            
        }
    }

     
    


    
}