// 16.	Pedir al usuario su sueldo mensual y determinar su sueldo anual. Si el sueldo anual supera los $30,000, aplicar 
// un impuesto del 15% sobre el excedente y mostrar el sueldo neto anual.

// Entrada: Solicitar al usuario que ingrese su sueldo mensual
// Proceso: Calcular el sueldo anual multiplicando el sueldo mensual por 12
//          Si el sueldo anual supera los $30,000, aplicar un impuesto del 15% sobre el excedente
//          Calcular el sueldo neto anual restando el impuesto al sueldo anual
// Salida: Mostrar el sueldo neto anual si se aplicó el impuesto, de lo contrario mostrar el sueldo anual sin impuesto


// Algoritmo calcularSueldoAnual
//    Declarar sueldoMensual como número
//    Escribir "Ingrese su sueldo mensual:"
//    Leer sueldoMensual
//    Calcular sueldoAnual multiplicando sueldoMensual por 12
//    Si sueldoAnual es mayor que 30000 hacer
//       Declarar excedente como número y calcularlo restando 30000 a sueldoAnual
//       Declarar impuesto como número y calcularlo multiplicando excedente por 0.15
//       Declarar sueldoNetoAnual como número y calcularlo restando impuesto a sueldoAnual
//       Escribir "Sueldo anual con impuesto:", sueldoNetoAnual
//    Si no
//       Escribir "Sueldo anual sin impuesto:", sueldoAnual
//    FinSi
// FinAlgoritmo



const read = require('prompt-sync')();
const write = console.log;

function calcularSueldoAnual() {
   write("Ingrese su sueldo mensual:");
   const sueldoMensual = parseFloat(read());

   const sueldoAnual = sueldoMensual * 12;

   if (sueldoAnual > 30000) {
      const excedente = sueldoAnual - 30000;
      const impuesto = excedente * 0.15;
      const sueldoNetoAnual = sueldoAnual - impuesto;
      write("Sueldo anual con impuesto:", sueldoNetoAnual);
   } else {
      write("Sueldo anual sin impuesto:", sueldoAnual);
   }
}

calcularSueldoAnual();
