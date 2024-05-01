// 9.  Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10.
// Entrada: numero=0(leer), tabla(proceso)
// Proceso: tabla=numero*1, numero*2, ..., numero*10
// Salida: tabla

// Algoritmo tablaMultiplicar
//    Declarar numero=0, tabla=""
//    Escribir "Ingrese un número:"
//    Leer numero
//    Para i=1 hasta 10 hacer
//       tabla=tabla+numero*i
//    FinPara
//    Escribir tabla
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function tablaMultiplicar() {
   let numero = 0, tabla = "";
   write("Ingrese un número:");
   numero = parseInt(read());
   for (let i = 1; i <= 10; i++) {
      tabla += `${numero} x ${i} = ${numero * i}\n`;
   }
   write(tabla);
}

tablaMultiplicar();