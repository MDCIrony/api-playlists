import { Router } from "express";
import { songController } from "../../components";
import Middlewares from "../../middlewares";


//Instancias
const songRouter: Router = Router();
const Controller = new songController();
const Middleware = new Middlewares();


//Rutas
songRouter.get('/songs/', Middleware.verifyTokenSongs ,Controller.getSong);
songRouter.get('/songs/:id', Middleware.verifyTokenSongs, Controller.getIdSong);
songRouter.post('/songs/', Middleware.verifyToken, Controller.postSong);


//Export
export default songRouter;