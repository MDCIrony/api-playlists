import express, { type Application } from "express";
import type { Request, Response } from "express";
import * as Router from "./routers";


//Instanciar express
const app: Application = express();

//Middlewares globales
app.use(express.json());//Para poder recibir JSON

//* ********** RUTAS ********** *//

//Ruta de saludo y prueba de funcionamiento
app.get('/api/v1/', async (req: Request, res: Response): Promise<void> => {
    res.send('Hello World!') 
});


//Implementación de Routers

app.use('/api/v1/', Router.usersRouter);
app.use('/api/v1/', Router.songRouter)
app.use('/api/v1/', Router.playlistsRouter);


//Se exporta el APP para iniciar el servidor
export default app;