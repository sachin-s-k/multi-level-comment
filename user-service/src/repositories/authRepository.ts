import User from "../entities/userEntity";
import { IAuthRepository } from "../interfaces/IAuthRepository";
import { IUser } from "../interfaces/IUser";



export class AuthRpository implements  IAuthRepository{

    async addUser(username: string, email: string,password:string): Promise<IUser> {

        const userData=await User.create({userName:username,email:email,password:password})

        return userData

        
    }

    async findByEmail(email: string): Promise<IUser|null> {

        const userData =await User.findOne({email:email})
        return userData

        
    }
}