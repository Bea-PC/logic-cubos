// if (condicao) {
// }
// while (condicao) {}

// for (const elemento of colecao) {
// }

const palavra = "Beatriz";

let numeroDeVogais = 0;

for (const letra of palavra) {
  if (letra === "a") {
    numeroDeVogais += 1;
  }
  if (letra === "e") {
    numeroDeVogais += 1;
  }
  if (letra === "i") {
    numeroDeVogais += 1;
  }
  if (letra === "o") {
    numeroDeVogais += 1;
  }
  if (letra === "u") {
    numeroDeVogais += 1;
  }
}

console.log(numeroDeVogais);
