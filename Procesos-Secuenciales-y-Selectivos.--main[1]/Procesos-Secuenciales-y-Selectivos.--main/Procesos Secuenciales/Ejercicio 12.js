// 12. Pedir 5 números y asignarlos en un arreglo.
// Entrada: numeros=[0, 0, 0, 0, 0](leer)
// Proceso: Leer 5 números y asignarlos a la lista numeros
// Salida: numeros

// Algoritmo asignarNumerosArreglo
//    Declarar numeros=[0, 0, 0, 0, 0]
//    Para i=0 hasta 4 hacer
//       Escribir "Ingrese el número", i+1, ":"
//       Leer numeros[i]
//    FinPara
//    Escribir "Los números ingresados son:", numeros
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function asignarNumerosArreglo() {
   let numeros = [0, 0, 0, 0, 0];
   for (let i = 0; i < 5; i++) {
      write(`Ingrese el número ${i + 1}:`);
      numeros[i] = parseFloat(read());
   }
   write("Los números ingresados son:", numeros);
}

asignarNumerosArreglo();