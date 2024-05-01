//  8. Pedir al usuario su nombre y mostrarlo tres veces en la pantalla.
// Entrada: nombreUsuario=""(leer), nombreRepetido(proceso)
// Proceso: nombreRepetido=nombreUsuario+nombreUsuario+nombreUsuario
// Salida: nombreRepetido

// Algoritmo mostrarNombreTresVeces
//    Declarar nombreUsuario="", nombreRepetido=""
//    Escribir "Ingrese su nombre:"
//    Leer nombreUsuario
//    nombreRepetido=nombreUsuario+nombreUsuario+nombreUsuario
//    Escribir nombreRepetido
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function mostrarNombreTresVeces() {
   let nombreUsuario = "", nombreRepetido = "";
   write("Ingrese su nombre:");
   nombreUsuario = read();
   nombreRepetido = nombreUsuario + nombreUsuario + nombreUsuario;
   write(nombreRepetido);
}

mostrarNombreTresVeces();