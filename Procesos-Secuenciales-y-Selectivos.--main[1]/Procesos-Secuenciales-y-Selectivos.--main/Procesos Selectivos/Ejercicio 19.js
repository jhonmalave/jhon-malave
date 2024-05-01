// 19.	Dado un arreglo de 5 elementos indicar si el primero elemento es mayor que el último elemento.

// Entrada: Solicitar al usuario que ingrese 5 elementos para el arreglo
// Proceso: Comparar el primer elemento del arreglo con el último elemento
// Salida: Indicar si el primer elemento es mayor que el último elemento o no

// Algoritmo compararElementos
//    Declarar arreglo como un arreglo de 5 elementos
//    Leer los 5 elementos del arreglo
//    Si el primer elemento del arreglo es mayor que el último elemento hacer
//       Escribir "El primer elemento es mayor que el último elemento."
//    Si no
//       Escribir "El primer elemento no es mayor que el último elemento."
// FinAlgoritmo


const read = require('prompt-sync')();
const write = console.log;

function compararElementos() {
   let arreglo = [];

   write("Ingrese 5 elementos para el arreglo:");
   for (let i = 0; i < 5; i++) {
      arreglo[i] = parseFloat(read());
   }

   if (arreglo[0] > arreglo[4]) {
      write("El primer elemento es mayor que el último elemento.");
   } else {
      write("El primer elemento no es mayor que el último elemento.");
   }
}

compararElementos();
