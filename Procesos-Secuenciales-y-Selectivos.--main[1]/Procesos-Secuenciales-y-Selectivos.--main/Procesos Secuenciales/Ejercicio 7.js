// 7. Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit.
// Analisis de requerimentos:
// Entrada: celsius=0.0(leer), fahrenheit(proceso)
// Proceso: fahrenheit=(celsius*9/5)+32
// Salida: fahrenheit

// Seudocódigo:
// Algoritmo convertirTemperatura
//    Declarar celsius=0.0, fahrenheit=0.0
//    Escribir "Ingrese la temperatura en grados Celsius:"
//    Leer celsius
//    fahrenheit=(celsius*9/5)+32
//    Escribir "La temperatura en grados Fahrenheit es:", fahrenheit
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function convertirTemperatura() {
   let celsius = 0.0, fahrenheit = 0.0;
   write("Ingrese la temperatura en grados Celsius:");
   celsius = parseFloat(read());
   fahrenheit = (celsius * 9/5) + 32;
   write("La temperatura en grados Fahrenheit es:", fahrenheit);
}

convertirTemperatura();