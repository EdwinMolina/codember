function validarClaves() {
    const input = document.getElementById("claveInput").value.trim();
    const claves = input.split('\n');
    const cantidadClaves = claves.length;
    let clavesValidas = [];
    let clavesInvalidas = [];
    let claveInvalida42 = '';

    for (let i = 0; i < cantidadClaves; i++) {
      const [politica, clave] = claves[i].split(':');
      const [rango, letra] = politica.split(' ');
      const [min, max] = rango.split('-').map(Number);

      const ocurrencias = (clave.match(new RegExp(letra, 'g')) || []).length;

      if (ocurrencias >= min && ocurrencias <= max) {
        clavesValidas.push(clave.trim());
      } else {
        clavesInvalidas.push(clave.trim());
        if (clavesInvalidas.length === 42) {
          claveInvalida42 = clave.trim();
        }
      }
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p>Claves ingresadas: ${cantidadClaves}</p>`;
    resultado.innerHTML += `<p>Claves válidas (${clavesValidas.length})</p>`;
    resultado.innerHTML += `<p>Claves inválidas (${clavesInvalidas.length})</p>`;
    if (claveInvalida42 !== '') {
      resultado.innerHTML += `<p>Clave inválida número 42: ${claveInvalida42}</p>`;
    }
  }