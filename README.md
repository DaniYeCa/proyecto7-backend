#Proyecto 7, Cursos

Modelos para cursos, materias y usuarios
CRUD completo para los modelos
Utilidades
Crear, Postear y eliminar materias.
Crear, Postear, Actualizat y eliminar cursos.
Crear, Postear, Actualizat y eliminar usuarios.
Postear las diferetes materias en los cursos.
Tecnologias
Visual Studio Code - El mejor editor de código.
Node.js - Para el entorno de construcción de Javascript.
Dotenv - Para la carga de variables .env.
Express - Nuestro framework de trabajo de backend.
Mongoose - Para crear nuestros modelos en la base de datos.
[Nodemon] - Para el desarrollo de nuestro backend.
JavaScript

Node.js

Express

mongoDB

Istalación
Este proyecto requiere de Node.js v18+ para arrancar

Para instalarlo deberemos comenzar por los siguientes comando:

cd cursos
npm init -y
Nota: Este comando lo ultilazermos para generar el archivo package.json

Despues instalaremos nuestras dependencias

npm i -D nodemon
Una vez creado el package.json y las dependencias, añadiremos todas las librerias necesarias para proyecto, en este proyecto han sido los siguiente:

npm i express mongoose dotenv 
express - Para tener una conexion con el servidor
mongoose - Para la base de datos
dotenv - Para poder acceder a las variables de entorno
Desarrollo
Creé modelos para las dos base de datos, una para las peliculas y otra para las plataformas.

Creé el CRUD completo para poder realizar las distintas funciones que nos ayudara a su fincionamiento correcto.

Creé el archivos de rutas, el archivo de configuración y el archivo de API.

La carpeta API contiene los siguientes archivos: Controllers, Models, routers.

Creé la carpeta donde ira la semilla, que es desde donde se obtendra nuestros datos de peliculas.

Las diferentes URLs para realizar los post tanto de peliculas como de plataformas son los siguientes:

http://localhost:3000/api/v1/cursos
http://localhost:3000/api/v1/users
Tambien hay diferentes URLs independientemente para lo que quieras hacer,
*Es decir si quieres buscar por id la URL termina en:

http://localhost:3000/api/v1/subjects/:id

Licencia
Mi backed para usuarios, cursos y materias, De Daniel Yepes Carrillo

[GitHub]: <https://github.com/DaniYeCa