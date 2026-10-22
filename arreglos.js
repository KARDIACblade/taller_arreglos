
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
    console.log("Arreglo izquierdo:", arregloIzquierdo);
}