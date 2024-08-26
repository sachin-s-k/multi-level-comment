import { ICommentInteractor } from "../interfaces/ICommentInteractor";


export class CommentController{

    private commentInteractor:ICommentInteractor
    constructor(commentInteractor:ICommentInteractor){
        this.commentInteractor=commentInteractor
    }
    
    OnCreateComment(){



    }

    GetCommentByPost(){

    }


}