import { Router } from "express";
import { userController } from "../components";
import Middlewares from "../middlewares";


//Instancias
const userRouter: Router = Router();
const Controller = new userController();
const Middleware = new Middlewares();


//* ********** RUTAS ********** *//
// Todas las rutas llevan el prefijo /api/v1/

// GET /users/list -> Devolver todos los usuarios (Solo para ADMIN)
/**
 * @openapi
 * /user/list:
 *     get:
 *         tags:
 *             - user
 *         summary: "Lista de usuarios registrados."
 *         description: Devuelve la data de todos los usuarios (Solo para ADMIN)
 *         responses:
 *             200:
 *                 type: "json"
 *                 description: ""
 *             400:
 *                 description: "Error en la petición."
 *         security:
 *             - bearerAuth: []
 */
userRouter.get('/user/list', Middleware.verifyToken, Controller.getAllUsers);

// POST /users/register -> Crear un usuario
/**
 * @openapi
 * /user/register:
 *     post:
 *         tags:
 *             - user
 *         summary: "Registrar un usuario."
 *         description: Crea un usuario nuevo con los datos enviados para poder hacer login en la APP. Devuelve un
 *                      json.
 *         requestBody:
 *             content:
 *                 application/json:
 *                     schema:
 *                         $ref: "#/components/schemas/User"
 *         responses:
 *             200:
 *                 type: "json"
 *                 description: ""
 *             400:
 *                 description: "Error en la petición."
 */
userRouter.post('/user/register', Controller.registerUser);

// POST /users/login -> Logear un usuario
/**
 * @openapi
 * /user/login:
 *     post:
 *         tags:
 *             - user
 *         summary: "Registrar un usuario."
 *         description: Crea un usuario nuevo con los datos enviados para poder hacer login en la APP. Devuelve un
 *                      un token para poder hacer peticiones a la API en las rutas song y playlist.
 *         requestBody:
 *             content:
 *                 application/json:
 *                     schema:
 *                         $ref: "#/components/schemas/User"
 *         responses:
 *             201:
 *                 type: "json"
 *                 description: "Login correcto."
 *             401:
 *                 description: "Correo o contraseña incorrectos."
 *             500:
 *                 description: "Error en la petición."
 *         security:
 *             - bearerAuth: []
 */
userRouter.post('/user/login', Controller.loginUser);


//* ********** FUTURAS IMPLEMENTACIONES ********** *//

// POST /users/logout -> Deslogear un usuario

// POST /users/logoutAll -> Deslogear todos los usuarios

// GET /users/me -> Devolver el usuario logeado

// PATCH /users/me -> Modificar el usuario logeado

// DELETE /users/me -> Eliminar el usuario logeado

// GET /users/:id -> Devolver un usuario

// PATCH /users/:id -> Modificar un usuario (Solo para ADMIN)

// DELETE /users/:id -> Eliminar un usuario (Solo para ADMIN)


//Export
export default userRouter;