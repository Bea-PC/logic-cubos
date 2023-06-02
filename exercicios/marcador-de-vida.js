// classe1 : inimigos que tiram 20 pontos de vida;
// classe2 : inimigos que tiram 30 pontos de vida;
// classe3 : inimigos que tiram 40 pontos de vida;
// classe4 : inimigos que tiram 50 pontos de vida;

// vida = 40
// classe = 20

// se a classe for 1 -> subtrair 20 da vida -> verificar se é menor ou igual a zero
// se não, se a classe for 2 -> subtrair 30 da vida -> verificar se é menor ou igual a zero
// se nao, se a classe for 3 -> subtrair 40 da vida -> verificar se é menor ou igual a zero
// caso contrario  -> subtrair 50 da vida -> verificar se é menor ou igual a zero

let classe = 4;
let vida = 80;

let novaVida = 0;

if (classe === 1) {
  let novaVida = vida - 20;
  if (novaVida <= 0) {
    console.log("PERDEU");
  } else {
    console.log(novaVida);
  }
} else if (classe === 2) {
  novaVida = vida - 30;
  if (novaVida <= 0) {
    console.log("PERDEU");
  } else {
    console.log(novaVida);
  }
} else if (classe === 3) {
  novaVida = vida - 40;
  if (novaVida <= 0) {
    console.log("PERDEU");
  } else {
    console.log(novaVida);
  }
} else {
  novaVida = vida - 50;
  if (novaVida <= 0) {
    console.log("PERDEU");
  } else {
    console.log(novaVida);
  }
}

// ------------------------------
// Organizando a resposta

// let classe = 1;
// let vida = 50;

// let novaVida = 0;

// if (classe === 1) {
//   novaVida = vida - 20;
// } else if (classe === 2) {
//   novaVida = vida - 30;
// } else if (classe === 3) {
//   novaVida = vida - 40;
// } else {
//   novaVida = vida - 50;
// }

// if (novaVida <= 0) {
//   console.log("PERDEU");
// } else {
//   console.log(novaVida);
// }
