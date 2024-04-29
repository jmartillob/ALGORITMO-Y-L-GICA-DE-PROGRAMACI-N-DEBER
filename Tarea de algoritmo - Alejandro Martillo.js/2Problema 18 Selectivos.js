/*18.	“Somos más” es una empresa dedicada a ofrecer banquetes; sus tarifas son las siguientes:
El costo de platillo por persona es de $20.00, pero si el número de personas es mayor a 100 pero menor o igual a 200, el costo es de $15.00.  Para más de 200 personas el costo por platillo es de $10.00.
Se requiere un algoritmo que ayude a determinar el presupuesto que se debe presentar a los clientes que deseen realizar un evento, considerando que al total hay que agregarle el 15% del iva*/

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: Número de personas en el evento.
// PROCESO: Se determina el costo por platillo por persona según el número de personas.
//          Se calcula el costo total sin IVA multiplicando el costo por platillo por el número de personas.
//          Se calcula el monto del IVA, que es el 15% del costo total sin IVA.
//          Se suma el monto del IVA al costo total sin IVA para obtener el costo total con IVA incluido.
// SALIDA:  Presupuesto total a presentar al cliente, que incluye el costo total con IVA.

// SEUDOCODIGO //
//Inicio
//Escribir "Por favor, ingresa el número de personas en el evento: "
//Leer numero_personas
//Si numero_personas <= 100 entonces
//costo_por_platillo = 20.00
//Sino si numero_personas > 100 y numero_personas <= 200 entonces
//costo_por_platillo = 15.00
//Sino
//costo_por_platillo = 10.00
//Fin Si
//costo_total_sin_iva = costo_por_platillo * numero_personas
//iva = 0.15 * costo_total_sin_iva
//costo_total_con_iva = costo_total_sin_iva + iva
//Escribir "El presupuesto total a presentar al cliente es: ", costo_total_con_iva
//Fin

// LENGUAJE JAVASCRIPT //
let numeroPersonas = parseInt(prompt("Por favor, ingresa el número de personas en el evento:"));
let costoPorPlatillo;
if (numeroPersonas <= 100) {
    costoPorPlatillo = 20.00;
} else if (numeroPersonas > 100 && numeroPersonas <= 200) {
    costoPorPlatillo = 15.00;
} else {
    costoPorPlatillo = 10.00;
}
let costoTotalSinIVA = costoPorPlatillo * numeroPersonas;
let iva = 0.15 * costoTotalSinIVA;
let costoTotalConIVA = costoTotalSinIVA + iva;
console.log("El presupuesto total a presentar al cliente es: $" + costoTotalConIVA.toFixed(2));