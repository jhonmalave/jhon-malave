// 2. Solicitar al usuario su edad y mostrar si es mayor o menor de edad.
// Analisis de requerimentos:
// Entrada: edad=0(leer), mayorMenorEdad(proceso)
// Proceso: Si edad >= 18 entonces mayorMenorEdad="mayor de edad", sino mayorMenorEdad="menor de edad"
// Salida: mayorMenorEdad

// Algoritmo verificarEdad
//    Declarar edad=0, mayorMenorEdad=""
//    Escribir "Ingrese su edad:"
//    Leer edad
//    Si edad >= 18 entonces
//       mayorMenorEdad="mayor de edad"
//    sino
//       mayorMenorEdad="menor de edad"
//    FinSi
//    Escribir mayorMenorEdad
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function verificarEdad() {
   let edad = 0, mayorMenorEdad = "";
   write("Ingrese su edad:");
   edad = parseInt(read());
   if (edad >= 18) {
      mayorMenorEdad = "mayor de edad";
   } else {
      mayorMenorEdad = "menor de edad";
   }
   write(mayorMenorEdad);
}

verificarEdad();
