# Proyecto: Express-playlist

## Para ejecutar en local:
### 1- Instalar dependencias: ```npm install```
### 2- Configurar .env (PORT; APP_NAME; DATABASE_URL; SECRET_TOKEN)
### 3- Ejecutar las migraciones con prisma ```npx prisma migrate dev```
### 4- Ejecutar sv ```npm run dev``` 

## Obtener un SECRET_TOKEN:
### Ingresar a node ```node```
### Ejecutar el comando: ```require("crypto").randomBytes(64).toString('hex')```
### Copiar el token en la variable SECRET_TOKEN en .env