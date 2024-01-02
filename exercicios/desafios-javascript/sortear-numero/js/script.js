let numero_minimo = document.getElementById("numero-minimo");
let numero_maximo = document.getElementById("numero-maximo");
let btn_sorteio = document.getElementById("btn-sorteio");
let mostrar_numero_sorteado = document.getElementById("numero-sorteado");

btn_sorteio.addEventListener("click", () => {
  let numero_minimo_sorteado = parseInt(numero_minimo.value);
  let numero_maximo_sorteado = parseInt(numero_maximo.value);
  
  let numero_sorteado = Math.floor(Math.random() * (numero_maximo_sorteado - numero_minimo_sorteado + 1) + numero_minimo_sorteado);
  
  mostrar_numero_sorteado.innerHTML = parseInt(numero_sorteado);
})