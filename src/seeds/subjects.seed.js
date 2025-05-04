const mongoose = require('mongoose');
const Subject = require('../api/models/subjects');
const materias = require('../utils/subjects.data')
require('dotenv').config();



const seedMaterias = async () => {
  try {

    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado a la base de datos');


    await Subject.deleteMany({});
    console.log('Materias existentes eliminadas');


    await Subject.insertMany(materias);
    console.log('Materias insertadas correctamente');


    await mongoose.connection.close();
    console.log('Conexión cerrada');
  } catch (error) {
    console.error('Error al sembrar las materias:', error);
    process.exit(1);
  }
};

seedMaterias(); 