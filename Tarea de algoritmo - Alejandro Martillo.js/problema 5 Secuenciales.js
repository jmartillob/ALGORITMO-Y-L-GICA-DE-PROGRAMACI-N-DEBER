//5.	Solicitar al usuario su edad y mostrar un mensaje indicando cuántos años tendrá en el próximo año.

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: Edad del usuario
// PROCESO: Leer la edad ingresada por el usuario.
//          Calcular la edad del usuario en el próximo año sumando 1 a la edad ingresada. 
// SALIDA:  Mensaje indicando cuántos años tendrá el usuario en el próximo año.

// SEUDOCODIGO //
//Inicio
//Solicitar al usuario que ingrese su edad
//Leer la edad ingresada por el usuario
//Calcular la edad del usuario en el próximo año
//edad_proximo_ano = edad + 1
//Mostrar un mensaje indicando la edad del usuario en el próximo año
//Mostrar "El próximo año tendrás ", edad_proximo_ano, " años."
//Fin

// LENGUAJE JAVASCRIPT //
let edad = prompt("Ingrese su edad:");
edad = parseInt(edad);
let edadProximoAno = edad + 1;
console.log("El próximo año tendrás " + edadProximoAno + " años.");