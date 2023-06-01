const deposito = 800;
const objetivo = 100000;
const rendimentoAnual = 0.15;

let conta = 0;
let meses = 0;

// todo ano ela rende 10%
// todo mês fazer um depósito
// quantos meses demora chegar em 100.000

while (conta < 100000) {
  conta += deposito;
  conta += (conta * rendimentoAnual) / 12;
  meses += 1;
}

console.log("Demorou", meses, "meses");
console.log("Demorou", meses / 12, "anos");
