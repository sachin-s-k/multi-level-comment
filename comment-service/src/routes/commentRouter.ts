import express from "express"
import { CommentRepositories } from "../repositories/commentRepositories"
import { CommentInteractor } from "../interactors/commentInteractor"
import { CommentController } from "../controllers/commentController"


const commentRouter=express.Router()


const commentRepository=new CommentRepositories()
const commentInteractor=new  CommentInteractor(commentRepository)
const commentController=new CommentController(commentInteractor)


commentRouter.post('/create-comment',commentController.OnCreateComment.bind(commentController))
commentRouter.get('/get-comment-',commentController.GetCommentByPost.bind(commentController))
