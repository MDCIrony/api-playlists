import { Router } from "express";
import { playlistsController } from "../../components";
import { verifyToken } from "../../middlewares";


//instancias
const playlistsRouter: Router = Router();
const Controller = new playlistsController();


//rutas
// playlistsRouter.post('/playlist/', Controller.registerUser);//CrearPlaylist
playlistsRouter.get('/playlist/', Controller.getAllPlaylists)//Todas las playlists
// playlistsRouter.get('/playlist/:name', Controller.getAllUsers);//PlaylistUnica


//export
export default playlistsRouter;