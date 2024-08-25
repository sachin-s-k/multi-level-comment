import { IPostInteractor } from "../interfaces/IPostInteractor";
import { Request,response,Response } from "express";

export class PostController{

    private postInteractor:IPostInteractor
    constructor(postInteractor:IPostInteractor){
        this.postInteractor=postInteractor
    }

    OnCreatePost(req:Request,res:Response){

        const {author,content}=req.body
        const postData=this.postInteractor.createPost(content,author)

    }

    OnGetPosts(req:Request,res:Response){

        const postData=this.postInteractor.getPost(req.body)

    }

}