# Backend de Sistema de Cursos

Este es el backend para un sistema de gestión de cursos y materias. Proporciona una API RESTful para gestionar cursos, materias y usuarios.

## 🚀 Características

- API RESTful completa
- Autenticación de usuarios
- Gestión de cursos y materias
- Seguridad mejorada con Helmet, CORS y rate limiting
- Base de datos MongoDB
- Manejo de errores robusto
- Documentación de API

## 📋 Prerrequisitos

- Node.js (v14 o superior)
- MongoDB (v4.4 o superior)
- npm o yarn

## 🔧 Instalación

1. Clonar el repositorio:
```bash
git clone [url-del-repositorio]
cd [nombre-del-proyecto]
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno:
   - Crear un archivo `.env` en la raíz del proyecto
   - Agregar las siguientes variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/cursos
   JWT_SECRET=tu_clave_secreta_super_segura_123
   PORT=3000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   ```

4. Iniciar MongoDB:
   - Asegurarse de que MongoDB esté instalado y ejecutándose
   - El servicio debe estar corriendo en el puerto 27017

5. Iniciar el servidor:
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
│   ├── models/         # Modelos de MongoDB
│   ├── routes/         # Rutas de la API
│   └── utils/          # Utilidades
├── config/             # Configuraciones
├── middlewares/        # Middlewares personalizados
└── seeds/              # Datos iniciales
```

## 🔌 Endpoints de la API

### Autenticación
- `POST /api/v1/users/register` - Registrar nuevo usuario
- `POST /api/v1/users/login` - Iniciar sesión

### Cursos
- `GET /api/v1/courses` - Obtener todos los cursos
- `GET /api/v1/courses/:id` - Obtener curso por ID
- `POST /api/v1/courses` - Crear nuevo curso
- `PUT /api/v1/courses/:id` - Actualizar curso
- `DELETE /api/v1/courses/:id` - Eliminar curso

### Materias
- `GET /api/v1/subjects` - Obtener todas las materias
- `GET /api/v1/subjects/:id` - Obtener materia por ID
- `POST /api/v1/subjects` - Crear nueva materia
- `PUT /api/v1/subjects/:id` - Actualizar materia
- `DELETE /api/v1/subjects/:id` - Eliminar materia

## 🔒 Seguridad

El backend implementa varias medidas de seguridad:
- Autenticación JWT
- CORS configurado
- Helmet para seguridad HTTP
- Rate limiting
- Sanitización de datos
- Protección contra XSS
- Validación de datos

## 💾 Base de Datos

- MongoDB como base de datos principal
- Mongoose como ODM
- Modelos definidos para:
  - Usuarios
  - Cursos
  - Materias

## 🛠️ Tecnologías Utilizadas

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
    "nombre": "JavaScript Avanzado",
    "descripcion": "Curso avanzado de JavaScript",
    "duracion": 40,
    "nivel": "Avanzado",
    "precio": 49.99
  }'
```

### Obtener todos los cursos
```bash
curl -X GET http://localhost:3000/api/v1/courses \
  -H "Authorization: Bearer [token]"
```

## 🐛 Depuración

Para depurar el servidor:
1. Verificar que MongoDB esté ejecutándose
2. Comprobar las variables de entorno
3. Revisar los logs del servidor
4. Usar Postman o similar para probar los endpoints

## 📈 Próximas Mejoras

- [ ] Implementar paginación
- [ ] Agregar búsqueda avanzada
- [ ] Implementar sistema de calificaciones
- [ ] Agregar sistema de comentarios
- [ ] Implementar notificaciones

## 📄 Licencia

Este proyecto está bajo la Licencia de Daniel Yepes.



## 📧 Contacto

Para cualquier consulta o soporte, contacta al equipo de desarrollo.
