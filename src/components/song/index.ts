import { Router } from "express";
import { getCanciones, postCanciones, getIdSong} from "./controller";
// Importar las funciones

const rutaCanciones: Router = Router()

rutaCanciones.get('/',getCanciones)
rutaCanciones.get('/:id',getIdSong)
rutaCanciones.post('/',postCanciones)


export default rutaCanciones