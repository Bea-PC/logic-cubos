const idade = 15;
const temCarteirinha = true;

const ehAdulta = idade >= 18 && idade <= 60;

if (idade < 18 || idade > 60 || (ehAdulta && temCarteirinha)) {
  console.log("MEIA");
} else {
  console.log("INTEIRA");
}
