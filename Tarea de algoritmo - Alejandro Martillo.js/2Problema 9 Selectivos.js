//9.	Solicitar al usuario un número y mostrar si es divisible por 2.

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: Ingresa un número.
// PROCESO: Verificar si el número es múltiplo de 2 utilizando el operador de módulo %. Si el residuo de la división del número entre 2 es 0, entonces el número es múltiplo de 2.
// SALIDA:  Mensaje indicando si el número ingresado por el usuario es múltiplo de 2 o no.

// SEUDOCODIGO //
//Inicio
//Escribir "Ingrese un número:"
//Leer numero
//Si numero módulo 2 es igual a 0 Entonces
//Escribir numero, " es múltiplo de 2"
//Sino
//Escribir numero, " no es múltiplo de 2"
//Fin Si
//Fin

// LENGUAJE JAVASCRIPT //
let numero = prompt("Ingrese un número:");
numero = parseInt(numero);
if (numero % 2 === 0) {
    console.log(numero + " es múltiplo de 2");
} else {
    console.log(numero + " no es múltiplo de 2");
}