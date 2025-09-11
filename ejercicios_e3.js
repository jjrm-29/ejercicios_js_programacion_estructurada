// Función anónima asignada a una variable
const sumar = function (a, b) {
  return a + b;
};

console.log(sumar(3, 4));

// Función con asignación de nombre
function sumar(a, b) {
  return a + b;
};

console.log(sumar(3, 4));

try {
  console.log("Intentando dividir...");
  let resultado = 10 / 0; // No error real, da Infinity
  console.log(resultado);
} catch (error) {
  console.log("Error atrapado:", error.message);
} finally {
  console.log("Fin del bloque");
}

function dividir(a, b) {
  try {
    if (b === 0) {
      throw new Error("No se puede dividir entre 0");
    }
    return a / b;
  } catch (error) {
    return "Error: " + error.message;
  } finally {
    console.log("Fin del bloque");
  }
}
console.log(dividir(10, 2)); // 5
console.log(dividir(10, 0)); // Error: No se puede dividir entre 0



const colores = ["rojo", "verde", "azul"];
const nombre = ["Juan", "José", "Ana"];
console.log(colores[0]); // "rojo"
console.log(colores[2]); // "azul"
console.log(nombre[0]);


const Persona = {
  nombre: "Ana",
  hobbies: ["leer", "pintar", "correr"]
};
console.log(persona.hobbies[1]); // "pintar"


console.log(empresa.empleados[0].nombre);
// "Ana"
console.log(empresa.empleados[1].direccion.ciudad);
// "Barcelona"
console.log(empresa.empleados[0]["direccion"]["codigoPostal"]);
// 28001
// El último también se puede escribir de esta forma:
console.log(empresa.empleados[0].direccion.codigoPostal);


const persona = {
nombre: "Carlos",
edad: 28,
direccion: {
ciudad: "Madrid",
codigoPostal: 28001
},
hobbie: ["leer", "correr", "pintar"]
};

const mostrarNombre = () => persona.nombre;
const mostrarEdad = () => persona.edad;
const mostrarCiudad = () => persona.direccion.ciudad;

const mostrarCodigoPostal = () => persona.direccion.codigoPostal;
const mostrarHobbie = () => persona.hobbie;

console.log(mostrarNombre());
console.log(mostrarEdad());
console.log(mostrarCiudad());
console.log(mostrarCodigoPostal());
console.log(mostrarHobbie());




const universidad = {
  nombre: "Universidad Central",
  ubicacion: {
    ciudad: "Sevilla",
    direccion: {
      calle: "Av. Principal",
      numero: 123
    }
  },
  facultades: [
    {
      nombre: "Ingeniería",
      carreras: [
        {
          nombre: "Informática",
          estudiantes: [
            { nombre: "Laura", edad: 20, hobbies: ["programar", "ajedrez"] },
            { nombre: "Javier", edad: 22, hobbies: ["fútbol", "cine"] }
          ]
        },
        {
          nombre: "Civil",
          estudiantes: [
            { nombre: "Sofía", edad: 21, hobbies: ["fotografía", "leer"] }
          ]
        }
      ]
    },
    {
      nombre: "Derecho",
      carreras: [
        {
          nombre: "Derecho Penal",
          estudiantes: [
            { nombre: "Andrés", edad: 23, hobbies: ["debate", "natación"] }
          ]
        }
      ]
    }
  ]
};

const mostrarNombreUniversidad = () => universidad.nombre;
const mostrarNombreCalle = () => universidad.ubicacion.direccion.calle;
const mostrarNombreFacultades = () => universidad.facultades.nombre;


console.log(mostrarNombreUniversidad());
console.log(mostrarNombreCalle());
console.log(mostrarNombreFacultades());