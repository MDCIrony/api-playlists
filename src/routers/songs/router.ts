import { Router } from "express";
import * as Controller from "../../components/song/controller";

const rutaCanciones: Router = Router();

rutaCanciones.get('/songs/',Controller.getSong);
rutaCanciones.get('/songs/:id',Controller.getIdSong);
rutaCanciones.post('/songs/',Controller.postSong);


export default rutaCanciones;