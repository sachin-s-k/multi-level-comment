import express from "express"
import { AuthRpository } from "../repositories/authRepository"
import { AuthInteractor } from "../interactors/authInteractor"
import { AuthController } from "../controllers/authController"

const authRouter=express.Router()

const authRepository=new AuthRpository()
const  authInteractor=new AuthInteractor(authRepository)
const authController=new AuthController(authInteractor)


authRouter.post('/register',authController.OnRegisterUser.bind(authController))
authRouter.post('/login',authController.OnLogin.bind(authController))


export default authRouter