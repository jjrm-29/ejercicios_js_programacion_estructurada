const busquedLineal = (arr, valor) =>{
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === valor) {
            return i;
        }
      }
      return -1; // si ni se encontró
    }

    let Numeros = [8, 3, 10, 5, 2];
    console.log(busquedLineal(Numeros, 10)); // 2
    console.log(busquedLineal(Numeros, 7)); // -1



    function busquedaBinaria(arr, valor) {
        let inicio = 0;
        let fin = arr.length - 1;

        while (inicio <= fin) {
            let medio = Math.floor((inicio + fin) / 2);

            // comparar el valor del medio con el valor buscado
            if (arr[medio] === valor) {
                return medio;
                 } else {
                  // Si no son iguales, hay que decidir por que lado seguir buscando
                  if (arr[medio] < valor) {
                inicio = medio + 1;
            } else {
                fin = medio - 1;
            } 
          }
        }
           return -1; // si no se encontró
        }
       
      // Ejemplos
      let numeros = [2, 5, 8, 10, 15, 20]; // arreglo ordenado
      console.log(busquedaBinaria(numeros, 10)); // 3
      console.log(busquedaBinaria(numeros, 9)); // -1
    
    const productos = [
  { id: 1, nombre: "Laptop", categoria: "Electrónica", precio: 1200, stock: 10 },
  { id: 2, nombre: "Celular", categoria: "Electrónica", precio: 800, stock: 25 },
  { id: 3, nombre: "Teclado", categoria: "Accesorios", precio: 50, stock: 100 },
  { id: 4, nombre: "Mouse", categoria: "Accesorios", precio: 30, stock: 150 },
  { id: 5, nombre: "Monitor", categoria: "Electrónica", precio: 300, stock: 20 },
  { id: 6, nombre: "Silla Gamer", categoria: "Muebles", precio: 250, stock: 5 },
  { id: 7, nombre: "Escritorio", categoria: "Muebles", precio: 400, stock: 8 },
  { id: 8, nombre: "Audífonos", categoria: "Accesorios", precio: 70, stock: 60 },
  { id: 9, nombre: "Tablet", categoria: "Electrónica", precio: 600, stock: 12 },
  { id: 10, nombre: "Impresora", categoria: "Electrónica", precio: 200, stock: 15 },
  { id: 11, nombre: "Cámara", categoria: "Electrónica", precio: 1000, stock: 7 },
  { id: 12, nombre: "Smartwatch", categoria: "Electrónica", precio: 250, stock: 18 },
  { id: 13, nombre: "Parlante", categoria: "Accesorios", precio: 120, stock: 30 },
  { id: 14, nombre: "Microondas", categoria: "Electrodomésticos", precio: 180, stock: 12 },
  { id: 15, nombre: "Refrigeradora", categoria: "Electrodomésticos", precio: 900, stock: 4 },
  { id: 16, nombre: "Lavadora", categoria: "Electrodomésticos", precio: 700, stock: 6 },
  { id: 17, nombre: "Secadora", categoria: "Electrodomésticos", precio: 650, stock: 3 },
  { id: 18, nombre: "Cafetera", categoria: "Electrodomésticos", precio: 90, stock: 25 },
  { id: 19, nombre: "Ventilador", categoria: "Electrodomésticos", precio: 60, stock: 40 },
  { id: 20, nombre: "Licuadora", categoria: "Electrodomésticos", precio: 110, stock: 22 },
  { id: 21, nombre: "Cama", categoria: "Muebles", precio: 800, stock: 2 },
  { id: 22, nombre: "Ropero", categoria: "Muebles", precio: 500, stock: 3 },
  { id: 23, nombre: "Estufa", categoria: "Electrodomésticos", precio: 750, stock: 5 },
  { id: 24, nombre: "Horno", categoria: "Electrodomésticos", precio: 400, stock: 6 },
  { id: 25, nombre: "Lámpara", categoria: "Accesorios", precio: 45, stock: 50 },
  { id: 26, nombre: "Router", categoria: "Electrónica", precio: 130, stock: 20 },
  { id: 27, nombre: "Disco Duro", categoria: "Electrónica", precio: 150, stock: 35 },
  { id: 28, nombre: "Memoria USB", categoria: "Accesorios", precio: 25, stock: 200 },
  { id: 29, nombre: "Cargador", categoria: "Accesorios", precio: 35, stock: 90 },
  { id: 30, nombre: "Proyector", categoria: "Electrónica", precio: 600, stock: 4 }
];


// Crea una función que reciba un arreglo de objetos y busque un producto por nombre (por ejemplo, "Monitor"), usando búsqueda lineal.
function buscarPorNombre(arr, nombre) {
    return arr.find(pro => pro.nombre === nombre);
} 
const productoEncontrado = buscarPorNombre(productos, "memoria USB");
console.log(productoEncontrado);

// Crea una función que reciba un arreglo de objetos y busque todos los productos de una categoría específica (por ejemplo, ";Electrodomésticos"), usando búsqueda lineal.
function buscarPorCategoria(arr, categoria) {
    return arr.filter(pro => pro.categoria === categoria);
} 
const productosCategoria = buscarPorCategoria(productos, "Electrodomésticos");
console.log(productosCategoria);

// Crea una función que reciba un arreglo de objetos y busque un producto con un precio exacto (por ejemplo, 600), usando búsqueda lineal.
function buscarPorPrecio(arr, precio) {
    return arr.find(pro => pro.precio === precio);
}
const productoConPrecio = buscarPorPrecio(productos, 600);
console.log(productoConPrecio);

 // Crea una función que reciba un arreglo y busque todos los productos cuyo precio esté dentro de un rango (por ejemplo, entre 100 y 500).
 function buscarPorRangoPrecio(arr, min, max) {
    return arr.filter(pro => pro.precio >= min && pro.precio <= max);
}
const productosEnRango = buscarPorRangoPrecio(productos, 150, 500);
console.log(productosEnRango);

// Crea una función que reciba un arreglo de objetos y busque los productos con stock menor a un valor dado (por ejemplo, 10), 
function buscarPorStockMenor(arr, valor) {
    return arr.filter(pro => pro.stock < valor);
} 
const productosConBajoStock = buscarPorStockMenor(productos, 30);
console.log(productosConBajoStock);
