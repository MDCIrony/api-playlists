import app from './app'
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import


//Importamos las variables de .env
dotenv.config()

//Instanciamos el puerto
const PORT = process.env.PORT
const APP_NAME = process.env.APP_NAME

//Activamos el servidor
app.listen(PORT, () => console.log(`Server init at http://localhost:${PORT}/${APP_NAME}`))