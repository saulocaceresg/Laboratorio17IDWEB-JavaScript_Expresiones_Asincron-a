// 3.	Provocar un error de cualquier tipo e imprimir su mensaje

console.log("Ejercicio 1 (3.)");

try {
    console.log(x) // x no está definida
} catch (e) {
    console.error(e.message)
}

// 4.	Generar un SyntaxError usando JSON.parse con texto inválido. En el catch mostrar e.name y e.message

console.log("+----------------------------+\nEjercicio 2 (4.)\nJSON inválido");

try {
    let textoJSON = "{nombre: 'Pedro'}";
    let objeto = JSON.parse(textoJSON);
    console.log("Objeto: ", objeto);
} catch (e) {
    console.log(e.name);
    console.log(e.message);
}

// 5.	Que console.log genere un error de cualquier tipo, en el catch imprimir “falló” y en finally imprimir “siempre se ejecuta”
console.log("+----------------------------+\nEjercicio 3 (5.)\n\"Finally\"");

try {
    console.log(3/a);
} catch (e) {
    console.log("Falló");
} finally {
    console.log("Siempre se ejecuta");
}

// 6.	Definir una función validarEdad(edad), si edad < 0 o no es número, lanzar un error ("Edad inválida"). Capturar y mostrar el error
console.log("+----------------------------+\nEjercicio 4 (6.)\n\"Excepciones con función\"");

function validarEdad(edad) {
    if (edad < 0 || isNaN(edad)) {
        throw new Error("Edad inválida");
    }
}

try {
    validarEdad(-23);
} catch (e) {
    console.error(e.message);
}

try {
    validarEdad("numero");
} catch (e) {
    console.error(e.message);
}