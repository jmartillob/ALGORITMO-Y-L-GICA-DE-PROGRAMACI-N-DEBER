//7.	Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo.

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: Dos nombre ingresado por el usuario
// PROCESO: Determina si los nombres son iguales, o si uno es mayor que el otro, o si uno es menor que el otro.
// SALIDA:  Indicar si los nombres son iguales, si uno es mayor que el otro o si uno es menor que el otro.

// SEUDOCODIGO //
//Inicio
//Escribir "Ingrese el primer nombre: "
//Leer nombre1
//Escribir "Ingrese el segundo nombre: "
//Leer nombre2
//Si nombre1 es igual a nombre2 Entonces
//Escribir "Los nombres son iguales"
//Sino Si nombre1 es mayor que nombre2 Entonces
//Escribir nombre1, " es mayor que ", nombre2
//Sino
//Escribir nombre1, " es menor que ", nombre2
//Fin Si
//Fin

// LENGUAJE JAVASCRIPT //
let nombre1 = prompt("Ingrese el primer nombre:");
let nombre2 = prompt("Ingrese el segundo nombre:");
if (nombre1 === nombre2) {
    console.log("Los nombres son iguales");
} else if (nombre1 > nombre2) {
    console.log(nombre1 + " es mayor que " + nombre2);
} else {
    console.log(nombre1 + " es menor que " + nombre2);
}