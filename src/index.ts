import app from './app'
import * as dotenv from 'dotenv'
import swaggerDocs from "./docs/swagger";


//Importamos las variables de .env
dotenv.config()


//Instanciamos el puerto
const PORT: string = process.env.PORT || '5000';


//Activamos el servidor
app.listen(PORT, () =>  {
    console.log(`Server init at http://localhost:${PORT}/api/v1/`);
    swaggerDocs(app, PORT);
});