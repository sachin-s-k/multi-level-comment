import User from "../entities/userEntity";
import { IAuthRepository } from "../interfaces/IAuthRepository";
import { IUser } from "../interfaces/IUser";



export class AuthRepository implements  IAuthRepository{

    async addUser(userName: string, email: string,password:string,mobileNumber:string): Promise<any> {
console.log('enterd');


const userData= await User.create({userName,email,password,mobileNumber});

            console.log(userData,'jojiojkpkkpko')
            return userData
       


      

        
    }

    async findByEmail(email: string): Promise<any> {

        
        const userData =await User.findOne({email});
        if (userData) {
     
            return userData;
        } else {
            
         
            return userData
        }
    

        
    }
}