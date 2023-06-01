// const idade =  75;
// const temCarteirinha = true ;

// if (idade < 18){
//   console.log("MEIA");
// } else if (idade <= 60){

//   if (temCarteirinha === true){
//     console.log("MEIA");
//   }else{
//     console.log("INTEIRA");
//   }
// }else{
//   console.log("MEIA")
// }

const idade = 75;
const temCarteirinha = true;

const ehAdulta = idade >= 18 && idade <= 60;

if (ehAdulta && temCarteirinha === false) {
  console.log("INTEIRA");
} else {
  console.log("MEIA!");
}
