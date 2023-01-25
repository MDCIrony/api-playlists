import { Router } from "express";
import { usersController } from "../../components";
import { verifyToken } from "../../middlewares";


//instancias
const usersRouter: Router = Router();
const Controller = new usersController();


//Rutas
usersRouter.post('/users/register', Controller.registerUser);//Registrar
usersRouter.post('/users/login', Controller.loginUser);//Login
usersRouter.get('/users/list', verifyToken, Controller.getAllUsers);//DevolverUsuarios



//export
export default usersRouter;