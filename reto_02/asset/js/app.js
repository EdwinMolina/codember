function ejecutarCompilador() {
    const programa = document.getElementById("programa").value;
    const resultado = miniCompilador(programa);
    document.getElementById("resultado").textContent = resultado;
}

function miniCompilador(programa) {
    let valorNumerico = 0;
    let resultado = "";

    for (let i = 0; i < programa.length; i++) {
        const simbolo = programa[i];
        if (simbolo === "#") {
            valorNumerico += 1;
        } else if (simbolo === "@") {
            valorNumerico -= 1;
        } else if (simbolo === "*") {
            valorNumerico *= valorNumerico;
        } else if (simbolo === "&") {
            resultado += valorNumerico.toString();
        }
    }

    return resultado;
}