//7.	Solicitar al usuario una temperatura en grados Celsius y mostrarla en grados Fahrenheit.

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: Temperatura en grados Celsius.
// PROCESO: Multiplicar temperaturaCelsius por nueve quinto(o uno coma ocho) y sumar a treinta dos
// SALIDA:  Temperatura en grados Fahrenheit.

// SEUDOCODIGO //
//Inicio
//Escribir "Por favor ingresa la temperatura en grados Celsius:"
//Leer temperaturaCelsius
//temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32
//Escribir "La temperatura en grados Fahrenheit es:", temperaturaFahrenheit
//Fin 

// LENGUAJE JAVASCRIPT //
let temperaturaCelsius = prompt("Por favor ingresa la temperatura en grados Celsius:");
let temperaturaFahrenheit = (parseFloat(temperaturaCelsius) * 9/5) + 32;
console.log("La temperatura en grados Fahrenheit es: " + temperaturaFahrenheit);