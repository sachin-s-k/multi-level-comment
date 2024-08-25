import mongoose, { Types ,} from "mongoose";
import { IPost } from "../interfaces/IPost";
import { IPostRepository } from "../interfaces/IPostRepository";
import { Post } from "../entities/postEntity";


export class PostRepository implements IPostRepository{
   async  addPost(author: string, content: string): Promise<IPost> {

    const postData=await Post.create({author,content})

    return postData
        
    }

   async  getPost(userId:string): Promise<IPost|null> {

       const posts=await Post.findOne({author:userId})

       return posts
        
    }
}