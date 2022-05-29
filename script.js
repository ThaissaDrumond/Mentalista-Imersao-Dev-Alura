var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;
console.log(numeroSecreto);
function Chutar() {
  var resultado = document.getElementById("Resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    resultado.innerHTML = "Você acertou";
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else if (chute < numeroSecreto) {
    resultado.innerHTML = "o resultao é maior que " + chute;
  } else if (chute > numeroSecreto) {
    resultado.innerHTML = "o resultao é menor que " + chute;
  }
  if (tentativas <= 4) {
    tentativas++;
  } else {
    resultado.innerHTML = "Errou, o número secreto era " + numeroSecreto;
    console.log(numeroSecreto);
  }
}
