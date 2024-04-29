//9.	Solicitar al usuario un número y mostrar su tabla de multiplicar del 1 al 10.

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: Pedir al usuario un número
// PROCESO: Se solicita al usuario que ingrese un número.
//          Se definen los multiplicadores del 1 al 10.
//          Se calculan los resultados de la multiplicación del número ingresado por cada uno de los multiplicadores.
// SALIDA:  Mostrar la tabla de multiplicar del número ingresado por los multiplicadores del 1 al 10.

// SEUDOCODIGO //
//Inicio
//Leer numero
//multiplicadores[0] = 1
//multiplicadores[1] = 2
//multiplicadores[2] = 3
//multiplicadores[3] = 4
//multiplicadores[4] = 5
//multiplicadores[5] = 6
//multiplicadores[6] = 7
//multiplicadores[7] = 8
//multiplicadores[8] = 9
//multiplicadores[9] = 10
//resultados[0] = numero * multiplicadores[0]
//resultados[1] = numero * multiplicadores[1]
//resultados[2] = numero * multiplicadores[2]
//resultados[3] = numero * multiplicadores[3]
//resultados[4] = numero * multiplicadores[4]
//resultados[5] = numero * multiplicadores[5]
//resultados[6] = numero * multiplicadores[6]
//resultados[7] = numero * multiplicadores[7]
//resultados[8] = numero * multiplicadores[8]
//resultados[9] = numero * multiplicadores[9]
//Escribir "Tabla de multiplicar de ", numero, ":"
//Escribir numero, " x ", multiplicadores[0], " = ", resultados[0]
//Escribir numero, " x ", multiplicadores[1], " = ", resultados[1]
//Escribir numero, " x ", multiplicadores[2], " = ", resultados[2]
//Escribir numero, " x ", multiplicadores[3], " = ", resultados[3]
//Escribir numero, " x ", multiplicadores[4], " = ", resultados[4]
//Escribir numero, " x ", multiplicadores[5], " = ", resultados[5]
//Escribir numero, " x ", multiplicadores[6], " = ", resultados[6]
//Escribir numero, " x ", multiplicadores[7], " = ", resultados[7]
//Escribir numero, " x ", multiplicadores[8], " = ", resultados[8]
//Escribir numero, " x ", multiplicadores[9], " = ", resultados[9]
//Fin

// LENGUAJE JAVASCRIPT //
let numero = prompt("Por favor, ingresa un número:");
let multiplicadores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let resultados = [];
resultados.push(numero * multiplicadores[0]);
resultados.push(numero * multiplicadores[1]);
resultados.push(numero * multiplicadores[2]);
resultados.push(numero * multiplicadores[3]);
resultados.push(numero * multiplicadores[4]);
resultados.push(numero * multiplicadores[5]);
resultados.push(numero * multiplicadores[6]);
resultados.push(numero * multiplicadores[7]);
resultados.push(numero * multiplicadores[8]);
resultados.push(numero * multiplicadores[9]);
console.log("Tabla de multiplicar de " + numero + ":");
console.log(numero + " x " + multiplicadores[0] + " = " + resultados[0]);
console.log(numero + " x " + multiplicadores[1] + " = " + resultados[1]);
console.log(numero + " x " + multiplicadores[2] + " = " + resultados[2]);
console.log(numero + " x " + multiplicadores[3] + " = " + resultados[3]);
console.log(numero + " x " + multiplicadores[4] + " = " + resultados[4]);
console.log(numero + " x " + multiplicadores[5] + " = " + resultados[5]);
console.log(numero + " x " + multiplicadores[6] + " = " + resultados[6]);
console.log(numero + " x " + multiplicadores[7] + " = " + resultados[7]);
console.log(numero + " x " + multiplicadores[8] + " = " + resultados[8]);
console.log(numero + " x " + multiplicadores[9] + " = " + resultados[9]);