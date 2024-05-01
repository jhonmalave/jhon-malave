// 22.	Dado un arreglo de 5 elementos presentar la suma de dichos elementos

// Entrada: Solicitar al usuario que ingrese 5 elementos para el arreglo
// Proceso: Sumar los elementos del arreglo
// Salida: Mostrar la suma de los elementos del arreglo

// Algoritmo sumarElementos
//    Declarar arreglo como un arreglo de 5 elementos
//    Leer los 5 elementos del arreglo
//    Declarar suma como 0
//    Para cada elemento en el arreglo hacer
//       Sumar el elemento a la variable suma
//    FinPara
//    Escribir "La suma de los elementos del arreglo es:", suma
// FinAlgoritmo


const read = require('prompt-sync')();
const write = console.log;

function sumarElementos() {
   let arreglo = [];

   write("Ingrese 5 elementos para el arreglo:");
   for (let i = 0; i < 5; i++) {
      arreglo[i] = parseFloat(read());
   }

   let suma = 0;
   for (let elemento of arreglo) {
      suma += elemento;
   }

   write("La suma de los elementos del arreglo es:", suma);
}

sumarElementos();
