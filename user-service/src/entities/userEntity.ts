import mongoose,{Model} from "mongoose";
import { IUser } from "../interfaces/IUser";

const userSchema=new mongoose.Schema<IUser>({
    userName:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
},{timestamps:true})


const User:Model<IUser>=mongoose.model<IUser>('User',userSchema)

export default User