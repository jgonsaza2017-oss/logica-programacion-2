// Función para solicitar y validar la temperatura
function solicitarTemperatura() {
  let entrada;
  let celsius;

  while (true) {
    entrada = prompt("Ingresa la temperatura en grados Celsius:");

    // Valida si canceló o dejó el texto vacío
    if (entrada === null || entrada.trim() === "") {
      alert("Error: No ingresaste ningún valor. Por favor ingresa un número.");
      continue;
    }

    celsius = Number(entrada);

    // Valida que sea realmente un número
    if (isNaN(celsius)) {
      alert("Error: '" + entrada + "' no es un número válido. Intenta nuevamente.");
    } else {
      break;
    }
  }

  return celsius;
}

// Función principal
function convertirTemperatura() {
  const celsius = solicitarTemperatura();

  // Fórmulas
  const fahrenheit = (celsius * 1.8) + 32;
  const kelvin = celsius + 273.15;

  // 1. Mostrar por consola
  console.log("=== Resultados de Conversión ===");
  console.log("Temperatura ingresada (Celsius): " + celsius);
  console.log("Grados Kelvin: " + kelvin);
  console.log("Grados Fahrenheit: " + fahrenheit);

  // 2. Mostrar en el DOM
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

// Ejecutar
convertirTemperatura();