import { Router } from "express";
import { userController } from "../../components";
import { verifyToken } from "../../middlewares";


//instancias
const usersRouter: Router = Router();
const Controller = new userController();


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
usersRouter.post('/users/register', Controller.registerUser);//Registrar
usersRouter.post('/users/login', Controller.loginUser);//Login
usersRouter.get('/users/list', verifyToken, Controller.getAllUsers);//DevolverUsuarios



//export
export default usersRouter;