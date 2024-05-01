// 7.Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo.
// Analisis de requerimentos:
// Entrada: nombre1=""(leer), nombre2=""(leer), comparacion(proceso)
// Proceso: Si nombre1 === nombre2 entonces comparacion="iguales", sino si nombre1 > nombre2 entonces comparacion="el primero es mayor", sino comparacion="el segundo es mayor"
// Salida: comparacion

// Algoritmo compararNombres
//    Declarar nombre1="", nombre2="", comparacion=""
//    Escribir "Ingrese el primer nombre:"
//    Leer nombre1
//    Escribir "Ingrese el segundo nombre:"
//    Leer nombre2
//    Si nombre1 === nombre2 entonces
//       comparacion="iguales"
//    sino si nombre1 > nombre2 entonces
//       comparacion="el primero es mayor"
//    sino
//       comparacion="el segundo es mayor"
//    FinSi
//    Escribir comparacion
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function compararNombres() {
   let nombre1 = "", nombre2 = "", comparacion = "";
   write("Ingrese el primer nombre:");
   nombre1 = read();
   write("Ingrese el segundo nombre:");
   nombre2 = read();
   if (nombre1 === nombre2) {
      comparacion = "iguales";
   } else if (nombre1 > nombre2) {
      comparacion = "el primero es mayor";
   } else {
      comparacion = "el segundo es mayor";
   }
   write(comparacion);
}

compararNombres();