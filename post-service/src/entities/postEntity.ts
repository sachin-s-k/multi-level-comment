import mongoose, { Model } from "mongoose";
import { IPost } from "../interfaces/IPost";


const postSchema=new mongoose.Schema<IPost>({
    content:{type:String,required:true},
    author:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    commentsCount:{type:Number},
    isEdited:{type:Boolean}
},{timestamps:true})

export const Post:Model<IPost>=mongoose.model<IPost>('Post',postSchema)