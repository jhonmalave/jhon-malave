// 1. Pedir al usuario su nombre y saludarlo.
// Analisis de requerimentos:
// Entrada: nombreUsuario=""(leer), saludo(proceso)
// Proceso: saludo="Hola, "+nombreUsuario+"!"
// Salida: saludo

// Seudocódigo:
// Algoritmo saludarUsuario
//    Declarar nombreUsuario="", saludo=""
//    Escribir "Por favor, ingrese su nombre:"
//    Leer nombreUsuario
//    saludo="Hola, "+nombreUsuario+"!"
//    Escribir saludo
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function saludarUsuario() {
   let nombreUsuario = "", saludo = "";
   write("Por favor, ingrese su nombre:");
   nombreUsuario = read();
   saludo = "Hola, " + nombreUsuario + "!";
   write(saludo);
}

saludarUsuario();