// 17.	La asociación de vinicultores tiene como política fijar un precio inicial al kilo de banano, la cual se clasifica en tipos A y B, y además en tamaños 1 y 2. Cuando se realiza la venta del producto, ésta es de un solo tipo y tamaño, se requiere determinar cuánto recibirá un productor por el banano que entrega en un embarque, considerando lo siguiente:
// Si es de tipo A, se le cargan $2 al precio inicial cuando es de tamaño 1; y $3 si es de tamaño 2.
// Si es de tipo B, se rebajan $3 cuando es de tamaño 1, y $5 cuando es de tamaño 2.



// Entrada: Solicitar al usuario que ingrese el precio inicial, tipo y tamaño del banano
// Proceso: Calcular el precio final del banano según el tipo y tamaño ingresados
// Salida: Mostrar el precio final por kilo de banano


// Algoritmo calcularPrecioFinal
//    Declarar precioInicial como número
//    Declarar tipo como cadena
//    Declarar tamaño como número
//    Escribir "Ingrese el precio inicial por kilo de banano:"
//    Leer precioInicial
//    Escribir "Ingrese el tipo de banano (A o B):"
//    Leer tipo
//    Escribir "Ingrese el tamaño del banano (1 o 2):"
//    Leer tamaño
//    Si tipo es "A" hacer
//       Si tamaño es 1 hacer
//          Aumentar precioInicial en $2
//       Si no
//          Aumentar precioInicial en $3
//    Si no
//       Si tamaño es 1 hacer
//          Disminuir precioInicial en $3
//       Si no
//          Disminuir precioInicial en $5
//    Escribir "El precio final por kilo de banano es:", precioInicial
// FinAlgoritmo


const read = require('prompt-sync')();
const write = console.log;

function calcularPrecioFinal() {
   write("Ingrese el precio inicial por kilo de banano:");
   let precioInicial = parseFloat(read());

   write("Ingrese el tipo de banano (A o B):");
   let tipo = read().toUpperCase();

   write("Ingrese el tamaño del banano (1 o 2):");
   let tamaño = parseInt(read());

   if (tipo === "A") {
      if (tamaño === 1) {
         precioInicial += 2;
      } else {
         precioInicial += 3;
      }
   } else {
      if (tamaño === 1) {
         precioInicial -= 3;
      } else {
         precioInicial -= 5;
      }
   }

   write("El precio final por kilo de banano es:", precioInicial);
}

calcularPrecioFinal();
