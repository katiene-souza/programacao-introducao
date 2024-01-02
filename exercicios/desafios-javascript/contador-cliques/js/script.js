let btn = document.getElementById("btn-clique");
let contador = document.getElementById("contador");

btn.addEventListener("click", () => {
  contador.innerHTML = parseInt(contador.innerHTML) + 1;

  if (parseInt(contador.innerHTML) > 100 && parseInt(contador.innerHTML) <= 150) {
    contador.style.color = "yellow";
  } else if (parseInt(contador.innerHTML) > 150) {
    contador.style.color = "red";
  }
});