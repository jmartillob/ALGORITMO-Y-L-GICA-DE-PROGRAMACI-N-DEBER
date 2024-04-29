//11.	Solicitar al usuario un número y mostrar si es un número de un solo dígito.

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: Ingresar un número.
// PROCESO: Verificar si el número es de un solo dígito, es decir, si está en el rango del 0 al 9.
// SALIDA:  Indicar si el número es de un solo dígito o no.

// SEUDOCODIGO //
//Inicio
//Escribir "Ingrese un número:"
//Leer numero
//Si número es mayor o igual a 0 y número es menor o igual a 9 Entonces
//Escribir "El número es de un solo dígito"
//Sino
//Escribir "El número no es de un solo dígito"
//Fin Si
//Fin

// LENGUAJE JAVASCRIPT //
let numero = prompt("Ingrese un número:");
numero = parseInt(numero);
if (numero >= 0 && numero <= 9) {
    console.log("El número es de un solo dígito");
} else {
    console.log("El número no es de un solo dígito");
}