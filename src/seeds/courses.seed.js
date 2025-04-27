const mongoose = require('mongoose');
const Course = require('../api/models/courses');
const Subject = require('../api/models/subjects');
require('dotenv').config();

const cursos = [
  {
    nombre: "JavaScript desde Cero",
    descripcion: "Aprende JavaScript desde los fundamentos hasta conceptos avanzados. Ideal para principiantes que quieren iniciar en el desarrollo web.",
    duracion: 40,
    nivel: "Principiante",
    precio: 29.99,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png",
    estado: "Activo"
  },
  {
    nombre: "Python para Ciencia de Datos",
    descripcion: "Domina Python aplicado a la ciencia de datos. Aprende a usar bibliotecas como NumPy, Pandas y Matplotlib.",
    duracion: 60,
    nivel: "Intermedio",
    precio: 39.99,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
    estado: "Activo"
  },
  {
    nombre: "C++ Avanzado: Optimización y Rendimiento",
    descripcion: "Técnicas avanzadas de programación en C++ para optimizar el rendimiento de tus aplicaciones.",
    duracion: 50,
    nivel: "Avanzado",
    precio: 49.99,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
    estado: "Activo"
  },
  {
    nombre: "Desarrollo Web con PHP y Laravel",
    descripcion: "Aprende a crear aplicaciones web modernas usando PHP y el framework Laravel.",
    duracion: 45,
    nivel: "Intermedio",
    precio: 34.99,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
    estado: "Activo"
  },
  {
    nombre: "Ruby on Rails: Desarrollo Ágil",
    descripcion: "Desarrolla aplicaciones web rápidamente usando Ruby on Rails y las mejores prácticas de desarrollo ágil.",
    duracion: 55,
    nivel: "Intermedio",
    precio: 44.99,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Ruby_logo.svg/1200px-Ruby_logo.svg.png",
    estado: "Activo"
  },
  {
    nombre: "Java Spring Boot: Desarrollo de APIs REST",
    descripcion: "Crea APIs RESTful robustas y escalables usando Java Spring Boot.",
    duracion: 65,
    nivel: "Avanzado",
    precio: 54.99,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Java_logo.png/1200px-Java_logo.png",
    estado: "Activo"
  },
  {
    nombre: "TypeScript para Desarrolladores JavaScript",
    descripcion: "Mejora tus proyectos JavaScript con TypeScript. Aprende tipado estático y características avanzadas.",
    duracion: 35,
    nivel: "Intermedio",
    precio: 39.99,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    estado: "Activo"
  },
  {
    nombre: "Scala: Programación Funcional en la JVM",
    descripcion: "Aprende programación funcional con Scala y aprovecha el poder de la JVM para aplicaciones escalables.",
    duracion: 70,
    nivel: "Avanzado",
    precio: 59.99,
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Scala_logo.png/1200px-Scala_logo.png",
    estado: "Activo"
  }
];

const seedCursos = async () => {
  try {
    // Conectar a la base de datos
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado a la base de datos');

    // Eliminar cursos existentes
    await Course.deleteMany({});
    console.log('Cursos existentes eliminados');

    // Insertar nuevos cursos
    await Course.insertMany(cursos);
    console.log('Cursos insertados correctamente');

    // Cerrar la conexión
    await mongoose.connection.close();
    console.log('Conexión cerrada');
  } catch (error) {
    console.error('Error al sembrar los cursos:', error);
    process.exit(1);
  }
};

seedCursos(); 