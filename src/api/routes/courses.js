const express = require('express');
const router = express.Router();
const {
  postCourse,
  updateCourse,
  getCourses,
  getCourseById,
  deleteCourse
} = require('../controllers/courses');
const { isAuth } = require("../../middlewares/auth");

// Middleware de validación mejorado
const validateCourse = (req, res, next) => {
  try {
    const { nombre, descripcion, duracion, nivel, precio } = req.body;

    // Validar campos requeridos
    if (!nombre || !descripcion || !duracion || !nivel || !precio) {
      return res.status(400).json({
        success: false,
        error: 'Todos los campos son obligatorios'
      });
    }

    // Validar tipos de datos
    if (typeof nombre !== 'string' || nombre.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'El nombre debe ser una cadena de texto válida'
      });
    }

    if (typeof descripcion !== 'string' || descripcion.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'La descripción debe ser una cadena de texto válida'
      });
    }

    if (typeof duracion !== 'number' || duracion < 1) {
      return res.status(400).json({
        success: false,
        error: 'La duración debe ser un número mayor a 0'
      });
    }

    if (!['Principiante', 'Intermedio', 'Avanzado'].includes(nivel)) {
      return res.status(400).json({
        success: false,
        error: 'El nivel debe ser Principiante, Intermedio o Avanzado'
      });
    }

    if (typeof precio !== 'number' || precio < 0) {
      return res.status(400).json({
        success: false,
        error: 'El precio debe ser un número mayor o igual a 0'
      });
    }

    // Limpiar y normalizar datos
    req.body.nombre = nombre.trim();
    req.body.descripcion = descripcion.trim();
    req.body.duracion = Number(duracion);
    req.body.precio = Number(precio);

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Error en la validación de datos'
    });
  }
};

// Rutas protegidas con autenticación
router.post('/', isAuth, validateCourse, postCourse);
router.put('/:id', isAuth, validateCourse, updateCourse);
router.get('/', isAuth, getCourses);
router.get('/:id', isAuth, getCourseById);
router.delete('/:id', isAuth, deleteCourse);

module.exports = router;