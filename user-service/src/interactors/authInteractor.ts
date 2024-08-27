import { IAuthInteractor } from "../interfaces/IAuthIteractor";
import { IAuthRepository } from "../interfaces/IAuthRepository";
import { IUser } from "../interfaces/IUser";
import { AuthRepository } from "../repositories/authRepository";
AuthRepository
import { hashPassword,comparePassword} from "../utils/encryption";
import jwt from 'jsonwebtoken'
export class  AuthInteractor implements IAuthInteractor{

    private AuthRepository:IAuthRepository
    constructor(AuthRepository:IAuthRepository){
        this.AuthRepository=AuthRepository
    }



     async registerUser(username: string, email: string, password: string,mobileNumber:string): Promise<string> {


        const existingUser=await this.AuthRepository.findByEmail(email);
        if(existingUser){
console.log('exuttt');

         throw new Error('User with this email already exists')
        }else{
            console.log('no error');
            
            const encryptedPassword:string=await hashPassword(password)

            const userData=await this.AuthRepository.addUser(username,email,encryptedPassword,mobileNumber)
      
              return this.generateToken(userData.userName,userData.email,userData._id)

        }

   
         
     }

     async logIn(email: string,password:string): Promise<string | null> {
        const userData=await this.AuthRepository.findByEmail(email)
        if(!userData|| !(await comparePassword(password,userData.password))){
            throw new Error ('Invalid email or password')
        }

        return this.generateToken(userData.userName,userData.email,userData._id)

         
     }

     private generateToken(username:string,email:string,userId:any){
        return jwt.sign({id:userId,username,email},process.env.JWT_SECRET_KEY as string,{expiresIn:'1h'})

     }
    
    
}