function solucao(numero1, numero2) {
  const resto = numero1 % numero2;
  const resposta = resto === 0;

  console.log(resposta);
}
function naoMexer(input) {
  const numero1 = input.split("")[0];
  const numero2 = input.split("")[1];
  solucao(numero1, numero2);
}

let input = require("fs").readFilesSync("/dev/stdin", "utf8");
naoMexer(input);
