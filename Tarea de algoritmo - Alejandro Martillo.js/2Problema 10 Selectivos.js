//10.	Pedir al usuario un número y mostrar si es mayor, menor o igual a 100.

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: Ingresar un número.
// PROCESO: Se compara el número ingresado con 100 para determinar si es mayor, menor o igual.
// SALIDA:  Mostrar el número si es mayor, menor o igual a 100.

// SEUDOCODIGO //
//Inicio
//Escribir "Ingrese un número:"
//Leer numero
//Si numero es igual a 100 Entonces
//Escribir "El número es igual a 100"
//Sino Si numero es mayor que 100 Entonces
//Escribir "El número es mayor que 100"
//Sino
//Escribir "El número es menor que 100"
//Fin Si
//Fin

// LENGUAJE JAVASCRIPT //
let numero = prompt("Ingrese un número:");
numero = parseInt(numero);
if (numero === 100) {
    console.log("El número es igual a 100");
} else if (numero > 100) {
    console.log("El número es mayor que 100");
} else {
    console.log("El número es menor que 100");
}