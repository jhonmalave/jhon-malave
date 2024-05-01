// 13. Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado. 
// calcular y mostrar el precio final luego de aplicar el descuento. 
// Analisis de requerimentos:
// Entrada: precioProducto=0(leer), porcentajeDescuento=0(leer), precioFinal(proceso)
// Proceso: precioFinal = precioProducto - (precioProducto * porcentajeDescuento / 100)
// Salida: precioFinal

// Algoritmo calcularPrecioFinal
//    Declarar precioProducto=0, porcentajeDescuento=0, precioFinal=0
//    Escribir "Ingrese el precio del producto:"
//    Leer precioProducto
//    Escribir "Ingrese el porcentaje de descuento aplicado:"
//    Leer porcentajeDescuento
//    precioFinal = precioProducto - (precioProducto * porcentajeDescuento / 100)
//    Escribir "El precio final luego de aplicar el descuento es:", precioFinal
// FinAlgoritmo

const read = require('prompt-sync')();
const write = console.log;

function calcularPrecioFinal() {
   let precioProducto = 0, porcentajeDescuento = 0, precioFinal = 0;
   write("Ingrese el precio del producto:");
   precioProducto = parseFloat(read());
   write("Ingrese el porcentaje de descuento aplicado:");
   porcentajeDescuento = parseFloat(read());
   precioFinal = precioProducto - (precioProducto * porcentajeDescuento / 100);
   write("El precio final luego de aplicar el descuento es:", precioFinal);
}

calcularPrecioFinal();