function Estudiante(nombre, puntaje) {
  return {
    nombre: nombre,
    puntaje: puntaje,
  };
}

const estudiantes = [];

// funcion que captura el nombre y el puntaje de la prueba del estudiante

function capturarPuntajes() {
  while (true) {
    const nombreEstudiante = prompt(
      "Ingrese el nombre del Estudiante (o clickee en Cancelar para salir):"
    );

    if (nombreEstudiante === null) {
      break;
    } else if (nombreEstudiante === "") {
      alert("Ingrese un nombre valido");
      break;
    }

    const testPuntaje = prompt(`Ingresa la nota de ${nombreEstudiante}:`);
    const puntaje = parseFloat(testPuntaje);

    if (!isNaN(puntaje) && puntaje >= 0 && puntaje <= 100) {
      const estudiante = Estudiante(nombreEstudiante, puntaje);
      estudiantes.push(estudiante);
    } else {
      alert("Por favor, ingrese un puntaje válido entre 0 y 100.");
    }
  }
}

capturarPuntajes();

console.log(estudiantes);

// calcula el puntaje total de los estudiantes
const puntajeTotal = estudiantes.reduce(function (acumulado, estudiante) {
  return acumulado + estudiante.puntaje;
}, 0);

// calcula el puntaje promedio
const puntajePromedio = puntajeTotal / estudiantes.length;
console.log(`El puntaje promedio fué: ${puntajePromedio}`);
