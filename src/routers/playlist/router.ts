import { Router } from "express";
import { playlistController } from "../../components";
import { verifyToken } from "../../middlewares";


//instancias
const playlistsRouter: Router = Router();
const Controller = new playlistController();


//rutas
playlistsRouter.post('/playlist/', verifyToken, Controller.createPlaylist);//CrearPlaylist
playlistsRouter.get('/playlist/',verifyToken, Controller.getAllPlaylists)//Todas las playlists
playlistsRouter.get('/playlist/:name',verifyToken, Controller.getUniquePlaylist);//PlaylistUnica


//export
export default playlistsRouter;