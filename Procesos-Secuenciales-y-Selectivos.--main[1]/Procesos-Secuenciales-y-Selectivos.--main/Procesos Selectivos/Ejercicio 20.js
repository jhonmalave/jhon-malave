// 20.	Dado un arreglo de 5 elementos indicar si el primero elemento es par y el último elemento es impar.


// Entrada: Solicitar al usuario que ingrese 5 elementos para el arreglo
// Proceso: Verificar si el primer elemento del arreglo es par y si el último elemento es impar
// Salida: Indicar si se cumple la condición de par e impar en los elementos del arreglo

// Algoritmo verificarParImpar
//    Declarar arreglo como un arreglo de 5 elementos
//    Leer los 5 elementos del arreglo
//    Si el primer elemento del arreglo es par y el último elemento es impar hacer
//       Escribir "El primer elemento es par y el último elemento es impar."
//    Si no
//       Escribir "El primer elemento no es par o el último elemento no es impar."
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;
function verificarParImpar() {
   let arreglo = [];

   write("Ingrese 5 elementos para el arreglo:");
   for (let i = 0; i < 5; i++) {
      arreglo[i] = parseInt(read());
   }

   if (arreglo[0] % 2 === 0 && arreglo[4] % 2 !== 0) {
      write("El primer elemento es par y el último elemento es impar.");
   } else {
      write("El primer elemento no es par o el último elemento no es impar.");
   }
}

verificarParImpar();
