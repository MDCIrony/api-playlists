import express, { type Application } from "express";
import type { Request, Response } from "express";
import * as Router from "./routers";
import path from "path";


//Swagger imports
import * as swaggerUi from 'swagger-ui-express';
import swaggerjsdoc from 'swagger-jsdoc';


//Swagger options
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Api Gestor de Playlists',
            version: '1.0.0',
            description: 'API para gestionar música y playlists',
            contact: {
                name: 'ExpressPlaylist',
                url: 'https://mdcastillo.me/',
                email: 'miguel.backend@outlook.com',
            },
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: [`${path.join(__dirname, './routers')}/*.ts`],
};

//Instanciar express
const app: Application = express();


//Middlewares
app.use(express.json());//Para poder recibir JSON
app.use('/api/docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerjsdoc(swaggerOptions))
);//Para la documentación



//* ********** RUTAS ********** *//

//Ruta de saludo y funcionamiento
app.get('/api/v1/', async (req: Request, res: Response): Promise<void> => { res.send('Hello World!') });


//Implementación de Routers
app.use('/api/v1/', Router.usersRouter);
app.use('/api/v1/', Router.songRouter)
app.use('/api/v1/', Router.playlistsRouter);


//Se exporta el APP para iniciar el servidor
export default app;