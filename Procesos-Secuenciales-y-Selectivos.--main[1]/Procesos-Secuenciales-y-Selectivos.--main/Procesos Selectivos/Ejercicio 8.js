// 8. Pedir al usuario un número y mostrar si es múltiplo de 3.
// Analisis de requerimentos:
// Entrada: numero=0(leer), multiploTres(proceso)
// Proceso: Si numero % 3 === 0 entonces multiploTres="es múltiplo de 3", sino multiploTres="no es múltiplo de 3"
// Salida: multiploTres

// Algoritmo verificarMultiploTres
//    Declarar numero=0, multiploTres=""
//    Escribir "Ingrese un número:"
//    Leer numero
//    Si numero % 3 === 0 entonces
//       multiploTres="es múltiplo de 3"
//    sino
//       multiploTres="no es múltiplo de 3"
//    FinSi
//    Escribir multiploTres
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function verificarMultiploTres() {
   let numero = 0, multiploTres = "";
   write("Ingrese un número:");
   numero = parseInt(read());
   if (numero % 3 === 0) {
      multiploTres = "es múltiplo de 3";
   } else {
      multiploTres = "no es múltiplo de 3";
   }
   write(multiploTres);
}

verificarMultiploTres();