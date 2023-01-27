import { Router } from "express";
import { songController } from "../../components";

import { verifyToken } from "../../middlewares";
import { verifyTokenSongs } from "../../middlewares/jwt";

const rutaCanciones: Router = Router();
const Controller = new songController();

rutaCanciones.get('/songs/', verifyTokenSongs ,Controller.getSong);
rutaCanciones.get('/songs/:id', verifyTokenSongs, Controller.getIdSong);
rutaCanciones.post('/songs/', verifyToken, Controller.postSong);


export default rutaCanciones;