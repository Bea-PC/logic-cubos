// // quantos numeros entre 1 e 1000 sao multiplos de 17
// // Como saber? Vai pecorrer cada um dos números e checar

// let resposta = 0;

// if( 1 % 17 === 0){
//   resposta += 1;
// }

// if (2 % 17 === 0){
//   resposta += 1;
// }
// if( 3 % 17 === 0){
//   resposta += 1;
// }

// if (4 % 17 === 0){
//   resposta += 1;
// }

// if(1000 % 17 === 0){
//   resposta += 1;
// }

// console.log("Resposta é", resposta);

// // Só que fazer assim não é viavel.
// Então usaremos o while

let resposta = 0;
let numero = 1;

while (numero <= 1000) {
  if (numero % 17 === 0) {
    resposta += 1;
  }
  numero += 1;
}

console.log("Resposta é", resposta);
