// 5. Solicitar al usuario su edad y mostrar un mensaje indicando cuántos años tendrá en el próximo año.
// Analisis de requerimentos:
// Entrada: edad=0(leer), edadProximoAnio(proceso)
// Proceso: edadProximoAnio=edad+1
// Salida: edadProximoAnio

// Seudocódigo:
// Algoritmo edadProximoAnio
//    Declarar edad=0, edadProximoAnio=0
//    Escribir "Ingrese su edad:"
//    Leer edad
//    edadProximoAnio=edad+1
//    Escribir "El próximo año tendrá", edadProximoAnio, "años."
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function edadProximoAnio() {
   let edad = 0, edadProximoAnio = 0;
   write("Ingrese su edad:");
   edad = parseInt(read());
   edadProximoAnio = edad + 1;
   write("El próximo año tendrá", edadProximoAnio, "años.");
}

edadProximoAnio();