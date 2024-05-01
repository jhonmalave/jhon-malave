// 2. Pedir dos palabras y presentarlas concatenadas
// Analisis de requerimentos:
// Entrada: palabra1=""(leer), palabra2=""(leer), concatenar(proceso)
// Proceso: concatenar=palabra1+" "+palabra2
// Salida: concatenar

// Seudocódigo:
// Algoritmo unir
//    Declarar palabra1="", palabra2="", concatenar=""
//    Escribir "Ingrese palabra1"
//    Leer palabra1
//    Escribir "Ingrese palabra2"
//    Leer palabra2
//    concatenar=palabra1+" "+palabra2
//    Escribir concatenar
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function unir() {
   let palabra1="", palabra2="", concatenar=""
   write("Ingrese palabra1:");
   palabra1 = read();
   write("Ingrese palabra2:");
   palabra2 = read();
   concatenar = palabra1 + " " + palabra2;
   write(concatenar);
}

unir();