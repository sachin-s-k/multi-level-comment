import { IComment } from "../interfaces/IComment";
import { ICommentRepo } from "../interfaces/ICommentRepo";


export class CommentRepositories implements ICommentRepo{
    async addComment(content: string, author: string, postId: string): Promise<IComment> {
        return 
        
    }
   async  findCommentsByPost(postId: string, limit?: number, offset?: number): Promise<IComment[]> {
    return []
        
    }
    async findReplies(commentId: string, limit?: number, offset?: number): Promise<IComment[]> {
        return []
        
    }
}