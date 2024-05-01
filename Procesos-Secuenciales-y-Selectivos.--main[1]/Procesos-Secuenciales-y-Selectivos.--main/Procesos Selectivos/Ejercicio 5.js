// 5. Pedir al usuario dos números y mostrar si son iguales o diferentes.
// Analisis de requerimentos:
// Entrada: num1=0(leer), num2=0(leer), igualDiferente(proceso)
// Proceso: Si num1 === num2 entonces igualDiferente="iguales", sino igualDiferente="diferentes"
// Salida: igualDiferente

// Algoritmo compararNumeros
//    Declarar num1=0, num2=0, igualDiferente=""
//    Escribir "Ingrese el primer número:"
//    Leer num1
//    Escribir "Ingrese el segundo número:"
//    Leer num2
//    Si num1 === num2 entonces
//       igualDiferente="iguales"
//    sino
//       igualDiferente="diferentes"
//    FinSi
//    Escribir igualDiferente
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function compararNumeros() {
   let num1 = 0, num2 = 0, igualDiferente = "";
   write("Ingrese el primer número:");
   num1 = parseFloat(read());
   write("Ingrese el segundo número:");
   num2 = parseFloat(read());
   if (num1 === num2) {
      igualDiferente = "iguales";
   } else {
      igualDiferente = "diferentes";
   }
   write(igualDiferente);
}

compararNumeros();