const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre del curso es obligatorio'],
    trim: true,
    maxlength: [100, 'El nombre no puede tener más de 100 caracteres']
  },
  descripcion: {
    type: String,
    required: [true, 'La descripción es obligatoria'],
    trim: true
  },
  duracion: {
    type: Number,
    required: [true, 'La duración es obligatoria'],
    min: [1, 'La duración debe ser al menos 1 hora']
  },
  nivel: {
    type: String,
    required: [true, 'El nivel es obligatorio'],
    enum: {
      values: ['Principiante', 'Intermedio', 'Avanzado'],
      message: 'El nivel debe ser Principiante, Intermedio o Avanzado'
    }
  },
  precio: {
    type: Number,
    required: [true, 'El precio es obligatorio'],
    min: [0, 'El precio no puede ser negativo']
  },
  imagen: {
    type: String,
    default: 'default-course.jpg'
  },
  estado: {
    type: String,
    enum: ['Activo', 'Inactivo'],
    default: 'Activo'
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  },
  ultimaActualizacion: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Índices para mejorar el rendimiento de las búsquedas
courseSchema.index({ nombre: 'text', descripcion: 'text' });
courseSchema.index({ nivel: 1 });
courseSchema.index({ estado: 1 });

const Course = mongoose.model("Course", courseSchema, "courses");

module.exports = Course;
