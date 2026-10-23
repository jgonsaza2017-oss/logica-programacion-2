// Captura, validación de datos y renderizado

function solicitarTemperaturaValida() {
  let entrada;
  let numero;

  while (true) {
    entrada = prompt("Ingresa la temperatura en grados Celsius:");

    if (entrada === null || entrada.trim() === "") {
      alert("Error: El campo no puede estar vacío. Debes ingresar un número.");
      continue;
    }

    numero = Number(entrada);

    if (isNaN(numero)) {
      alert("Error: '" + entrada + "' no es un número válido. Intenta nuevamente.");
    } else {
      break;
    }
  }

  return numero;
}

function iniciarConversor() {
  const celsius = solicitarTemperaturaValida();

  // Llamada a las funciones modulares de conversor.js
  const fahrenheit = convertirAFahrenheit(celsius);
  const kelvin = convertirAKelvin(celsius);

  console.log("=== Resultados de Conversión ===");
  console.log("Temperatura ingresada: " + celsius + " °C");
  console.log("Grados Kelvin: " + kelvin);
  console.log("Grados Fahrenheit: " + fahrenheit);

  const contenedor = document.getElementById("resultado");
  if (contenedor) {
    contenedor.innerHTML = `
      <h2>Resultados:</h2>
      <p><strong>Temperatura ingresada:</strong> ${celsius} °C</p>
      <p><strong>Grados Kelvin:</strong> ${kelvin}</p>
      <p><strong>Grados Fahrenheit:</strong> ${fahrenheit}</p>
    `;
  }
}

iniciarConversor();