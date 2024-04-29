//3.	Pedir al usuario un número y mostrar si es par o impar.

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: Ingresa un número
// PROCESO: Se verifica si el número es par o impar utilizando la operación de módulo (%) para comprobar si el residuo de la división entre 2 es igual a 0.
// SALIDA:  Mostrar un mensaje en consola que indica si el número ingresado por el usuario es par o impar

// SEUDOCODIGO //
//Inicio
//Escribir "Por favor, ingrese un número:"
//Leer numero
//Si numero % 2 == 0 Entonces
//Escribir "El número ingresado es par."
//Sino
//Escribir "El número ingresado es impar."
//Fin Si
//Fin

// LENGUAJE JAVASCRIPT //
let numero = prompt("Por favor, ingrese un número:");
numero = parseInt(numero);
if (numero % 2 === 0) {
    console.log("El número ingresado es par.");
} else {
    console.log("El número ingresado es impar.");
}