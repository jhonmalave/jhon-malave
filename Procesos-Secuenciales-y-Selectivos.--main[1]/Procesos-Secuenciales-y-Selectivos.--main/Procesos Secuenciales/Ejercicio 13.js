// 13.  Dado un arreglo de 5 nombres presentarlos todos.
// Entrada: nombres=["", "", "", "", ""](leer)
// Proceso: Leer 5 nombres y asignarlos a la lista nombres
// Salida: Presentar todos los nombres de la lista

// Algoritmo presentarNombres
//    Declarar nombres=["", "", "", "", ""]
//    Para i=0 hasta 4 hacer
//       Escribir "Ingrese el nombre", i+1, ":"
//       Leer nombres[i]
//    FinPara
//    Escribir "Los nombres son:"
//    Para cada nombre en nombres hacer
//       Escribir nombre
//    FinPara
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function presentarNombres() {
   let nombres = ["", "", "", "", ""];
   for (let i = 0; i < 5; i++) {
      write(`Ingrese el nombre ${i + 1}:`);
      nombres[i] = read();
   }
   write("Los nombres son:");
   nombres.forEach(nombre => write(nombre));
}

presentarNombres();