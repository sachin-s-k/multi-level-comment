import { IComment } from "./IComment";


 export interface ICommentInteractor{
    createComment(postId:string,content:string,author:string, parentId?: string):Promise<IComment>
    getCommentsByPost(postId: string, limit?: number, offset?: number): Promise<IComment[]>;
    getReplies(commentId: string, limit?: number, offset?: number): Promise<IComment[]>;
 }