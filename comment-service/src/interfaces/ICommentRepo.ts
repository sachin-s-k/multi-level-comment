import { IComment } from "./IComment"


export interface ICommentRepo{
     addComment(content:string,author:string,postId:string):Promise<IComment>
     findCommentsByPost(postId: string, limit?: number, offset?: number): Promise<IComment[]>;
     findReplies(commentId: string, limit?: number, offset?: number): Promise<IComment[]>;
}