const dotenv = require('dotenv');

// Cargar variables de entorno
const result = dotenv.config();

if (result.error) {
  console.error('Error cargando el archivo .env:', result.error);
  process.exit(1);
}

// Validar variables de entorno requeridas
const requiredEnvVars = ['MONGODB_URI', 'JWT_SECRET'];
const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
  console.error(`Faltan las siguientes variables de entorno: ${missingEnvVars.join(', ')}`);
  process.exit(1);
}

module.exports = {
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGODB_URI,
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',
  nodeEnv: process.env.NODE_ENV || 'desarrollo',
  rateLimitWindow: process.env.RATE_LIMIT_WINDOW || 15 * 60 * 1000, // 15 minutos
  rateLimitMax: process.env.RATE_LIMIT_MAX || 100
}; 