function tabuada() {
  numero = document.getElementById("num");
  caixa_resposta = document.getElementById("resposta");
  if (numero.value) {
    caixa_resposta.innerHTML = "";
    for (var c = 1; c <= 10; c++) {
      numero_tabuada = numero.value * c;
      caixa_resposta.innerHTML += `<option value="${numero_tabuada}">${numero.value} x ${c} =${numero_tabuada}</option>`;
    }
  } else {
    alert("Digite um número para ver a sua tabuada");
  }
}
