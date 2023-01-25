import app from './app'
import * as dotenv from 'dotenv'


//Importamos las variables de .env
dotenv.config()

//Instanciamos el puerto
const PORT = process.env.PORT

//Activamos el servidor
app.listen(PORT, () => console.log(`Server init at http://localhost:${PORT}/api/v1/`))