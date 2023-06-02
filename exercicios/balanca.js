// pesoLadoA1 = 10
// pesoLadoA2 = 5
// pesoLadoB1 = 20
// pesoLadoB2 = 10

// Se a soma do lado A > soma do lado B - inclinado para o lado a
// Se não, soma do lado B > soma do lado A - inclinado para o lado Boolean
// Caso contrario - equilibrio

const pesoLadoA1 = 10;
const pesoLadoA2 = 5;

const pesoLadoB1 = 20;
const pesoLadoB2 = 10;

const somaLadoA = pesoLadoA1 + pesoLadoA2;

const somaLadoB = pesoLadoB1 + pesoLadoB2;

if (somaLadoA > somaLadoB) {
  console.log("LADO A");
} else if (somaLadoB > somaLadoA) {
  console.log("LADO B");
} else if (somaLadoA === somaLadoB) {
  console.log("EQUILIBRIO");
}
