//16.	Pedir al usuario su sueldo mensual y determinar su sueldo anual. Si el sueldo anual supera los $30,000, aplicar un impuesto del 15% sobre el excedente y mostrar el sueldo neto anual.

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: El sueldo mensual del usuario. 
// PROCESO: Se calcula el sueldo anual multiplicando el sueldo mensual por 12.
//          Se verifica si el sueldo anual supera los $30,000, si es así, se calcula un impuesto del 15% sobre el excedente y se resta del sueldo anual para obtener el sueldo neto anual, si no, no se aplica ningún impuesto.
// SALIDA:  Mostrar el sueldo neto anual si se aplicó impuesto, o el sueldo anual sin impuestos si no se superaron los $30,000.

// SEUDOCODIGO //
//Inicio
//Escribir "Ingrese su sueldo mensual:"
//Leer sueldo_mensual
//sueldo_anual = sueldo_mensual * 12
//SI sueldo_anual > 30000 ENTONCES
//excedente = sueldo_anual - 30000
//impuesto = excedente * 0.15
//sueldo_neto_anual = sueldo_anual - impuesto
//Escribir "Su sueldo neto anual es:", sueldo_neto_anual
//SINO
//Escribir "Su sueldo anual es:", sueldo_anual
//FIN SI
//Fin

// LENGUAJE JAVASCRIPT //
let sueldoMensual = parseFloat(prompt("Ingrese su sueldo mensual:"));
let sueldoAnual = sueldoMensual * 12;
if (sueldoAnual > 30000) {
    let excedente = sueldoAnual - 30000;
    let impuesto = excedente * 0.15;
    let sueldoNetoAnual = sueldoAnual - impuesto;
    console.log("Su sueldo neto anual es:", sueldoNetoAnual);
} else {
    console.log("Su sueldo anual es:", sueldoAnual);
}