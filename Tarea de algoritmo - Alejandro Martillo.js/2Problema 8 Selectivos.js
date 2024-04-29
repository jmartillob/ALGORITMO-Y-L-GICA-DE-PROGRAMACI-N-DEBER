//8.	Pedir al usuario un número y mostrar si es múltiplo de 3.

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: Ingresa un número.
// PROCESO: Verificar si el número es múltiplo de 3 utilizando el operador de módulo %. Si el residuo de la división del número entre 3 es 0, entonces el número es múltiplo de 3.
// SALIDA:  Mensaje indicando si el número ingresado por el usuario es múltiplo de 3 o no.

// SEUDOCODIGO //
//Inicio
//Escribir "Ingrese un número:"
//Leer numero
//Si numero módulo 3 es igual a 0 Entonces
//Escribir numero, " es múltiplo de 3"
//Sino
//Escribir numero, " no es múltiplo de 3"
//Fin Si
//Fin

// LENGUAJE JAVASCRIPT //
let numero = prompt("Ingrese un número:");
numero = parseInt(numero);
if (numero % 3 === 0) {
    console.log(numero + " es múltiplo de 3");
} else {
    console.log(numero + " no es múltiplo de 3");
}