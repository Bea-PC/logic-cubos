// contar a quatidade de promotores
// -> pegar item por item
// -> ver se esse item deu nota 9 ou 10
// -> se sim, somar na quantidade de promotores

// contar a quantidade detratadores
// -> pegar item por item
// -> ver se esse item deu nota 0 ou 6
// -> se sim, somar na quantidade de promotores

// contar a quantidade de pessoas que foram entrevistadas
// por fim, fazer o calculo

let respostas = [5, 10, 0, 6, 10, 10, 9, 8, 10];

let quantidadePromotores = 0;
let quantidadeDetratadores = 0;

for (let item of respostas) {
  if (item === 9 || item === 10) {
    quantidadePromotores = quantidadePromotores + 1;
  } else if (
    item === 0 ||
    item === 1 ||
    item === 2 ||
    item === 3 ||
    item === 4 ||
    item === 5 ||
    item === 6
  ) {
    quantidadeDetratadores = quantidadeDetratadores + 1;
  }
}

let quantidadeTotal = respostas.length;

let nps =
  ((quantidadePromotores - quantidadeDetratadores) / quantidadeTotal) * 100;

// Uma oura maneira de faser o else if para a quantidade de detratores é

// let respostas = [5,10,0,6,10,10,9,8,10]

// let quantidadePromotores = 0
// let quantidadeDetratadores = 0

// for (let item of respostas ){
//   if (item === 9 || item === 10){
//     quantidadePromotores = quantidadePromotores + 1
//   } else if (item >= 0 && item <= 6 ){
//     quantidadeDetratadores = quantidadeDetratadores + 1
//   }
// }

// let quantidadeTotal = respostas.length

// let nps = (quantidadePromotores - quantidadeDetratadores)/ quantidadeTotal *100
