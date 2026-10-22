
// PASO1: Arreglo del lado izquierdo-derecho.

// Lo inicializamos con 12 y 15, los mismos valores que están en el HTML estático.
let arregloIzquierdo = [12, 15];
// Lo inicializamos con 20 y 25, igual que en el HTML estático.
let arregloDerecho = [20, 25];

// PASO 2: Función agregarEdad
function agregarEdad() {
   
    let input = document.getElementById("edad");
    let edad = parseInt(input.value);
    arregloIzquierdo.push(edad);
   

    // TEMPORAL: solo para comprobar que funciona, mostramos el arreglo en la consola
    //console.log("Arreglo izquierdo:", arregloIzquierdo);
    pintarArregloIzquierda();
}

// PASO 3: Función pintarArregloIzquierda

function pintarArregloIzquierda() {

       let tabla = document.getElementById("tablaIzquierda");

        let filas = "";

    for (let i = 0; i < arregloIzquierdo.length; i++) {
        // CAMBIO: ahora se une el texto con comillas normales y el operador +
        // Lo único que cambia en cada vuelta es el valor: arregloIzquierdo[i]
        filas += "<tr>";
        filas += "<td>" + arregloIzquierdo[i] + "</td>";

        filas += "<td><button class='btn-eliminar' onclick='eliminarIzquierdo(" + i + ")'>Eliminar</button></td>";

        filas += "<td><button class='btn-mover' onclick='moverHaciaDerecha(" + i + ")'>➜</button></td>";
        filas += "</tr>";
    }

    tabla.innerHTML = filas;
}

// PASO 4: Función eliminarIzquierdo

function eliminarIzquierdo(indice) {
    arregloIzquierdo.splice(indice, 1);
    pintarArregloIzquierda();
}


// PASO 5: Función pintarArregloDerecha
function pintarArregloDerecha() {
    let tabla = document.getElementById("tablaDerecha");
    let filas = "";

    for (let i = 0; i < arregloDerecho.length; i++) {
        filas += "<tr>";
        filas += "<td><button class='btn-mover' onclick='moverHaciaIzquierda(" + i + ")'    >⬅</button></td>";

        filas += "<td>" + arregloDerecho[i] + "</td>";

        filas += "<td><button class='btn-eliminar' onclick='eliminarDerecho(" + i + ")'>Eliminar</button></td>";
        filas += "</tr>";
    }

    tabla.innerHTML = filas;
}


// PASO 6: Función eliminarDerecho

function eliminarDerecho(indice) {
    arregloDerecho.splice(indice, 1);
    pintarArregloDerecha();
}



// PASO 7: Función moverHaciaDerecha

function moverHaciaDerecha(indice) {
    let valor = arregloIzquierdo[indice];

    arregloDerecho.push(valor);
    arregloIzquierdo.splice(indice, 1);

    pintarArregloIzquierda();
    pintarArregloDerecha();
}


// PASO 8: Función moverHaciaIzquierda
function moverHaciaIzquierda(indice) {
    let valor = arregloDerecho[indice];

    arregloIzquierdo.push(valor);
    arregloDerecho.splice(indice, 1);

    pintarArregloIzquierda();
    pintarArregloDerecha();
}