import { Document } from "mongoose";

export interface IUser extends Document{
    userName:string,
    email:string,
    password:string,
    mobileNumber:string
    createdAt:Date,
    updateAt:Date
}