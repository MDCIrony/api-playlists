import { Router } from "express";
import { playlistController } from "../components";
import Middlewares from "../middlewares";


//Instancias
const playlistRouter: Router = Router();
const Controller = new playlistController();
const Middleware = new Middlewares();


//* ********** RUTAS *********//
// Todas las rutas estan protegidas por el middleware de verificación de token
// Todas las rutas llevan el prefijo /api/v1/

// GET /playlist/ -> Devolver todas las playlists
playlistRouter.get('/playlist/',Middleware.verifyToken, Controller.getAllPlaylists);

// GET /playlist/:name -> Devolver una playlist
playlistRouter.get('/playlist/:name',Middleware.verifyToken, Controller.getUniquePlaylist);

// POST /playlist/ -> Crear una playlist
playlistRouter.post('/playlist/', Middleware.verifyToken, Controller.createPlaylist);

//* ********** FUTURAS IMPLEMENTACIONES ********** *//

// POST /playlist/:name/song -> Añadir una cancion a una playlist (futura implementación ***)

// PUT /playlist/:name -> Modificar una playlist (futura implementación ***)

// DELETE /playlist/:name -> Eliminar una playlist (futura implementación ***)

// DELETE /playlist/:name/song -> Eliminar una cancion de una playlist (futura implementación ***)

//Export
export default playlistRouter;