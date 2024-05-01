// 14. Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, considerando 
// que la nota mínima de aprobación es 60 puntos.
// Analisis de requerimentos:
// Entrada: notaExamen=0(leer), estadoExamen(proceso)
// Proceso: Si notaExamen >= 60 entonces estadoExamen="aprobado", sino estadoExamen="reprobado"
// Salida: estadoExamen

// Algoritmo verificarEstadoExamen
//    Declarar notaExamen=0, estadoExamen=""
//    Escribir "Ingrese su nota en el examen:"
//    Leer notaExamen
//    Si notaExamen >= 60 entonces
//       estadoExamen="aprobado"
//    sino
//       estadoExamen="reprobado"
//    FinSi
//    Escribir "El estado del examen es:", estadoExamen
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function verificarEstadoExamen() {
   let notaExamen = 0, estadoExamen = "";
   write("Ingrese su nota en el examen:");
   notaExamen = parseFloat(read());
   if (notaExamen >= 60) {
      estadoExamen = "aprobado";
   } else {
      estadoExamen = "reprobado";
   }
   write("El estado del examen es:", estadoExamen);
}

verificarEstadoExamen();