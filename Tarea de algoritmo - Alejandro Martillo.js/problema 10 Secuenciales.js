//10.	Pedir al usuario dos números y mostrar el mayor.

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: Pedir dos números al usuario.
// PROCESO: Se utiliza la función Math.max() para comparar los dos números ingresados y encontrar el mayor entre ellos,es decir, el número mayor, se guarda en una variable.
// SALIDA:  El número mayor encontrado.

// SEUDOCODIGO //
//Inicio
//Escribir "Por favor, ingresa el primer número:"
//Leer primer_numero
//Escribir "Ahora, ingresa el segundo número:"
//Leer segundo_numero
//Si primer_numero > segundo_numero entonces
//    Escribir "El primer número", primer_numero, "es mayor que el segundo número", segundo_numero
//Sino si primer_numero < segundo_numero entonces
//    Escribir "El segundo número", segundo_numero, "es mayor que el primer número", primer_numero
//Sino
//   Escribir "Ambos números son iguales:", primer_numero, "y", segundo_numero
//Fin Si
//Fin

// LENGUAJE JAVASCRIPT //
let numero1 = prompt("Por favor, ingresa el primer número:");
let numero2 = prompt("Por favor, ingresa el segundo número:");
let mayor = Math.max(numero1, numero2);
console.log("El número mayor es: " + mayor);