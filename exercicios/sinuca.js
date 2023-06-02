// jogadorA = [4,7,1,10,15]
// somar as bolinhas do jogadorA
// achar a soma do B -> 120 - soma do jogadorA
// comparar:
// se a soma do A for maior -> JogadorA ganhou
// se não, verifico se a soma do B é maior -> JogadorB ganhou
// caso contrario -> Empate

let jogadorA = [4, 7, 1, 10, 15];

let somaJogadorA = 0;

for (let item of jogadorA) {
  somaJogadorA = somaJogadorA + item;
}

let somaJogadorB = 120 - somaJogadorA;

if (somaJogadorA > somaJogadorB) {
  console.log("Jogador A ganhou");
} else if (somaJogadorB > somaJogadorA) {
  console.log("Jogador B ganhou");
} else {
  console.log("EMPATE");
}
