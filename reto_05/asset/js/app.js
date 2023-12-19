function validarUsuarios() {
  var inputText = document.getElementById('csvInput').value;
  var lineas = inputText.split('\n');
  var resultado = document.getElementById('resultado');
  var usuariosInvalidos = [];
  var mensajeOculto = '';

  for (var i = 0; i < lineas.length; i++) {
    var usuario = lineas[i].split(',');

    if (
      !usuario[0].match(/^[a-zA-Z0-9]+$/) ||
      !usuario[1].match(/^[a-zA-Z0-9]+$/) ||
      !usuario[2].match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ||
      (usuario[3] && isNaN(usuario[3])) ||
      (usuario[4] && typeof usuario[4] !== 'string')
    ) {
      usuariosInvalidos.push(usuario);
      mensajeOculto += usuario[1][0];
    }
  }

  if (usuariosInvalidos.length > 0) {
    resultado.innerHTML = '<strong>Usuarios Inválidos:</strong><br>';
    for (var j = 0; j < usuariosInvalidos.length; j++) {
      resultado.innerHTML += usuariosInvalidos[j].join(',') + '<br>';
    }
    resultado.innerHTML += '<br><strong>Mensaje Oculto:</strong> ' + mensajeOculto;
  } else {
    resultado.innerHTML = 'Todos los usuarios son válidos.';
  }
}