// 10. Pedir al usuario un número y mostrar si es mayor, menor o igual a 100.
// Analisis de requerimentos:
// Entrada: numero=0(leer), comparacion(proceso)
// Proceso: Si numero > 100 entonces comparacion="mayor a 100", sino si numero < 100 entonces comparacion="menor a 100", sino comparacion="igual a 100"
// Salida: comparacion

// Algoritmo compararNumeroCien
//    Declarar numero=0, comparacion=""
//    Escribir "Ingrese un número:"
//    Leer numero
//    Si numero > 100 entonces
//       comparacion="mayor a 100"
//    sino si numero < 100 entonces
//       comparacion="menor a 100"
//    sino
//       comparacion="igual a 100"
//    FinSi
//    Escribir comparacion
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function compararNumeroCien() {
   let numero = 0, comparacion = "";
   write("Ingrese un número:");
   numero = parseFloat(read());
   if (numero > 100) {
      comparacion = "mayor a 100";
   } else if (numero < 100) {
      comparacion = "menor a 100";
   } else {
      comparacion = "igual a 100";
   }
   write(comparacion);
}

compararNumeroCien();