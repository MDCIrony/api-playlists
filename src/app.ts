import express, { type Application } from "express";
import type { Request, Response } from "express";

//Instanciar express
const app: Application = express();


//Habilitar la lectura del {req.Body}
app.use(express.json());


//Ruta genérica/prueba
app.get('/express-playlist/', async (req: Request, res: Response): Promise<void> => {
    res.send('Hello World!')
  });


//Se exporta el APP para iniciar el servidor
export default app;