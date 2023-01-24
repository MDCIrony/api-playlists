import express, { type Application } from "express";
import type { Request, Response } from "express";
import { usersRouter } from "./routers";
import rutaCanciones from "./components/song/index";

//Instanciar express
const app: Application = express();


//Habilitar la lectura del {req.Body}
app.use(express.json());


app.use("/api/v1/songs",rutaCanciones)
//Ruta genérica/prueba
app.get('/express-playlist/', async (req: Request, res: Response): Promise<void> => {
    res.send('Hello World!')
  });

app.use('/express-playlist/', usersRouter)


//Se exporta el APP para iniciar el servidor
export default app;