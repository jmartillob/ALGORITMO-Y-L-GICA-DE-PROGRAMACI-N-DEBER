//12.	Pedir al usuario el monto total de una factura y el porcentaje de IVA aplicado. Luego, calcular y mostrar el monto total a pagar incluyendo el IVA.

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: Ingresar dos valores: el monto total de la factura y el porcentaje de IVA aplicado.
// PROCESO: Calcular el monto del IVA multiplicando el monto total de la factura por el porcentaje de IVA.
//          Se calcula el monto total a pagar incluyendo el IVA sumando el monto total de la factura y el monto del IVA.
// SALIDA:  Mostrar al usuario el monto total a pagar incluyendo el IVA.

// SEUDOCODIGO //
//Inicio
//Escribir "Ingrese el monto total de la factura:"
//Leer montoTotal
//Escribir "Ingrese el porcentaje de IVA aplicado:"
//Leer porcentajeIVA
//iva = montoTotal * (porcentajeIVA / 100)
//montoTotalConIVA = montoTotal + iva
//Escribir "El monto total a pagar incluyendo el IVA es:", montoTotalConIVA
//Fin

// LENGUAJE JAVASCRIPT //
let montoTotal = prompt("Ingrese el monto total de la factura:");
montoTotal = parseFloat(montoTotal);
let porcentajeIVA = prompt("Ingrese el porcentaje de IVA aplicado:");
porcentajeIVA = parseFloat(porcentajeIVA);
let iva = montoTotal * (porcentajeIVA / 100);
let montoTotalConIVA = montoTotal + iva;
console.log("El monto total a pagar incluyendo el IVA es: " + montoTotalConIVA);