import { Router } from "express";
import { getCanciones } from "./controller";
// Importar las funciones

const rutaCanciones: Router = Router()

rutaCanciones.get('/',getCanciones)
rutaCanciones.get('/',)
rutaCanciones.post('/',)


export default rutaCanciones