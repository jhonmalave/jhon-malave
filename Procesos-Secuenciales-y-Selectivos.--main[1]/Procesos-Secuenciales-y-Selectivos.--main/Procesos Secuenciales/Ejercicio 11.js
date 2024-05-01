// 11. Solicitar al usuario una distancia en metros y mostrarla en centímetros.
// Entrada: metros=0.0(leer), centimetros(proceso)
// Proceso: centimetros=metros*100
// Salida: centimetros

// Algoritmo metrosACentimetros
//    Declarar metros=0.0, centimetros=0.0
//    Escribir "Ingrese la distancia en metros:"
//    Leer metros
//    centimetros=metros*100
//    Escribir "La distancia en centímetros es:", centimetros
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function metrosACentimetros() {
   let metros = 0.0, centimetros = 0.0;
   write("Ingrese la distancia en metros:");
   metros = parseFloat(read());
   centimetros = metros * 100;
   write("La distancia en centímetros es:", centimetros);
}

metrosACentimetros();