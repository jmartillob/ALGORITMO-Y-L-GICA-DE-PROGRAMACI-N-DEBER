//11.	Solicitar al usuario una distancia en metros y mostrarla en centímetros.

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: Pedir al usuario distancia en metros.
// PROCESO: Convertir la distancia de metros a centímetros multiplicándola por 100.
// SALIDA:  Mostrar al usuario la distancia convertida en centímetros.

// SEUDOCODIGO //
//Inicio
//   1. Escribir "Por favor, ingrese una distancia en metros:"
//   2. Leer distancia_metros
//    3. distancia_centimetros = distancia_metros * 100
//    4. Escribir "La distancia en centímetros es:", distancia_centimetros
//Fin

// LENGUAJE JAVASCRIPT //
let distanciaMetros = parseFloat(prompt("Por favor, ingrese una distancia en metros:"));
let distanciaCentimetros = distanciaMetros * 100;
console.log("La distancia en centímetros es: " + distanciaCentimetros);