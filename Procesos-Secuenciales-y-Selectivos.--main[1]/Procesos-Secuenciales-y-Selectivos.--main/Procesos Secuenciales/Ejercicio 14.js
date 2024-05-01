// 14. Dado un arreglo de 5 elementos, presentar el primero, el del medio y el último.
// Entrada: arreglo=["", "", "", "", ""](leer)
// Proceso: Leer 5 elementos y asignarlos al arreglo
// Salida: Presentar el primer, el del medio y el último elemento del arreglo

// Algoritmo presentarElementos
//    Declarar arreglo=["", "", "", "", ""]
//    Para i=0 hasta 4 hacer
//       Escribir "Ingrese el elemento", i+1, ":"
//       Leer arreglo[i]
//    FinPara
//    Escribir "Primer elemento:", arreglo[0]
//    Escribir "Elemento del medio:", arreglo[2]
//    Escribir "Último elemento:", arreglo[4]
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function presentarElementos() {
   let arreglo = ["", "", "", "", ""];
   for (let i = 0; i < 5; i++) {
      write(`Ingrese el elemento ${i + 1}:`);
      arreglo[i] = read();
   }
   write("Primer elemento:", arreglo[0]);
   write("Elemento del medio:", arreglo[2]);
   write("Último elemento:", arreglo[4]);
}

presentarElementos();