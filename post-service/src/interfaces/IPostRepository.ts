import { Types } from "mongoose"
import { IPost } from "./IPost"

export interface IPostRepository{
    addPost(author:string,content:string):Promise<IPost>
    getPost(userId:string):Promise<IPost|null>

}