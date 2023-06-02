// placar = [3,2]
// se a quantidade de goals do time A for maior que a do time Boolean
// -> Time A

// se nao , se a quantidade de goals do time B é maior que a do time A
// -> Time B

// caso contrario -> EMPATE

let placar = [3, 2];

let quantidadeGoalsTimeA = placar[0];

let quantidadeGoalsTimeB = placar[1];

if (quantidadeGoalsTimeA > quantidadeGoalsTimeB) {
  console.log("TIME A ");
} else if (quantidadeGoalsTimeB > quantidadeGoalsTimeA) {
  console.log("TIME B");
} else {
  console.log("EMPATE");
}
