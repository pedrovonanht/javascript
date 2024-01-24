function clicar() {
  var inicio = Number(document.getElementById("inicio").value);
  var fim = Number(document.getElementById("fim").value);
  var passo = Number(document.getElementById("passo").value);
  
  if (passo == 0){
    alert('Passo inválido, assumiremos 1 como o padrão')
    passo = 1
  }
  
  texto = "";
  if (inicio < fim) { //contagem normal
  for (c = inicio; c <= fim; c += passo) {
    if (c + passo <= fim) {
      texto += c + " 👉 ";
    } else {
      texto += c + " 🏳️";
    }
  }} else { // contagem reversa
    for (c = inicio; c >= fim; c -= passo) {
      if (c - passo >= fim) {
        texto += c + " 👉 "
      } else {
        texto += c + " 🏳️"
      }
    }
  }
  
  const resposta = document.getElementById("resposta")
  setTimeout(() => {resposta.innerHTML = `<p style="word-spacing:5px;">${texto}</p>`}, "3000")
  resposta.innerText = "Contando..."
}
