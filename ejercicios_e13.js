const numeros = [1, 2, 3, 4, 5];

const suma = numeros.reduce((acc, num) => acc + num, 0);

console.log(suma); // 15


const calificaciones = [80, 90, 70, 85, 95];

const sumas = calificaciones.reduce((acc, cal) => acc + num, 0);
const promedio = sumas / calificaciones.length;

console.log(promedio); // 84


const productos = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Pantalón", precio: 30 },
  { nombre: "Zapatos", precio: 50 }
];
const total = productos.reduce((acc, prod) => acc + prod.precio, 0);
console.log(total); // 100


const nombres = ["Ana", "Luis", "Pedro", "María"];

const encontrado = nombres.find(nombre => nombre.startsWith("P"));

console.log(encontrado); // "Pedro"

const edades = [25, 35, 51, 10, 8, 13];

const resultados = edades.find(edad => edad < 10);

console.log(resultados); // 8

const usuarios = [
  { id: 1, nombre: "Carlos", salario: 20000 },
  { id: 2, nombre: "Lucía", salario: 17300 }, 
  { id: 3, nombre: "Marta", salario: 18000 }, 
  { id: 4, nombre: "Ana", salario: 11000 },
  { id: 5, nombre: "Mario", salario: 19000 }
];

const salariosBajos = usuarios.find(u => u.salario < 20000);

console.log(salariosBajos);


const usuarioE = usuarios.find(u => u.salario < 20000 && u.nombre.startsWith("M"));

console.log(usuarioE); 

const todosSalariosAltos = usuarios.every(u => u.salario < 30000);
console.log(todosSalariosAltos); 

const unoTieneMayorA22 = usuarios.some(u => u.salario > 22000);
console.log('Hay usuarios con salario mayor a 22000?', unoTieneMayorA22);

const tareas = [
  { nombre: "Estudiar", completada: true },
  { nombre: "Ejercicio", completada: true },
  { nombre: "Leer", completada: false }
];
const todasCompletas = tareas.every(t => t.completada === true);
console.log(todasCompletas); // false


1. // Obtén un nuevo arreglo con todas las personas cuya edad sea mayor o igual a 18 años.
const personas = [
  { nombre: "Juan", edad: 17 },
  { nombre: "Ana", edad: 18 },
  { nombre: "Pedro", edad: 15 },
  { nombre: "María", edad: 30 },
  { nombre: "Jose", edad: 19 },
  { nombre: "Luisa", edad: 16 },
  { nombre: "Luis", edad: 22 }
];
const mayoresDeEdad = personas.filter(p => p.edad >= 18);
console.log(mayoresDeEdad);

// Encuentra la primera persona en el arreglo cuyo nombre comience con la letra "L".
const empiezaConL = personas.find(p => p.nombre.startsWith("L"));
console.log(empiezaConL);

// Calcula la suma total de las edades de todas las personas en el arreglo.
const sumaEdades = personas.reduce((acc, p) => acc + p.edad, 0);
console.log(sumaEdades);

// Verifica si todas las personas en el arreglo son mayores o iguales a 15 años.
const todosMayoresA15 = personas.every(p => p.edad >= 15);
console.log(todosMayoresA15);

// Comprueba si existe al menos una persona en el arreglo que tenga 40 años
const algunoTiene40 = personas.some(p => p.edad === 40);
console.log(algunoTiene40); // false