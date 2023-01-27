import { Router } from "express";
import { userController } from "../../components";
import Middlewares from "../../middlewares";


//Instancias
const userRouter: Router = Router();
const Controller = new userController();
const Middleware = new Middlewares();


//Rutas
//Create user
/**
 * @swagger
 * components:
 *  schemas:
 *     User:
 *
 * 
 * 
 */


//Rutas
userRouter.post('/users/register', Controller.registerUser);//Registrar
userRouter.post('/users/login', Controller.loginUser);//Login
userRouter.get('/users/list', Middleware.verifyToken, Controller.getAllUsers);//DevolverUsuarios



//Export
export default userRouter;