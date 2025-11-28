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

// 7.	Dentro de try provocar un TypeError. Ejemplo: let x = null; x.nombre;
// En catch verificar con instanceof si es TypeError. Imprimir un mensaje distinto según el tipo
console.log("+----------------------------+\nEjercicio 5 (7.)\n\"TypeError\"");

try {
    // let x = {nombre: 'Juan'};
    // let xJson = JSON.parse(x);
    let x = null;
    x.nombre;
    console.log(x);
} catch (e) {
    if (e instanceof TypeError) {
        console.error("Se ha detectado un TypeError");
    } else if (e instanceof SyntaxError) {
        console.error("Se ha detectado un SyntaxError");
    } else {
        console.log("Error general");
        console.error("Mensaje: ", e.message);
    }
}

// 8.	En un catch dentro de una función imprimir un mensaje de error y luego volver a lanzar el mismo error con throw hacia otra función que la invocó. El error también será capturado en esa otra función y finalmente será capturado en un catch externo a cualquier de las funciones, el cual lo recibe e imprime. Comprueba que el error sigue propagándose
// Salida: 
// Nivel 2 atrapó el error: x is not defined 
// Nivel 1 recibió el error: x is not defined 
// ERROR FINAL capturado en el nivel superior: x is not defined
console.log("+----------------------------+\nEjercicio 6 (8.)\n\"Captura sucesiva de error\"");

function nivel1() {
    try {
        console.log(x);
    } catch (e) {
        console.error("Nivel 1 atrapó el error: ", e.message);
        throw e;
    }
}

function nivel2() {
    try {
        nivel1();
    } catch (e) {
        console.error("Nivel 2 atrapó el error: ", e.message);
        throw e;
    }
}

try {
    nivel2();
} catch (e) {
    console.error("ERROR FINAL. Capturado en el nivel superior: ", e.message);
}

// 9.	Crear una función llamada cargarMensaje que reciba un callback, espere 1 segundo utilizando setTimeout y llame al callback con el mensaje: "Mensaje cargado" que deberá ser impreso en pantalla
console.log("+----------------------------+\nEjercicio 7 (9.)\n\"Callback\"");

function cargarMensaje(callback) {
    setTimeout(() => {
        callback("Mensaje cargado");
    }, 1000);
}

cargarMensaje(resultado => {
    console.log("Callback recibido:", resultado);
});