// 1. Pedir al usuario un número y mostrar si es mayor o menor que 10.
// Analisis de requerimentos:
// Entrada: numero=0(leer), mayorMenor(proceso)
// Proceso: Si numero > 10 entonces mayorMenor="mayor que 10", sino mayorMenor="menor o igual a 10"
// Salida: mayorMenor

// Algoritmo compararNumero
//    Declarar numero=0, mayorMenor=""
//    Escribir "Ingrese un número:"
//    Leer numero
//    Si numero > 10 entonces
//       mayorMenor="mayor que 10"
//    sino
//       mayorMenor="menor o igual a 10"
//    FinSi
//    Escribir mayorMenor
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function compararNumero() {
   let numero = 0, mayorMenor = "";
   write("Ingrese un número:");
   numero = parseFloat(read());
   if (numero > 10) {
      mayorMenor = "mayor que 10";
   } else {
      mayorMenor = "menor o igual a 10";
   }
   write(mayorMenor);
}

compararNumero();
