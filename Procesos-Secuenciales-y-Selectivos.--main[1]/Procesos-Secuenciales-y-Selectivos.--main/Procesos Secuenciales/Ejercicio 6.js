// 6. Pedir al usuario dos números y mostrar el resultado de multiplicarlos.
// Analisis de requerimentos:
// Entrada: numero1=0(leer), numero2=0(leer), multiplicacion(proceso)
// Proceso: multiplicacion=numero1*numero2
// Salida: multiplicacion

// Seudocódigo:
// Algoritmo multiplicarNumeros
//    Declarar numero1=0, numero2=0, multiplicacion=0
//    Escribir "Ingrese el primer número:"
//    Leer numero1
//    Escribir "Ingrese el segundo número:"
//    Leer numero2
//    multiplicacion=numero1*numero2
//    Escribir "El resultado de la multiplicación es:", multiplicacion
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function multiplicarNumeros() {
   let numero1 = 0, numero2 = 0, multiplicacion = 0;
   write("Ingrese el primer número:");
   numero1 = parseFloat(read());
   write("Ingrese el segundo número:");
   numero2 = parseFloat(read());
   multiplicacion = numero1 * numero2;
   write("El resultado de la multiplicación es:", multiplicacion);
}

multiplicarNumeros();