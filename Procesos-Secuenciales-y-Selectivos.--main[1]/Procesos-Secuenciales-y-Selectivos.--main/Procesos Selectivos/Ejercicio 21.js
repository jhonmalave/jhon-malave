// 21.	Dado un arreglo de 3 elementos indicar cuál de los elementos es el mayor


// Entrada: Solicitar al usuario que ingrese 3 elementos para el arreglo
// Proceso: Encontrar el mayor de los tres elementos ingresados
// Salida: Mostrar el mayor elemento del arreglo

// Algoritmo encontrarMayor
//    Declarar arreglo como un arreglo de 3 elementos
//    Leer los 3 elementos del arreglo
//    Declarar mayor como el primer elemento del arreglo
//    Si el segundo elemento es mayor que mayor, asignar mayor como el segundo elemento
//    Si el tercer elemento es mayor que mayor, asignar mayor como el tercer elemento
//    Escribir "El mayor elemento del arreglo es:", mayor
// FinAlgoritmo


const read = require('prompt-sync')();
const write = console.log;

function encontrarMayor() {
   let arreglo = [];

   write("Ingrese 3 elementos para el arreglo:");
   for (let i = 0; i < 3; i++) {
      arreglo[i] = parseFloat(read());
   }

   let mayor = arreglo[0];

   if (arreglo[1] > mayor) {
      mayor = arreglo[1];
   }

   if (arreglo[2] > mayor) {
      mayor = arreglo[2];
   }

   write("El mayor elemento del arreglo es:", mayor);
}

encontrarMayor();
