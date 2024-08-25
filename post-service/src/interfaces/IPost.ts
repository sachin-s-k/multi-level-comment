import { Document,Types } from "mongoose"

export interface IPost extends Document{
    content:string,
    author:Types.ObjectId,
    isEdited: boolean,
    commentsCount: number; 
    createdAt?:Date,
    updatedAt?:Date
}
