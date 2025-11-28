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
    // console.log("Callback recibido:", resultado);
});

// 10.	Crea una función llamada cargarUsuario que reciba un callback. La función debe esperar entre 800 ms y 1500 ms (tiempo aleatorio usando setTimeout). Luego debe llamar al callback con un objeto que represente un usuario (id y nombre). El callback debe imprimir el usuario formateado, por ejemplo: Usuario cargado: Juancito (ID: 1)
console.log("+----------------------------+\nEjercicio 8 (10.)\n\"Callback y objeto\"");

function cargarUsuario(callback) {
    let tiempo = Math.floor(Math.random() * (1500 - 800 + 1) + 800); // Se establece el tiempo
    setTimeout(() => {
        const objeto = {nombre: "Juan", id: 1}; // Se crea el objeto
        callback(objeto);
    }, tiempo);
}

cargarUsuario(usuario => {
    // console.log("Usuario cargado: " + usuario.nombre + " (ID: " + usuario.id + ")"); // Se formatea el objeto
});

// 11.	Crea una función dividirAsync que reciba a, b y un callback. Espere 1.5 segundos. Si b === 0, llame a callback(new Error("No se puede dividir entre cero"), null); Si no, llame a: callback(null, a / b);
console.log("+----------------------------+\nEjercicio 9 (11.)\n\"Callback: división entre cero\"");

function dividirAsync(a, b, callback) {
    setTimeout(() => {
        if (b === 0) {
            callback(new Error("No se puede dividir entre cero"), null);
        } else {
            callback(null, a / b);
        }
    }, 1500);
}

dividirAsync(27, 0, (mensaje, resultado) => {
    if (mensaje === null) {
        mensaje = "Sin problemas." // Reemplaza el mensaje para que no escriba null
    }
    // console.log(mensaje + "\nResultado: " +  resultado); // Imprime el resultado
});

// 12.	Crea una función llamada procesarLista. Debe recibir un arreglo de números, un callback, por cada número del arreglo esperar entre 500 y 1500 ms usando setTimeout. Imprimir "Procesando <numero>..." y cuando todos los números estén procesados llamar al callback final con el mensaje "Proceso completado"
console.log("+----------------------------+\nEjercicio 10 (12.)\n\"Callback y tiempo\"");

function procesarLista(numeros, callback) {

    let tiempoTotal = 0;
    for (let i = 0; i < numeros.length; i++) {

        let tiempo = Math.floor(Math.random () * (1500 - 500 + 1) + 500);
        tiempoTotal += tiempo;  // Se establece el tiempo entre números. (Se multiplica por el iterador para que no se impriman todos a la vez.)
        
        setTimeout(() => {
            console.log("Procesando número...");
        }, tiempoTotal - 500);
        
        setTimeout(() => {
            console.log(numeros[i]);
            if (i === numeros.length - 1) {
                callback("Proceso Completado"); // Se imprime si ya llegó al último número
            }
        }, tiempoTotal);
        
    }
    
}

let arrayNumeros = [2, 43, -2, 1, 0, 12, 6, -7, -1, 43];

// procesarLista(arrayNumeros, procesado => {
//     console.log("Estado del proceso:", procesado);
// });

// 13.	Ejercicio 9 con promesas
// (9.	Crear una función llamada cargarMensaje que reciba un callback, espere 1 segundo utilizando setTimeout y llame al callback con el mensaje: "Mensaje cargado" que deberá ser impreso en pantalla)
console.log("+----------------------------+\nEjercicio 11 (13.)\n\"Callback y tiempo (Promesas)\"");

function cargarMensajePromesa() {
    console.log("Iniciando tarea...");

    // Promesa
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Mensaje cargado");
        }, 1000);    
    });
}

// Se ejecuta el método
cargarMensajePromesa ()
    .then(reponse => console.log(reponse))
    .catch(error => console.error(error));
