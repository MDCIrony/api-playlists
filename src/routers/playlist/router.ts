import { Router } from "express";
import { playlistController } from "../../components";
import Middlewares from "../../middlewares";


//Instancias
const playlistRouter: Router = Router();
const Controller = new playlistController();
const Middleware = new Middlewares();


//Rutas
playlistRouter.post('/playlist/', Middleware.verifyToken, Controller.createPlaylist);//CrearPlaylist
playlistRouter.get('/playlist/',Middleware.verifyToken, Controller.getAllPlaylists)//Todas las playlists
playlistRouter.get('/playlist/:name',Middleware.verifyToken, Controller.getUniquePlaylist);//PlaylistUnica


//Export
export default playlistRouter;