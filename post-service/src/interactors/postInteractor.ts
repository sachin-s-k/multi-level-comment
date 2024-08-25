import { Types } from "mongoose";
import { IPost } from "../interfaces/IPost";
import { IPostInteractor } from "../interfaces/IPostInteractor";
import { IPostRepository } from "../interfaces/IPostRepository";


export class PostInteractor implements IPostInteractor{

    private postRepository:IPostRepository
    constructor(postRepository:IPostRepository){
        this.postRepository=postRepository
    }
   async  createPost(content: string, author:string): Promise<IPost> {

        
        return this.postRepository.addPost(author,content)

        
    }
   async  getPost(author: string): Promise<IPost | null> {
        return this.postRepository.getPost(author)
        
    }
}