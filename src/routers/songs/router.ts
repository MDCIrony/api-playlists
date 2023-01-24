import { Router } from "express";
import { getCanciones, postCanciones, getIdSong} from "../../components/song/controller";

const rutaCanciones: Router = Router()

rutaCanciones.get('/',getCanciones)
rutaCanciones.get('/:id',getIdSong)
rutaCanciones.post('/',postCanciones)


export default rutaCanciones