let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");
let btn_limpar = document.getElementById("btn-limpar");

celsius.addEventListener("input", updateTemperatures);
fahrenheit.addEventListener("input", updateTemperatures);
kelvin.addEventListener("input", updateTemperatures);

function updateTemperatures(event) {
  let sourceInput = event.target;

  if (sourceInput === celsius && celsius.value !== "") {
    fahrenheit.value = (celsius.value * 1.8) + 32;
    kelvin.value = parseFloat(celsius.value) + 273.15;
  } else if (sourceInput === fahrenheit && fahrenheit.value !== "") {
    celsius.value = (fahrenheit.value - 32) / 1.8;
    kelvin.value = (fahrenheit.value - 32) * (5 / 9) + 273.15;
  } else if (sourceInput === kelvin && kelvin.value !== "") {
    celsius.value = kelvin.value - 273.15;
    fahrenheit.value = (kelvin.value - 273.15) * (9 / 5) + 32;
  }
}

btn_limpar.addEventListener("click", () => {
  
  celsius.value = "";
  fahrenheit.value = "";
  kelvin.value = "";
});

updateTemperatures();
