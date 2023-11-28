var agora = new Date();
var diaSem = agora.getDay();
console.log(diaSem);

switch (diaSem) {
  case 0:
    diaSem = "Domingo";
    break;
  case 1:
    diaSem = "Segunda-feira";
    break;
  case 2:
    diaSem = "Terça-feira";
    break;
  case 3:
    diaSem = "Quarta-feira";
    break;
  case 4:
    diaSem = "Quinta-feira";
    break;
  case 5:
    diaSem = "Sexta-feira";
    break;
  case 6:
    diaSem = "Sábado";
    break;
  default:
    console.log('[ERRO] dia inválido!')
    break
}
console.log(`Hoje é ${diaSem}`)