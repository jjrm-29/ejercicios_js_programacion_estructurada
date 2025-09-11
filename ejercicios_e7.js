

// 1. Crea una función flecha que reciba un array de números y retorne un nuevo array con los números al cuadrado.
const agregarelementos = (arr, elemento) => {
  let nuevoArreglo = arreglo.push(elemento);
  return [arr, elemento]
  
}
let numeros = [1, 2, 3];

console.log(agregarelementos(numeros, 8)); 

// 2. ejercicio2
let agregarelementosInicio = (arreglo, elemento) => {
  arreglo.unishift(elemento);
  return arreglo;
}

let numeros2 = [1, 2, 3];
console.log(agregarelementosInicio(numeros2, 0));

// 3. ejercicio3
let eliminarUltimoElemento = (arreglo) => {
  let ultimo = arreglo.pop();
  return ultimo;
}

let numeros3 = [1, 2, 3];
console.log(eliminarUltimoElemento(numeros3));

// 4. ejercicio4
let eliminarPrimerElemento = (arreglo) => {
  let primer = arreglo.shift();
  return primer;
}
let numeros4 = [1, 2, 3];
console.log(eliminarPrimerElemento(numeros4));

// 5. ejercicio5
let encontrarElemento = (arreglo, elemento) => {
  let indice = arreglo.indexOf(elemento);
  return indice;
}

let numeros5 = [1, 2, 3];
console.log(encontrarElemento(numeros5, 2));

// 6. ejercicio6
let combinarArreglos = (arreglo1, arreglo2) => {
  let combinado = arreglo1.concat(arreglo2);
  return combinado;
}
let numeros6a = [1, 2];
let numeros6b = [3, 4];
console.log(combinarArreglos(numeros6a, numeros6b));

// 7. ejercicio7
let invertirArreglo = (arreglo) => {
  let invertido = arreglo.reverse();
  return invertido;
}
let numeros7 = [1, 2, 3];
console.log(invertirArreglo(numeros7));

// 8. ejercicio8
function unirConSeparador(arreglo, separador) {
    let resultado = '';
    for (let i = 0; i < arreglo.length; i++) {
        resultado += arreglo[i];
        if (i < arreglo.length - 1) {
            resultado += separador;
        }
    }
    return resultado;
}
let palabras = ['hola', 'mundo'];
console.log("Unir con separador:", unirConSeparador(palabras, ' '));

// 9. ejercicio9
function combinarArreglos(arr1, arr2, separador) {
    return [...arr1, separador, ...arr2];
}
console.log("Combinar arreglos:", combinarArreglos([1, 2], [3, 4], 5));

// 10. Ejercicio10
const paraCadaElemento = (arr, callback) => arr.forEach(callback);
const arreglo10 = [10, 20, 30];
paraCadaElemento(arreglo10, el => console.log(el * 2)); // 20, 40, 60

// 11. ejercicio11
const mapearElementos = (arr, callback) => arr.map(callback);
const arreglo11 = [1, 2, 3];
console.log(mapearElementos(arreglo11, el => el * el)); // [1, 4, 9]

// 12. Ejercicio12
const filtrarElementos = (arr, callback) => arr.filter(callback);
const arreglo12 = [1, 2, 3, 4, 5];
console.log(filtrarElementos(arreglo12, el => el % 2 === 0)); // [2, 4]

// 13. ejercicio13
function reducirArreglo(arreglo, callback, valorInicial) {
    let acumulador = valorInicial;
    for (let i = 0; i < arreglo.length; i++) {
        acumulador = callback(acumulador, arreglo[i]);
    }
    return acumulador;
}
console.log("Reducir (suma):", reducirArreglo([1, 2, 3, 4], (acc, val) => acc + val, 0));
