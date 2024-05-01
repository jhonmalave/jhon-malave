// 15. Dado un arreglo de 5 elementos, cambiar los valores el primer y último elemento entre si
// Entrada: arreglo=["", "", "", "", ""](leer)
// Proceso: Leer 5 elementos y asignarlos al arreglo
//          Intercambiar el primer y último elemento del arreglo
// Salida: Presentar el arreglo con los extremos intercambiados

// Algoritmo intercambiarExtremos
//    Declarar arreglo=["", "", "", "", ""]
//    Para i=0 hasta 4 hacer
//       Escribir "Ingrese el elemento", i+1, ":"
//       Leer arreglo[i]
//    FinPara
//    Intercambiar el primer y último elemento del arreglo
//    Escribir "Arreglo con extremos intercambiados:", arreglo
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function intercambiarExtremos() {
   let arreglo = ["", "", "", "", ""];
   for (let i = 0; i < 5; i++) {
      write(`Ingrese el elemento ${i + 1}:`);
      arreglo[i] = read();
   }
   let primerElemento = arreglo[0];
   arreglo[0] = arreglo[4];
   arreglo[4] = primerElemento;
   write("Arreglo con extremos intercambiados:", arreglo);
}

intercambiarExtremos();
