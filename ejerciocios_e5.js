let numeros = [3, 1, 4, 2];
numeros.sort((a, b) => a - b); // Orden ascendente
console.log(numeros); // [1, 2, 3, 4]

let caracteres = ['z', 'a', 'x', 'm', 'j', 'y'];
caracteres.sort();
console.log(caracteres);

let cadena = ['z', 2, 'a', 10, 'x', 5];
cadena.sort();
console.log(cadena)// [10, 2, 5, 'a', 'x', 'z'] 

let palabras = ['Juan','Jose','Reyes','Martinez'];
let texto = palabras.join(','); // con el caracter que agregues se ejecuta
console.log(texto); //'hola mundo'

let arr1 = [1, 2];
let arr2 = [3, 4];
let combinado = arr1.concat(arr2, [5, 6, 9],'Juan');
arr1.push(arr2, [5, 6, 9],'Juan');
console.log(arr1);
console.log(combinado); // [1, 2, 3, 4, 5]

let colores = ['rojo', 'verde', 'azul'];
colores.forEach(color => console.log(color));
// Imprime: rojo, verde, azul

for (let color of colores) {
  console.log(color);
}

for(let i = 0; i < colores.length; i++) {
  console.log(colores[i]);
}

let Numeros = [1, 2, 3];
let dobles = Numeros.map(numero => numero * 2); // se le puede poner cualquier nombre al parametro y el resultado el mismo
console.log(dobles); // [2, 4, 6]

let numeros1 = [53, 21, 51, 22, 37, 88, 1000, 4];
let pares = numeros1.filter(x => x % 2 === 0); // muestra los numeros pares
console.log(pares); // [2, 4]

let numeros2 = [53, 21, 51, 22, 37, 88, 1000, 4];
let impares = numeros2.filter(x => x % 2 === 1); // muestra los numeros impares, con el signo ">" y con !==
console.log(impares); // [53, 21, 51, 37]

let numeros3 = [40, 30, 20, 40];
let suma = numeros3.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(suma); // 130













