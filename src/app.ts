import express, { type Application } from "express";
import type { Request, Response } from "express";
import { usersRouter, playlistsRouter } from "./routers";
import rutaCanciones from "./components/song/index";



//Instanciar express
const app: Application = express();


//Habilitar la lectura del {req.Body}
app.use(express.json());


//Ruta genérica/prueba --Borrar después
app.get('/api/v1/', async (req: Request, res: Response): Promise<void> => {
    res.send('Hello World!')
});


//Implementación de Routers
app.use('/api/v1/', usersRouter);
app.use("/api/v1/songs",rutaCanciones)
app.use('/api/v1/', playlistsRouter);

//Se exporta el APP para iniciar el servidor
export default app;