const Course = require("../models/courses");
const AppError = require("../../utils/AppError");

// Crear un nuevo curso
const postCourse = async (req, res, next) => {
  try {
    const newCourse = new Course(req.body);
    const course = await newCourse.save();

    return res.status(201).json({
      success: true,
      data: course
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(new AppError(error.message, 400));
    }
    return next(new AppError('Error al crear el curso', 500));
  }
};

// Actualizar un curso existente
const updateCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const course = await Course.findByIdAndUpdate(
      id,
      { ...updates, ultimaActualizacion: Date.now() },
      {
        new: true,
        runValidators: true
      }
    );

    if (!course) {
      return next(new AppError('Curso no encontrado', 404));
    }

    return res.status(200).json({
      success: true,
      data: course
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      return next(new AppError(error.message, 400));
    }
    return next(new AppError('Error al actualizar el curso', 500));
  }
};

// Obtener todos los cursos con filtros
const getCourses = async (req, res, next) => {
  try {
    const { nivel, estado, search } = req.query;

    let query = {};

    if (nivel) query.nivel = nivel;
    if (estado) query.estado = estado;
    if (search) {
      query.$text = { $search: search };
    }

    const courses = await Course.find(query)
      .sort({ fechaCreacion: -1 });

    return res.status(200).json({
      success: true,
      count: courses.length,
      data: courses
    });
  } catch (error) {
    return next(new AppError('Error al obtener los cursos', 500));
  }
};

// Obtener un curso por ID
const getCourseById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);

    if (!course) {
      return next(new AppError('Curso no encontrado', 404));
    }

    return res.status(200).json({
      success: true,
      data: course
    });
  } catch (error) {
    return next(new AppError('Error al obtener el curso', 500));
  }
};

// Eliminar un curso
const deleteCourse = async (req, res, next) => {
  try {
    const { id } = req.params;
    const course = await Course.findByIdAndDelete(id);

    if (!course) {
      return next(new AppError('Curso no encontrado', 404));
    }

    return res.status(200).json({
      success: true,
      data: null,
      message: 'Curso eliminado exitosamente'
    });
  } catch (error) {
    return next(new AppError('Error al eliminar el curso', 500));
  }
};

module.exports = {
  postCourse,
  updateCourse,
  getCourses,
  getCourseById,
  deleteCourse
};