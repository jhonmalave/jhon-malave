// 9. Solicitar al usuario un número y mostrar si es divisible por 2.
// Analisis de requerimentos:
// Entrada: numero=0(leer), divisibleDos(proceso)
// Proceso: Si numero % 2 === 0 entonces divisibleDos="es divisible por 2", sino divisibleDos="no es divisible por 2"
// Salida: divisibleDos

// Algoritmo verificarDivisibleDos
//    Declarar numero=0, divisibleDos=""
//    Escribir "Ingrese un número:"
//    Leer numero
//    Si numero % 2 === 0 entonces
//       divisibleDos="es divisible por 2"
//    sino
//       divisibleDos="no es divisible por 2"
//    FinSi
//    Escribir divisibleDos
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function verificarDivisibleDos() {
   let numero = 0, divisibleDos = "";
   write("Ingrese un número:");
   numero = parseInt(read());
   if (numero % 2 === 0) {
      divisibleDos = "es divisible por 2";
   } else {
      divisibleDos = "no es divisible por 2";
   }
   write(divisibleDos);
}

verificarDivisibleDos();
