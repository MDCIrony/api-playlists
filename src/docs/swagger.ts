//Swagger imports
import * as swaggerUi from 'swagger-ui-express';
import swaggerJsdoc, { OAS3Definition } from 'swagger-jsdoc';
import * as dotenv from 'dotenv'

//Types
import type { Application } from 'express';
import type { Request, Response } from 'express';

//ENV
dotenv.config();
const PORT = process.env.PORT;


//Swagger options
const swaggerDefinition: OAS3Definition= {
    openapi: "3.0.0",
    info: {
        title: "Api Gestor de Playlists",
        version: "1.0.0",
        description: "API para gestionar música y playlists",
        contact: {
            name: "Miguel Castillo",
            url: "https://mdcastillo.me/",
            email: "miguel.backend@outlook.com",
        },
    },
    servers: [
        {
            url: `http://localhost:${PORT}/api/v1/`,
        },
    ],
    components:{
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
            }
        },
        schemas: {
            User: {
                type: "object",
                required: ["email", "password"],
                properties: {
                    name: {
                        type: "string",
                    },
                    email: {
                        type: "string",
                    },
                    password: {
                        type: "string",
                    },
                    date_born: {
                        type: "string",
                        format: "date-time",
                    }
                }
            }
        }
    },
    
};

const swaggerOptions: swaggerJsdoc.Options = {
    swaggerDefinition,
    apis: ["./src/routers/*.ts"],//De esta ruta se tomarán los comentarios para construir la documentación
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);


//
export default function swaggerDocs(app: Application, port: string){
    // Swagger page
    app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    //Docs in JSON Format
    app.get('docs.json', (req: Request, res: Response) => {
       res.setHeader("Content-Type", "application/json");
       res.send(swaggerSpec); 
    });

    console.log(`Docs available at http://localhost:${PORT}/api/docs`);
};