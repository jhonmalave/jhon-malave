// 3. Pedir al usuario un número y mostrar si es par o impar.
// Analisis de requerimentos:
// Entrada: numero=0(leer), parImpar(proceso)
// Proceso: Si numero % 2 === 0 entonces parImpar="par", sino parImpar="impar"
// Salida: parImpar

// Algoritmo verificarParImpar
//    Declarar numero=0, parImpar=""
//    Escribir "Ingrese un número:"
//    Leer numero
//    Si numero % 2 === 0 entonces
//       parImpar="par"
//    sino
//       parImpar="impar"
//    FinSi
//    Escribir parImpar
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function verificarParImpar() {
   let numero = 0, parImpar = "";
   write("Ingrese un número:");
   numero = parseInt(read());
   if (numero % 2 === 0) {
      parImpar = "par";
   } else {
      parImpar = "impar";
   }
   write(parImpar);
}

verificarParImpar();