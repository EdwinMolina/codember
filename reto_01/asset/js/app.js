const btn = document.querySelector('#btnCalculo');
btn.addEventListener('click', contarPalabras);

function contarPalabras() {

    var mensaje = document.getElementById("mensaje").value;

    //Si el campo se ejecuta vacio
    if(mensaje.trim() === ""){
        document.getElementById("resultado").innerHTML = 'El campo de texto esta vacío';
        return;
    }

    // Dividir el mensaje en palabras
    var palabras = mensaje.split(/\s+/); 

    var contador = {}; // Objeto para contar las palabras

    for (var i = 0; i < palabras.length; i++) {
        var palabra = palabras[i].toLowerCase(); // Convertir la palabra a minúsculas
        if (contador[palabra]) {
            contador[palabra]++;
        } else {
            contador[palabra] = 1;
        }
    }

    var resultado = "";
    for (var palabra in contador) {
        resultado += palabra + contador[palabra];
    }

    document.getElementById("resultado").innerHTML = resultado;
}