const listaDeNumeros = [34, 56, 768, 8, 81, 3, 6];

// Qual a soma deles?

let acumulador = 0;

for (const numero of listaDeNumeros) {
  acumulador += numero;
}

console.log("A soma é ", acumulador);

// Qual o menor deles?

let oMenorNumeroAteAgora;

for (const numero of listaDeNumeros) {
  if (oMenorNumeroAteAgora === undefined) {
    oMenorNumeroAteAgora = numero;
  } else {
    if (numero < oMenorNumeroAteAgora) {
      oMenorNumeroAteAgora = numero;
    }
  }
}

console.log("O menor numero é", oMenorNumeroAteAgora);
