// 4. Solicitar al usuario un número y mostrar si es positivo o negativo.
// Analisis de requerimentos:
// Entrada: numero=0(leer), positivoNegativo(proceso)
// Proceso: Si numero > 0 entonces positivoNegativo="positivo", sino si numero < 0 entonces positivoNegativo="negativo", sino positivoNegativo="cero"
// Salida: positivoNegativo

// Algoritmo verificarPositivoNegativo
//    Declarar numero=0, positivoNegativo=""
//    Escribir "Ingrese un número:"
//    Leer numero
//    Si numero > 0 entonces
//       positivoNegativo="positivo"
//    sino si numero < 0 entonces
//       positivoNegativo="negativo"
//    sino
//       positivoNegativo="cero"
//    FinSi
//    Escribir positivoNegativo
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function verificarPositivoNegativo() {
   let numero = 0, positivoNegativo = "";
   write("Ingrese un número:");
   numero = parseFloat(read());
   if (numero > 0) {
      positivoNegativo = "positivo";
   } else if (numero < 0) {
      positivoNegativo = "negativo";
   } else {
      positivoNegativo = "cero";
   }
   write(positivoNegativo);
}

verificarPositivoNegativo();