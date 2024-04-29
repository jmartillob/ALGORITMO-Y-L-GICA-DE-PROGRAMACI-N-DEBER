//2.	Solicitar al usuario su edad y mostrar si es mayor o menor de edad.

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: Pedir al usuario ingresar su edad.
// PROCESO: Se verifica si la edad es mayor o menor a 18 utilizando una estructura if-else.
// SALIDA:  Se mostrar un mensaje en la consola que indica si el usuario es mayor o menor de edad.

// SEUDOCODIGO //
//Inicio
//Escribir "Por favor, ingrese su edad:"
//Leer edad
//Si edad >= 18 Entonces
//Escribir "Usted es mayor de edad."
//Sino
//Escribir "Usted es menor de edad."
//Fin Si
//Fin

// LENGUAJE JAVASCRIPT //
let edad = prompt("Por favor, ingrese su edad:");
edad = parseInt(edad);
if (edad >= 18) {
    console.log("Usted es mayor de edad.");
} else {
    console.log("Usted es menor de edad.");
}