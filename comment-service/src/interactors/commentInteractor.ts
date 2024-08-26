import { IComment } from "../interfaces/IComment";
import { ICommentInteractor } from "../interfaces/ICommentInteractor";
import { ICommentRepo } from "../interfaces/ICommentRepo";

export class CommentInteractor implements ICommentInteractor{
    private commentRepository:ICommentRepo

    constructor(commentRepository:ICommentRepo){
        this.commentRepository=commentRepository

    }
    createComment(postId: string, content: string, author: string, parentId?: string): Promise<IComment> {
        
    }
    getCommentsByPost(postId: string, limit?: number, offset?: number): Promise<IComment[]> {
        
    }
    getReplies(commentId: string, limit?: number, offset?: number): Promise<IComment[]> {
        
    }
    
}