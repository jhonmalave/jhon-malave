// 3. Solicitar al usuario dos números y mostrar su suma.
// Analisis de requerimentos:
// Entrada: numero1=0(leer), numero2=0(leer), suma(proceso)
// Proceso: suma=numero1+numero2
// Salida: suma

// Seudocódigo:
// Algoritmo sumarNumeros
//    Declarar numero1=0, numero2=0, suma=0
//    Escribir "Ingrese el primer número:"
//    Leer numero1
//    Escribir "Ingrese el segundo número:"
//    Leer numero2
//    suma=numero1+numero2
//    Escribir "La suma de los números es:", suma
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function sumarNumeros() {
   let numero1 = 0, numero2 = 0, suma = 0;
   write("Ingrese el primer número:");
   numero1 = parseFloat(read());
   write("Ingrese el segundo número:");
   numero2 = parseFloat(read());
   suma = numero1 + numero2;
   write("La suma de los números es:", suma);
}

sumarNumeros();