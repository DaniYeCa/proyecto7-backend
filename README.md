# Sistema de Gestión de Cursos

Este es un sistema backend para la gestión de cursos, materias y usuarios. Proporciona una API RESTful completa con autenticación y autorización basada en roles.

## 🚀 Características

- API RESTful con versionamiento (v1)
- Autenticación JWT
- Gestión de roles (admin/user)
- CRUD completo para cursos, materias y usuarios
- Base de datos MongoDB
- Manejo de errores robusto
- Sistema de semillas para datos iniciales

## 📋 Prerrequisitos

- Node.js (v18 o superior)
- MongoDB (v4.4 o superior)
- npm o yarn
- Git

## 🔧 Instalación

1. **Clonar el repositorio**
```bash
git clone [url-del-repositorio]
cd [nombre-del-proyecto]
```

2. **Inicializar el proyecto**
```bash
npm init -y
```

3. **Instalar dependencias de desarrollo**
```bash
npm i -D nodemon
```

4. **Instalar dependencias principales**
```bash
npm i express mongoose dotenv bcrypt jsonwebtoken
```

5. **Configurar variables de entorno**
Crear un archivo `.env` en la raíz del proyecto:
```
MONGODB_URI=mongodb://localhost:27017/cursos
JWT_SECRET=tu_clave_secreta_super_segura_123
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

6. **Iniciar el servidor**
```bash
# Modo desarrollo
npm run dev

# Modo producción
npm start
```

## 📚 Estructura del Proyecto

```
src/
├── api/
│   ├── controllers/    # Controladores de la API
│   │   ├── user.js
│   │   ├── courses.js
│   │   └── subjects.js
│   ├── models/         # Modelos de MongoDB
│   │   ├── user.js
│   │   ├── courses.js
│   │   └── subjects.js
│   ├── routes/         # Rutas de la API
│   │   ├── user.js
│   │   ├── courses.js
│   │   └── subjects.js
│   └── utils/          # Utilidades
├── config/             # Configuraciones
├── middlewares/        # Middlewares personalizados
└── seeds/              # Datos iniciales
```

## 🔌 Endpoints de la API

### Autenticación
- `POST /api/v1/users/login`
  - Body: `{ email, password }`
  - Response: `{ token, user }`
  - Descripción: Iniciar sesión

- `POST /api/v1/users`
  - Body: `{ name, email, password }`
  - Response: `{ user }`
  - Descripción: Registrar nuevo usuario

### Usuarios
- `PUT /api/v1/users/:id`
  - Headers: `Authorization: Bearer [token]`
  - Body: `{ name, email, password, courses }`
  - Response: `{ user }`
  - Descripción: Actualizar usuario
  - Permisos: Admin puede cambiar rol, usuarios solo pueden actualizarse a sí mismos

- `DELETE /api/v1/users/:id`
  - Headers: `Authorization: Bearer [token]`
  - Response: `{ message }`
  - Descripción: Eliminar usuario
  - Permisos: Admin puede eliminar cualquier usuario, usuarios solo pueden eliminarse a sí mismos

### Cursos
- `POST /api/v1/courses`
  - Body: `{ name, subjects, price, img }`
  - Response: `{ course }`
  - Descripción: Crear nuevo curso

- `PUT /api/v1/courses/:id`
  - Body: `{ name, subjects, price, img }`
  - Response: `{ course }`
  - Descripción: Actualizar curso

- `GET /api/v1/courses`
  - Headers: `Authorization: Bearer [token]`
  - Response: `[{ course }]`
  - Descripción: Obtener todos los cursos

- `DELETE /api/v1/courses/:id`
  - Response: `{ message }`
  - Descripción: Eliminar curso

### Materias
- `POST /api/v1/subjects`
  - Body: `{ img, name, description, difficulty }`
  - Response: `{ subject }`
  - Descripción: Crear nueva materia

- `DELETE /api/v1/subjects/:id`
  - Response: `{ message }`
  - Descripción: Eliminar materia

## 💾 Modelos de Datos

### Usuario
```javascript
{
  name: String,
  email: String,
  password: String,
  courses: [ObjectId],
  rol: String (enum: ["user", "admin"])
}
```

### Curso
```javascript
{
  name: String,
  subjects: [ObjectId],
  price: Number,
  img: String
}
```

### Materia
```javascript
{
  img: String,
  name: String,
  description: String,
  difficulty: Number (1-5)
}
```

## 🔒 Seguridad

- Autenticación mediante JWT
- Encriptación de contraseñas con bcrypt
- Validación de roles para operaciones sensibles
- Protección de rutas con middleware de autenticación

## 🛠️ Tecnologías Utilizadas

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt
- Dotenv
- Nodemon (desarrollo)

## 📝 Ejemplos de Uso

### Crear un nuevo curso
```bash
curl -X POST http://localhost:3000/api/v1/courses \
  -H "Content-Type: application/json" \
  -d '{
    "name": "JavaScript Avanzado",
    "subjects": ["id_materia1", "id_materia2"],
    "price": 49.99,
    "img": "url_imagen"
  }'
```

### Actualizar un usuario
```bash
curl -X PUT http://localhost:3000/api/v1/users/:id \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer [token]" \
  -d '{
    "name": "Nuevo Nombre",
    "email": "nuevo@email.com"
  }'
```

## 📄 Licencia

Este proyecto está bajo la Licencia de Daniel Yepes Carrillo. Todos los derechos reservados.

## 📧 Contacto

Para cualquier consulta o soporte, contacta al desarrollador:
- GitHub: [DaniYeCa](https://github.com/DaniYeCa)