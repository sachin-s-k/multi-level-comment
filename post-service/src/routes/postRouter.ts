import express,{ Express } from "express"
import { PostRepository } from "../repositories/postRepository"
import { PostInteractor } from "../interactors/postInteractor"
import { PostController } from "../controllers/postController"

const postRouter=express()

const postRepository=new PostRepository()
const postInteractor=new PostInteractor(postRepository)
const postController=new PostController(postInteractor)


postRouter.get('/',postController.OnGetPosts.bind(postController))
postRouter.post('/',postController.OnCreatePost.bind(postController))