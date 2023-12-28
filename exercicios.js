// Verificação de Números 
let numero = 4;

if (numero > 0 ) {
  console.log(`O número ${numero} é positivo.`);
} else if (numero < 0) {
  console.log(`O número ${numero} é negativo`);
} else if (numero === 0) {
  console.log(`Este número é o zero.`);
} else {
  console.log("Você precisa enviar um número válido!");
};


// Verificação de Par ou Ímpar
if(numero % 2 === 0) {
  console.log(`O número ${numero} é par.`);
} else {
  console.log(`O número ${numero} é ímpar.`);
}


// Calculadora Simples 
let primeiroNumero = 6;
let segundoNumero = 2;
let tipoDeOperacao = "divisão"
let resultado;

switch(tipoDeOperacao) {
  case "soma":
    resultado = primeiroNumero + segundoNumero;
    console.log(`O resultado da soma é ${resultado}`);
    break;
  case "subtração": 
    resultado = primeiroNumero - segundoNumero;
    console.log(`O resultado da subtração é ${resultado}`);
    break;
  case "multiplicação":
    resultado = primeiroNumero * segundoNumero;
    console.log(`O resultado da multiplicação é ${resultado}`);
    break;
  case "divisão":
    resultado = primeiroNumero / segundoNumero;
    console.log(`O resultado da divisão é ${resultado}`);
    break;
}


//Idade e Categoria
let idade = 150; 

if(idade <= 12) {
  console.log(`Baseado na idade ${idade} anos, essa pessoa é uma criança!`);
} else if (idade > 12 && idade < 18) {
  console.log(`Baseado na idade ${idade} anos, essa pessoa é um adolescente!`);
} else if (idade >= 18 && idade < 65) {
  console.log(`Baseado na idade ${idade} anos, essa pessoa é um adulto!`);
} else if (idade >= 65 && idade < 120) {
  console.log(`Baseado na idade ${idade} anos, essa pessoa é um idoso!`);
} else {
  console.log(`Informe uma idade válida!`);
}


//Conversor de Notas
let pontuacao = 85;

if(pontuacao >= 90 && pontuacao < 100) {
  console.log(`Sua nota convertida é: A`);
} else if (pontuacao >= 80 && pontuacao < 86) {
  console.log(`Sua nota convertida é: B`);
} else if (pontuacao >= 70 && pontuacao < 79) {
  console.log(`Sua nota convertida é: C`);
} else if (pontuacao >= 60 && pontuacao < 69) {
  console.log(`Sua nota convertida é: D`);
} else if (pontuacao < 60) {
  console.log(`Sua nota convertida é: F`);
} else {
  console.log(`Informe um número válido!`)
}


//Cálculo de Desconto
let preco = 2300;
let desconto = 0.08;
let descontoAplicado = preco * desconto;
let valorFinal = preco - descontoAplicado;

console.log(`Com o desconto final, o valor é de ${valorFinal}`);


//Validação de Triângulo
let ladoUm = 1;
let ladoDois = 3;
let ladoTres = 2;
let somaLados = ladoUm + ladoDois;

if(somaLados > ladoTres) {
  if(ladoUm === ladoDois && ladoUm === ladoTres) {
    console.log("É um triângulo do tipo Equilátero.");
  } else if(ladoUm === ladoDois || ladoUm === ladoTres || ladoDois === ladoTres) {
    console.log("É um triângulo do tipo Isósceles.");
  } else {
    console.log("É um triângulo do tipo Escaleno.");
  }
} else {
  console.log("Não é um triângilo.");
}


//Verificador de Ano Bissexto
let ano = 1906;

if((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
  console.log(`O ano ${ano} é bissexto.`);
} else {
  console.log(`O ano ${ano} não é bissexto`);
}


// Jogo de Adivinhação
let numeroSecreto;

if (numeroSecreto === undefined) {
  numeroSecreto = Math.floor(Math.random() * 1000 + 1);
}

let chute = 439;

if (chute < numeroSecreto) {
  console.log(`O número é maior que ${chute} ⬆`);
} else if (chute > numeroSecreto) {
  console.log(`O número é menor que ${chute} ⬇`);
} else if (chute === numeroSecreto) {
  console.log(`Parabéns, você acertou, o número correto é ${numeroAleatorio}`);
}


// Simulador de Empréstimo
let rendaMensal = 2000;
let idadeCliente = 24;
let historicoCredito = 600;

if(rendaMensal >= 2000 && idadeCliente >= 21 && historicoCredito >= 700) {
  console.log("Esse cliente é elegível para o empréstimo!");
} else {
  console.log("Esse cliente não é elegível para o empréstimo!");
}
