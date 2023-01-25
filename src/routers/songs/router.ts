import { Router } from "express";
import * as Controller from "../../components/song/controller";
import { verifyToken } from "../../middlewares";
import { verifyTokenSongs } from "../../middlewares/jwt";

const rutaCanciones: Router = Router();

rutaCanciones.get('/songs/', verifyTokenSongs ,Controller.getSong);
rutaCanciones.get('/songs/:id', verifyTokenSongs, Controller.getIdSong);
rutaCanciones.post('/songs/', verifyToken, Controller.postSong);


export default rutaCanciones;