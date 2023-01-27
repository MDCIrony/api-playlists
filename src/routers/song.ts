import { Router } from "express";
import { songController } from "../components";
import Middlewares from "../middlewares";


//Instancias
const songRouter: Router = Router();
const Controller = new songController();
const Middleware = new Middlewares();


//* ********** RUTAS ********** *//
// Todas las rutas llevan el prefijo /api/v1/

// GET /song/ -> Devolver todas las canciones
/**
 * @openapi
 * /song:
 *     get:
 *         tags:
 *             - song
 *         summary: "Lista las canciones."
 *         description: Devuelve la lista de todas las canciones públicas en la base de datos. Con la
 *                     autenticación se muestran las canciones privadas también.
 *         responses:
 *             200:
 *                 type: "json"
 *                 description: ""
 *             400:
 *                 description: "Error en la petición."
 */
songRouter.get('/song/', Middleware.verifyTokenSongs ,Controller.getSong);

// GET /songs/:id -> Devolver una cancion
songRouter.get('/song/:id', Middleware.verifyTokenSongs, Controller.getIdSong);

// POST /songs/ -> Crear una cancion
songRouter.post('/song/', Middleware.verifyToken, Controller.postSong);

//* ********** FUTURAS IMPLEMENTACIONES ********** *//

// PUT /songs/:id -> Modificar una cancion

// DELETE /songs/:id -> Eliminar una cancion

//Export
export default songRouter;