const mongoose = require('mongoose');
const Subject = require('../api/models/subjects');
require('dotenv').config();

const materias = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png",
    name: "JavaScript",
    description: "Lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.",
    difficulty: 3
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
    name: "Python",
    description: "Lenguaje de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código. Es multiparadigma y multipropósito.",
    difficulty: 2
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png",
    name: "C++",
    description: "Lenguaje de programación diseñado en 1979 por Bjarne Stroustrup. La intención de su creación fue extender al lenguaje de programación C mecanismos que permiten la manipulación de objetos.",
    difficulty: 4
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
    name: "PHP",
    description: "Lenguaje de programación de propósito general de código del lado del servidor originalmente diseñado para el desarrollo web de contenido dinámico.",
    difficulty: 3
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Ruby_logo.svg/1200px-Ruby_logo.svg.png",
    name: "Ruby",
    description: "Lenguaje de programación interpretado, reflexivo y orientado a objetos, creado por el programador japonés Yukihiro 'Matz' Matsumoto.",
    difficulty: 3
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Java_logo.png/1200px-Java_logo.png",
    name: "Java",
    description: "Lenguaje de programación y una plataforma informática que fue comercializada por primera vez en 1995 por Sun Microsystems.",
    difficulty: 4
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    name: "TypeScript",
    description: "Lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript.",
    difficulty: 3
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Scala_logo.png/1200px-Scala_logo.png",
    name: "Scala",
    description: "Lenguaje de programación multi-paradigma diseñado para expresar patrones de programación comunes de una forma concisa, elegante y type-safe.",
    difficulty: 4
  }
];

const seedMaterias = async () => {
  try {
    // Conectar a la base de datos
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado a la base de datos');

    // Eliminar materias existentes
    await Subject.deleteMany({});
    console.log('Materias existentes eliminadas');

    // Insertar nuevas materias
    await Subject.insertMany(materias);
    console.log('Materias insertadas correctamente');

    // Cerrar la conexión
    await mongoose.connection.close();
    console.log('Conexión cerrada');
  } catch (error) {
    console.error('Error al sembrar las materias:', error);
    process.exit(1);
  }
};

seedMaterias(); 