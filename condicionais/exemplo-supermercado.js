let precoDoProduto1 = 19.29;
let precoDoProduto2 = 0.8;
let precoDoProduto3 = 4.85;

let custo = 0;

if (precoDoProduto1 <= 18) {
  console.log("Comprei o produto 1");
  custo = custo + precoDoProduto1;
}

if (precoDoProduto2 < 3) {
  if (precoDoProduto2 >= 1.5) {
    console.log("Comprei o produto 2");
    custo += precoDoProduto2;
  } else {
    console.log("Tem algo errado com o produto2");
  }
}

console.log("comprei o produto 3");
custo += precoDoProduto3;

console.log("Eu paguei", custo, "reais!");
