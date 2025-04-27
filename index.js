require("dotenv").config();
const express = require("express");
const { connectDB } = require("./src/config/db");
const subjectRouter = require("./src/api/routes/subjects");
const courseRouter = require("./src/api/routes/courses");
const cors = require("cors");
const userRouter = require("./src/api/routes/user");
const errorHandler = require("./src/middlewares/errorHandler");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");

const app = express();

// Configuración de CORS
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

// Middleware de seguridad
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json({ limit: '10kb' }));
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Límite de tasa
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Demasiadas solicitudes desde esta IP, por favor intenta de nuevo en 15 minutos'
});
app.use(limiter);

// Conectar a la base de datos
connectDB();

// Rutas
app.use("/api/v1/subjects", subjectRouter);
app.use("/api/v1/courses", courseRouter);
app.use("/api/v1/users", userRouter);

// Ruta de prueba
app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API funcionando correctamente",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV
  });
});

// Manejo de errores
app.use(errorHandler);

// Manejo de rutas 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: {
      message: 'Ruta no encontrada',
      statusCode: 404,
      path: req.originalUrl
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutando en: http://localhost:${PORT}`);
  console.log(`Entorno: ${process.env.NODE_ENV}`);
});