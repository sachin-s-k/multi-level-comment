import User from "../entities/userEntity";
import { IAuthRepository } from "../interfaces/IAuthRepository";
import { IUser } from "../interfaces/IUser";



export class AuthRpository implements  IAuthRepository{

    async addUser(userName: string, email: string,password:string,mobileNumber:string): Promise<IUser> {

        const userData=await User.create({userName,email,password,mobileNumber})

        return userData

        
    }

    async findByEmail(email: string): Promise<IUser|null> {

        const userData =await User.findOne({email:email})
        return userData

        
    }
}