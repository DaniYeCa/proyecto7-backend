const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Definir el estado y mensaje por defecto
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Error Interno del Servidor';

  // Crear objeto de error
  const errorResponse = {
    success: false,
    error: {
      message,
      statusCode,
      ...(process.env.NODE_ENV === 'development' && {
        stack: err.stack,
        name: err.name,
        path: err.path,
        value: err.value,
        errors: err.errors
      })
    }
  };

  // Manejar errores específicos de Mongoose
  if (err.name === 'CastError') {
    errorResponse.error.message = `Recurso no encontrado. ID inválido: ${err.value}`;
    errorResponse.error.statusCode = 404;
  }

  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map(val => val.message);
    errorResponse.error.message = 'Error de validación';
    errorResponse.error.statusCode = 400;
    errorResponse.error.details = errors;
  }

  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    errorResponse.error.message = `El valor '${err.keyValue[field]}' ya existe en el campo '${field}'`;
    errorResponse.error.statusCode = 409;
  }

  // Enviar respuesta de error
  res.status(errorResponse.error.statusCode).json(errorResponse);
};

module.exports = errorHandler; 