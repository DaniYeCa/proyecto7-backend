# Backend de Sistema de Cursos

Este es el backend para un sistema de gestión de cursos y materias. Proporciona una API RESTful para gestionar cursos, materias y usuarios.

## 🚀 Características

- API RESTful completa con versionamiento (v1)
- Sistema de autenticación JWT
- Gestión completa de cursos y materias
- Seguridad mejorada con múltiples capas de protección
- Base de datos MongoDB con Mongoose
- Manejo de errores robusto y centralizado
- Documentación de API detallada
- Sistema de semillas para datos iniciales

## 📋 Prerrequisitos

- Node.js (v14 o superior)
- MongoDB (v4.4 o superior)
- npm o yarn
- Git (para clonar el repositorio)

## 🔧 Instalación

1. **Clonar el repositorio**
```bash
git clone [url-del-repositorio]
cd [nombre-del-proyecto]
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
   - Crear un archivo `.env` en la raíz del proyecto
   - Agregar las siguientes variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/cursos
   JWT_SECRET=tu_clave_secreta_super_segura_123
   PORT=3000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   ```

4. **Iniciar MongoDB**
   - Asegurarse de que MongoDB esté instalado y ejecutándose
   - El servicio debe estar corriendo en el puerto 27017
   - Para Windows: Asegurarse de que el servicio de MongoDB esté iniciado
   - Para Linux/Mac: `sudo service mongod start`

5. **Cargar datos iniciales (opcional)**
```bash
npm run seed
```

6. **Iniciar el servidor**
```bash
# Modo desarrollo (con nodemon)
npm run dev

# Modo producción
npm start
```

## 📚 Estructura del Proyecto

```
src/
├── api/
│   ├── controllers/    # Controladores de la API
│   │   ├── courseController.js
│   │   ├── subjectController.js
│   │   └── userController.js
│   ├── models/         # Modelos de MongoDB
│   │   ├── Course.js
│   │   ├── Subject.js
│   │   └── User.js
│   ├── routes/         # Rutas de la API
│   │   ├── courseRoutes.js
│   │   ├── subjectRoutes.js
│   │   └── userRoutes.js
│   └── utils/          # Utilidades
│       ├── errorHandler.js
│       └── responseHandler.js
├── config/             # Configuraciones
│   ├── database.js
│   └── server.js
├── middlewares/        # Middlewares personalizados
│   ├── auth.js
│   ├── error.js
│   └── validation.js
└── seeds/              # Datos iniciales
    ├── courses.seed.js
    └── subjects.seed.js
```

## 🔌 Endpoints de la API

### Autenticación
- `POST /api/v1/users/register` - Registrar nuevo usuario
  - Body: { email, password, name }
  - Response: { token, user }
- `POST /api/v1/users/login` - Iniciar sesión
  - Body: { email, password }
  - Response: { token, user }

### Cursos
- `GET /api/v1/courses` - Obtener todos los cursos
  - Query params: page, limit, sort, filter
  - Response: { courses, total, page, pages }
- `GET /api/v1/courses/:id` - Obtener curso por ID
  - Response: { course }
- `POST /api/v1/courses` - Crear nuevo curso
  - Body: { name, description, duration, level, price }
  - Response: { course }
- `PUT /api/v1/courses/:id` - Actualizar curso
  - Body: { name, description, duration, level, price }
  - Response: { course }
- `DELETE /api/v1/courses/:id` - Eliminar curso
  - Response: { message }

### Materias
- `GET /api/v1/subjects` - Obtener todas las materias
  - Query params: page, limit, sort, filter
  - Response: { subjects, total, page, pages }
- `GET /api/v1/subjects/:id` - Obtener materia por ID
  - Response: { subject }
- `POST /api/v1/subjects` - Crear nueva materia
  - Body: { name, description, credits }
  - Response: { subject }
- `PUT /api/v1/subjects/:id` - Actualizar materia
  - Body: { name, description, credits }
  - Response: { subject }
- `DELETE /api/v1/subjects/:id` - Eliminar materia
  - Response: { message }

## 🔒 Seguridad

El backend implementa múltiples capas de seguridad:

1. **Autenticación JWT**
   - Tokens con expiración
   - Refresh tokens
   - Validación de tokens en cada petición

2. **CORS Configurado**
   - Orígenes permitidos configurados
   - Métodos HTTP permitidos
   - Headers permitidos

3. **Helmet**
   - Headers de seguridad HTTP
   - Prevención de clickjacking
   - Protección XSS
   - HSTS habilitado

4. **Rate Limiting**
   - Límite de peticiones por IP
   - Ventana de tiempo configurable
   - Mensajes de error personalizados

5. **Sanitización de Datos**
   - Limpieza de datos de entrada
   - Prevención de inyección NoSQL
   - Validación de tipos de datos

## 💾 Base de Datos

### MongoDB
- Base de datos NoSQL
- Colecciones principales:
  - users
  - courses
  - subjects

### Modelos
1. **User**
   - email (único)
   - password (hash)
   - name
   - role
   - createdAt
   - updatedAt

2. **Course**
   - name
   - description
   - duration
   - level
   - price
   - subjects (referencias)
   - createdAt
   - updatedAt

3. **Subject**
   - name
   - description
   - credits
   - course (referencia)
   - createdAt
   - updatedAt

## 🛠️ Tecnologías Utilizadas

- **Backend**
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose
  - JWT
  - Bcrypt
  - Helmet
  - Express Rate Limit
  - XSS Clean
  - Express Mongo Sanitize

## 📝 Ejemplos de Uso

### Crear un nuevo curso
```bash
curl -X POST http://localhost:3000/api/v1/courses \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer [token]" \
  -d '{
    "name": "JavaScript Avanzado",
    "description": "Curso avanzado de JavaScript",
    "duration": 40,
    "level": "Avanzado",
    "price": 49.99
  }'
```

### Obtener todos los cursos
```bash
curl -X GET http://localhost:3000/api/v1/courses \
  -H "Authorization: Bearer [token]"
```

## 🐛 Depuración

Para depurar el servidor:

1. **Verificar MongoDB**
   - Comprobar que el servicio está activo
   - Verificar la conexión en el puerto 27017
   - Revisar logs de MongoDB

2. **Variables de Entorno**
   - Verificar archivo .env
   - Comprobar valores de las variables
   - Asegurar que NODE_ENV está configurado

3. **Logs del Servidor**
   - Revisar consola en modo desarrollo
   - Verificar archivos de log en producción
   - Usar herramientas de monitoreo

4. **Pruebas de API**
   - Usar Postman o similar
   - Verificar headers y tokens
   - Probar todos los endpoints

## 📈 Próximas Mejoras

- [ ] Implementar paginación avanzada
- [ ] Agregar búsqueda por texto completo
- [ ] Sistema de calificaciones y reviews
- [ ] Sistema de comentarios en cursos
- [ ] Notificaciones en tiempo real
- [ ] Sistema de progreso de cursos
- [ ] Integración con pasarelas de pago
- [ ] Sistema de certificados

## 📄 Licencia

Este proyecto está bajo la Licencia de Daniel Yepes.

## 📧 Contacto

Para cualquier consulta o soporte, contacta al equipo de desarrollo.
