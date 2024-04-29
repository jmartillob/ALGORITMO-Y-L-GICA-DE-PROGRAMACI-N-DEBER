//13.	Solicitar al usuario el precio de un producto y el porcentaje de descuento aplicado. Calcular y mostrar el precio final luego de aplicar el descuento.

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: Ingresar dos valores: el precio del producto y el porcentaje de descuento aplicado.
// PROCESO: Calcular el monto del descuento multiplicando el precio del producto por el porcentaje de descuento.
//          Calcular el precio final después de aplicar el descuento restando el monto del descuento al precio del producto.
// SALIDA:  Mostrar al usuario el precio final después de aplicar el descuento.

// SEUDOCODIGO //
//Inicio
//Escribir "Ingrese el precio del producto:"
//Leer precioProducto
//Escribir "Ingrese el porcentaje de descuento aplicado:"
//Leer porcentajeDescuento
//descuento = precioProducto * (porcentajeDescuento / 100)
//precioFinal = precioProducto - descuento
//Escribir "El precio final luego de aplicar el descuento es:", precioFinal
//Fin

// LENGUAJE JAVASCRIPT //
let precioProducto = prompt("Ingrese el precio del producto:");
precioProducto = parseFloat(precioProducto);
let porcentajeDescuento = prompt("Ingrese el porcentaje de descuento aplicado:");
porcentajeDescuento = parseFloat(porcentajeDescuento);
let descuento = precioProducto * (porcentajeDescuento / 100);
let precioFinal = precioProducto - descuento;
console.log("El precio final luego de aplicar el descuento es: " + precioFinal);