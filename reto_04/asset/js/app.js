function checkFiles() {
  // Obtener la lista de archivos y checksums del usuario
  var fileListInput = document.getElementById('fileList');
  var fileListText = fileListInput.value;

  // Dividir la lista en líneas y procesar cada archivo
  var fileLines = fileListText.split('\n');
  var realFiles = [];
  var fakeFiles = [];

  for (var i = 0; i < fileLines.length; i++) {
      var line = fileLines[i].trim();
      if (line !== "") {
          var parts = line.split('-');
          var filename = parts[0].trim();
          var checksum = parts[1].trim();

          // Verificar si el archivo es real o falso
          if (isValidFile(filename, checksum)) {
              realFiles.push(filename);
          } else {
              fakeFiles.push(filename);
          }
      }
  }

  // Mostrar los resultados
  displayResults(realFiles, fakeFiles);
}

function isValidFile(filename, checksum) {
  // Verificar si el checksum es válido según las reglas
  var uniqueChars = Array.from(new Set(filename)).filter(char => filename.indexOf(char) === filename.lastIndexOf(char));
  var calculatedChecksum = uniqueChars.join('');

  return calculatedChecksum === checksum;
}

function displayResults(realFiles, fakeFiles) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = "";

  // Mostrar archivos reales
  outputDiv.innerHTML += "<h3>Archivos Reales:</h3>";
  for (var i = 0; i < realFiles.length; i++) {
      outputDiv.innerHTML += realFiles[i] + "<br>";
  }

  // Mostrar archivos falsos
  outputDiv.innerHTML += "<h3>Archivos Falsos:</h3>";
  for (var i = 0; i < fakeFiles.length; i++) {
      outputDiv.innerHTML += fakeFiles[i] + "<br>";
  }

  // Encontrar el archivo real número 33 y mostrar su checksum
  var checksumFileNumber33 = findFileNumber33(realFiles);
  outputDiv.innerHTML += "<h3>Checksum del Archivo Real Número 33:</h3>";
  outputDiv.innerHTML += checksumFileNumber33;
}

function findFileNumber33(realFiles) {
  var fileNumber33 = realFiles[32]; // El índice es 32 porque los índices comienzan en 0
  var uniqueChars = Array.from(new Set(fileNumber33)).filter(char => fileNumber33.indexOf(char) === fileNumber33.lastIndexOf(char));
  var checksum = uniqueChars.join('');
  return checksum;
}