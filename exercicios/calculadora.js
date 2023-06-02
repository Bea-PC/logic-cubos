// numero1 = 10
// numero2 = 5
// operacao = "soma"

// verificar se a operacao é uma soma -> numero1 + numero2
// se não, verificar se é uma subtracao -> numero1 - numero2
// se não, verificar se é uma multiplicacao -> numero1 * numero2
// se não, verificar se é uma divisão -> numero1 / numero2

let operacao = "multiplicao";
let numero1 = 10;
let numero2 = 5;

if (operacao === "soma") {
  consolo.log(numero1 + numero2);
} else if (operacao === "subtracao") {
  console.log(numero1 - numero2);
} else if (operacao === "multiplicao") {
  console.log(numero1 * numero2);
} else if (operacao === "divisao") {
  console.log(numero1 / numero2);
}
