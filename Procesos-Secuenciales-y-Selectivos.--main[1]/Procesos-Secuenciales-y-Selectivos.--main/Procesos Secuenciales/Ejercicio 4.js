// 4. Pedir al usuario un número y mostrar su doble.
// Analisis de requerimentos:
// Entrada: numero=0(leer), doble(proceso)
// Proceso: doble=numero*2
// Salida: doble

// Seudocódigo:
// Algoritmo mostrarDoble
//    Declarar numero=0, doble=0
//    Escribir "Ingrese un número:"
//    Leer numero
//    doble=numero*2
//    Escribir "El doble del número ingresado es:", doble
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function mostrarDoble() {
   let numero = 0, doble = 0;
   write("Ingrese un número:");
   numero = parseInt(read());
   doble = numero * 2;
   write("El doble del número ingresado es:", doble);
}

mostrarDoble();