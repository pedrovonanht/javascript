var valores = [];
function adicionar() {
  let numero = document.querySelector("#num").value;
  let caixa_resposta = document.querySelector("#resposta");
  if (
    numero &&
    numero > 0 &&
    numero <= 100 &&
    valores.includes(numero) === false
  ) {
    valores.push(numero);
    caixa_resposta.innerHTML += `<option id="butao"> valor ${numero} adicionado</option>`;
  } else {
    alert("Valor inválido ou já encontrado na lista!");
  }
}

function finalizar() {
  let caixa_resultado = document.getElementById("resultado");
  caixa_resultado.innerHTML = `
  <p> - Ao todo temos ${valores.length} números cadastrados </p>
  <p> - Maior número informado é ${maior(valores)}</p>
  <p> - Menor número informado é ${menor(valores)}</p>
  <p> - Somando todos os números temos ${soma(valores)}</p>
  <p> - A média dos números é ${media(valores)}
  `;
}

function menor(valores) {
  let menor;
  for (let valor in valores) {
    valor = Number(valor);
    switch (valor === 0) {
      case true:
        menor = valores[valor];
      case false:
        if (valores[valor < menor]) {
          menor = valores[valor];
        }
    }
  }
  return menor;
}

function maior(valores) {
  let maior;
  for (let valor in valores) {
    valor = Number(valor);
    switch (valor === 0) {
      case true:
        maior = valores[valor];
      case false:
        if (valores[valor] > maior) {
          maior = valores[valor];
        }
    }
  }
  return maior;
}

function soma(valores) {
  let soma = 0;
  for (let valor in valores) {
    soma += Number(valores[valor]);
  }
  return soma;
}

function media(valores) {
  return soma(valores) / valores.length;
}
