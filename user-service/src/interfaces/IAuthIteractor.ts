import { IUser } from "./IUser";


export interface IAuthInteractor{
    registerUser(username:string,email:string,password:string):Promise<string>
    logIn(email:string,password:string):Promise<IUser|null>
}