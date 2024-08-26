import { IUser } from "./IUser";

export interface IAuthRepository{
    addUser(username:string,email:string,password:string,mobileNumber:string):Promise<IUser>
    findByEmail(email:string):Promise<IUser|null>
}