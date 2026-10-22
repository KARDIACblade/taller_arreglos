
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

        filas += "<td><button class='btn-mover'>➜</button></td>";
        filas += "</tr>";
    }

    tabla.innerHTML = filas;
}

// PASO 4: Función eliminarIzquierdo

function eliminarIzquierdo(indice) {
    arregloIzquierdo.splice(indice, 1);
    pintarArregloIzquierda();
}