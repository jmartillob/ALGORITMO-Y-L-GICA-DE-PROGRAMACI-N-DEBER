//1.	Pedir al usuario un número y mostrar si es mayor o menor que 10.

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: Pedir al usuario un número.
// PROCESO: Se lee el número ingresado por el usuario.
//          Se verifica si el número es mayor, menor o igual que 10 utilizando una estructura if ,else-if ,else.
// SALIDA:  Se mostrar un mensaje en la consola que indica si el número ingresado por el usuario es mayor que 10, menor que 10 o igual a 10.

// SEUDOCODIGO //
//Inicio
//Escribir "Ingrese un número:"
//Leer numero
//Si numero > 10 Entonces
//Escribir "El número ingresado es mayor que 10."
//Sino
//Si numero < 10 Entonces
//Escribir "El número ingresado es menor que 10."
//Sino
//Escribir "El número ingresado es igual a 10."
//Fin Si
//Fin Si
//Fin

// LENGUAJE JAVASCRIPT //
let numero = prompt("Ingrese un número:");
numero = parseInt(numero);
if (numero > 10) {
    console.log("El número ingresado es mayor que 10.");
} else if (numero < 10) {
    console.log("El número ingresado es menor que 10.");
} else {
    console.log("El número ingresado es igual a 10.");
}