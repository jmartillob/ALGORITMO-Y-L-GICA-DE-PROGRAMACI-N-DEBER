//12.	Pedir 5 números y asignarlos en un arreglo

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: Pedir cinco números al usuario.
// PROCESO: Almacenar los números en un arreglo, convertir el arreglo en una cadena y mostrarla en la consola.
// SALIDA:  Mostrar los números ingresados en un solo arreglo.

// SEUDOCODIGO //
//Inicio
//arreglo_numeros[5]
//mostrar "Ingrese el primer número:"
//leer primer_numero
//arreglo_numeros[0] = primer_numero
//mostrar "Ingrese el segundo número:"
//leer segundo_numero
//arreglo_numeros[1] = segundo_numero
//mostrar "Ingrese el tercer número:"
//leer tercer_numero
//arreglo_numeros[2] = tercer_numero
//mostrar "Ingrese el cuarto número:"
//leer cuarto_numero
//arreglo_numeros[3] = cuarto_numero
//mostrar "Ingrese el quinto número:"
//leer quinto_numero
//arreglo_numeros[4] = quinto_numero
//mostrar "Los números ingresados son:"
//mostrar arreglo_numeros
//Fin

// LENGUAJE JAVASCRIPT //
let arreglo_numeros = [];
let primer_numero = prompt("Ingrese el primer número:");
arreglo_numeros.push(parseFloat(primer_numero));
let segundo_numero = prompt("Ingrese el segundo número:");
arreglo_numeros.push(parseFloat(segundo_numero));
let tercer_numero = prompt("Ingrese el tercer número:");
arreglo_numeros.push(parseFloat(tercer_numero));
let cuarto_numero = prompt("Ingrese el cuarto número:");
arreglo_numeros.push(parseFloat(cuarto_numero));
let quinto_numero = prompt("Ingrese el quinto número:");
arreglo_numeros.push(parseFloat(quinto_numero));
console.log("Los números ingresados son: " + arreglo_numeros );
