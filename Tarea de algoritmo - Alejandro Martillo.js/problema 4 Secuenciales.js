//4.	Pedir al usuario un número y mostrar su doble.

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: Un número ingresado por el usuario: "numero".
// PROCESO: Pedir al usuario que ingrese un número.
//          Calcular el doble del número ingresado multiplicándolo por 2. 
// SALIDA:  Mostrar al usuario el doble del número ingresado.

// SEUDOCODIGO //
//Inicio
//Escribir "Ingrese un número:"
//Leer numero
//doble = numero * 2
//Escribir "El doble de", numero, "es igual a", doble
//Fin

// LENGUAJE JAVASCRIPT //
let numero = parseFloat(prompt("Ingrese un número:"));
let doble = numero * 2;
console.log("El doble de " + numero + " es igual a " + doble);