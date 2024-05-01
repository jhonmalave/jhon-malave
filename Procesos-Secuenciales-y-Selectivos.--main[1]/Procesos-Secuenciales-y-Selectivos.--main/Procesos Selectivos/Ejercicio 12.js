// 12. Pedir al usuario el monto total de una factura y el porcentaje de IVA aplicado. Calcular y mostrar el monto total a pagar incluyendo el IVA.

// Analisis de requerimentos:
// Entrada: montoFactura=0(leer), porcentajeIVA=0(leer), montoTotal(proceso)
// Proceso: montoTotal = montoFactura + (montoFactura * porcentajeIVA / 100)
// Salida: montoTotal

// Algoritmo calcularMontoTotal
//    Declarar montoFactura=0, porcentajeIVA=0, montoTotal=0
//    Escribir "Ingrese el monto total de la factura:"
//    Leer montoFactura
//    Escribir "Ingrese el porcentaje de IVA aplicado:"
//    Leer porcentajeIVA
//    montoTotal = montoFactura + (montoFactura * porcentajeIVA / 100)
//    Escribir "El monto total a pagar incluyendo el IVA es:", montoTotal
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function calcularMontoTotal() {
   let montoFactura = 0, porcentajeIVA = 0, montoTotal = 0;
   write("Ingrese el monto total de la factura:");
   montoFactura = parseFloat(read());
   write("Ingrese el porcentaje de IVA aplicado:");
   porcentajeIVA = parseFloat(read());
   montoTotal = montoFactura + (montoFactura * porcentajeIVA / 100);
   write("El monto total a pagar incluyendo el IVA es:", montoTotal);
}

calcularMontoTotal();