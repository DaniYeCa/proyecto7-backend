const mongoose = require('mongoose');
const Course = require('../api/models/courses');
const cursos = require('../utils/cursos.data')
require('dotenv').config();



const seedCursos = async () => {
  try {

    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado a la base de datos');


    await Course.deleteMany({});
    console.log('Cursos existentes eliminados');


    await Course.insertMany(cursos);
    console.log('Cursos insertados correctamente');


    await mongoose.connection.close();
    console.log('Conexión cerrada');
  } catch (error) {
    console.error('Error al sembrar los cursos:', error);
    process.exit(1);
  }
};

seedCursos(); 