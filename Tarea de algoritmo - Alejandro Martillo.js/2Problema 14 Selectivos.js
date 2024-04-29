//14.	Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, considerando que la nota mínima de aprobación es 60 puntos.

// ANALISIS DE REQUERIMIENTOS: //
// ENTRADA: Ingresar su nota en el examen.
// PROCESO: La nota ingresada se convierte a un número entero para asegurar que se realicen cálculos matemáticos correctamente.
//          Verificar si la nota es mayor o igual a 60 puntos, que es la nota mínima de aprobación.        
// SALIDA:  Mostrar un mensaje indicando si el usuario ha aprobado o reprobado el examen.

// SEUDOCODIGO //
//Inicio
//Escribir "Ingrese su nota en el examen:"
//Leer notaExamen
//Si notaExamen es mayor o igual a 60 Entonces
//Escribir "¡Felicidades! Ha aprobado el examen."
//Sino
//Escribir "Lo siento, ha reprobado el examen."
//Fin Si
//Fin

// LENGUAJE JAVASCRIPT //
let notaExamen = prompt("Ingrese su nota en el examen:");
notaExamen = parseInt(notaExamen);
if (notaExamen >= 60) {
    console.log("¡Felicidades! Ha aprobado el examen.");
} else {
    console.log("Lo siento, ha reprobado el examen.");
}