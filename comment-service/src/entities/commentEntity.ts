import  mongoose, { Model }  from "mongoose";
import { IComment } from "../interfaces/IComment";

const commentSchema=new mongoose.Schema<IComment>({

    content:{type:String,required:true},
    authorId:{type:mongoose.Schema.Types.ObjectId, ref:'User',required:true},
    parentComment:{type:mongoose.Schema.Types.ObjectId, ref:'Comment',default:null},
    replies:[{type:mongoose.Schema.Types.ObjectId, ref:'Comment'}]

})

export const Comments:Model<IComment>=mongoose.model<IComment>('Comment',commentSchema)