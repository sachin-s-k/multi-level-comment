import { Types } from "mongoose";
import { IPost } from "./IPost";



export interface IPostInteractor{
     createPost(content:string,author:string,):Promise<IPost>,
     getPost(author:string):Promise<IPost|null>
}