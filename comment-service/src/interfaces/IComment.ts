import { Document, Types } from "mongoose"

export interface IComment extends Document{
    content:string,
    authorId:Types.ObjectId,
    postId:string,
    parentComment:string|null,
    replies:[{authorId:Types.ObjectId}]
}