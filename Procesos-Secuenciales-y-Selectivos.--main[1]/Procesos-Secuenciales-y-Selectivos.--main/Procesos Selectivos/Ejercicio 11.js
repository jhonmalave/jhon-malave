// 11. Solicitar al usuario un número y mostrar si es un número de un solo dígito.
// Analisis de requerimentos:
// Entrada: numero=0(leer), unSoloDigito(proceso)
// Proceso: Si numero es mayor o igual a -9 y menor o igual a 9 entonces unSoloDigito="es un número de un solo dígito", sino unSoloDigito="no es un número de un solo dígito"
// Salida: unSoloDigito

// Algoritmo verificarUnSoloDigito
//    Declarar numero=0, unSoloDigito=""
//    Escribir "Ingrese un número:"
//    Leer numero
//    Si numero es mayor o igual a -9 y menor o igual a 9 entonces
//       unSoloDigito="es un número de un solo dígito"
//    sino
//       unSoloDigito="no es un número de un solo dígito"
//    FinSi
//    Escribir unSoloDigito
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function verificarUnSoloDigito() {
   let numero = 0, unSoloDigito = "";
   write("Ingrese un número:");
   numero = parseFloat(read());
   if (numero >= -9 && numero <= 9) {
      unSoloDigito = "es un número de un solo dígito";
   } else {
      unSoloDigito = "no es un número de un solo dígito";
   }
   write(unSoloDigito);
}

verificarUnSoloDigito();