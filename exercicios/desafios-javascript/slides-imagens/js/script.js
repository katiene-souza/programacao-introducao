const imagem = document.getElementById("imagem");
const btnVoltar = document.getElementById("btn-voltar");
const btnAvancar = document.getElementById("btn-avancar");

const imagens = [
    "https://www.usatoday.com/gcdn/presto/2022/09/22/USAT/6e2db461-d870-4141-a3e7-37300e52a876-STScI-01GCCVK522S3SWM0TJN2ZA02ZZ.jpg?width=495&height=495&format=pjpg&auto=webp", 
    "https://www.usatoday.com/gcdn/presto/2022/07/12/USAT/ff43beed-bb73-4750-811e-99a3a69f6989-AP_NASA_Space_Telescope.jpg?width=517&height=495&format=pjpg&auto=webp", 
    "https://www.usatoday.com/gcdn/presto/2022/08/03/USAT/49e3c784-737f-454f-b010-254a0ccfc00f-STScI-01G9DMQPBS1X2NHTP184D4NDVY.jpg?width=469&height=495&format=pjpg&auto=webp",
    "https://www.usatoday.com/gcdn/presto/2022/07/12/USAT/bfd96168-1dbc-46a2-a60d-f84297f543dd-STScI-01G786DQSAZJ4FAN8X9BY6TG7A.jpg?width=571&height=495&format=pjpg&auto=webp",
    "https://www.usatoday.com/gcdn/presto/2022/07/12/USAT/7622c845-d842-4c3e-b640-9473cc152842-AP_NASA_Space_Telescope.jpg?width=486&height=495&format=pjpg&auto=webp",
    "https://www.usatoday.com/gcdn/presto/2023/03/15/USAT/454597e6-4f08-45c9-b536-0f61fec87071-AFP_33BC96C.jpg?width=503&height=495&format=pjpg&auto=webp"
];

let currentIndex = 0;

function mostrarImagem(index) {
  imagem.src = imagens[index];
}

btnAvancar.addEventListener("click", function() {
  currentIndex = (currentIndex + 1) % imagens.length;
  mostrarImagem(currentIndex);
});

btnVoltar.addEventListener("click", function() {
  currentIndex = (currentIndex - 1 + imagens.length) % imagens.length;
  mostrarImagem(currentIndex);
});

mostrarImagem(currentIndex);