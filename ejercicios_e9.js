// Crear una cola
let cola = [];
// Agregar elementos (enqueue)
cola.push("Tarea 1"); // ["Tarea 1"]
cola.push("Tarea 2"); // ["Tarea 1", "Tarea 2"]
cola.push("Tarea 3"); // ["Tarea 1", "Tarea 2", "Tarea 3"]

console.log(cola); // ["Tarea 1", "Tarea 2", "Tarea 3"]

// Eliminar elementos (dequeue)
console.log(cola.shift(), "ha sido eliminada."); // "Tarea 1" (sale el primero)
console.log(cola); // ["Tarea 2", "Tarea 3"]
console.log(cola.shift(), "ha sido eliminada."); // "Tarea 2"
console.log(cola); // ["Tarea 3"]
console.log(cola.shift(), "ha sido eliminada.");
console.log(cola);
console.log(cola.shift(), "ha sido eliminada.");
console.log(cola);


// Crear una pila
let pila = [];
// Agregar elementos (push)
pila.push("Plato 1"); // ["Plato 1"]
pila.push("Plato 2"); // ["Plato 1", "Plato 2"]
pila.push("Plato 3"); // ["Plato 1", "Plato 2", "Plato 3"]

console.log(pila); // ["Plato 1", "Plato 2", "Plato 3"]

// Eliminar elementos (pop)
console.log(pila.pop(), "ha sido usado"); // "Plato 3" (sale el último)
console.log(pila); // ["Plato 1", "Plato 2"]
console.log(pila.pop(), "ha sido usado"); // "Plato 2"
console.log(pila); // ["Plato 1"]


// Areglo para la cola
let colaTarea = [];

// Accion para agregar al final
const agregarAlFinal = (tarea) => {
console.log ('Tarea agregada: ${tarea}. Cola actual: ${colaTarea}');
};

// Accion para remover el incio
const removerDelInicio = () => {
  if (colaTarea.length === 0) {
    console.log("Cola vacía.");
    return null;
  }
  const tareaProcesada = colaTarea.shift();
  console.log(`Tarea procesada: ${tareaProcesada}. Cola actual: ${colaTarea}`);
  return tareaProcesada;
};

// Simulación del proceso
agregarAlFinal("Tarea A"); // Cola: ["Tarea A"]
agregarAlFinal("Tarea B"); // Cola: ["Tarea A", "Tarea B"]
agregarAlFinal("Tarea C"); // Cola: ["Tarea A", "Tarea B", "Tarea C"]
removerDelInicio();        // Procesa "Tarea A", Cola: ["Tarea B", "Tarea C"]
removerDelInicio();        // Procesa "Tarea B", Cola: ["Tarea C"]
removerDelInicio();        // Procesa "Tarea C", Cola: []


