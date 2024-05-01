// 10. Pedir al usuario dos números y mostrar el mayor.
// Entrada: numero1=0(leer), numero2=0(leer), mayor(proceso)
// Proceso: Si numero1 > numero2 entonces mayor=numero1, sino mayor=numero2
// Salida: mayor

// Algoritmo mostrarMayor
//    Declarar numero1=0, numero2=0, mayor=0
//    Escribir "Ingrese el primer número:"
//    Leer numero1
//    Escribir "Ingrese el segundo número:"
//    Leer numero2
//    Si numero1 > numero2 entonces
//       mayor=numero1
//    sino
//       mayor=numero2
//    FinSi
//    Escribir "El mayor es:", mayor
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function mostrarMayor() {
   let numero1 = 0, numero2 = 0, mayor = 0;
   write("Ingrese el primer número:");
   numero1 = parseFloat(read());
   write("Ingrese el segundo número:");
   numero2 = parseFloat(read());
   if (numero1 > numero2) {
      mayor = numero1;
   } else {
      mayor = numero2;
   }
   write("El mayor es:", mayor);
}

mostrarMayor();