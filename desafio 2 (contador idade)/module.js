function verificar() {
  //capturar os dias
  var data = new Date();
  var hoje = data.getFullYear();

  //DOM captura os elementos da pagina
  var txtano = document.getElementById("txtano");
  var resposta = document.querySelector("div#res");
  var sexo = document.getElementsByName("radsex");

  //verificar o input de ano foi válido
  if (txtano.value.length == 0 || txtano.value >= hoje) {
    alert("ERRO digite um ano válido!");
  } else {
    //verificar a idade
    var genero = "";
    if (sexo[0].checked) {
      genero = "homem";
    } else if (sexo[1].checked) {
      genero = "mulher";
    }
    //mostra a idade
    idade = hoje - txtano.value;
    resposta.innerHTML = `<p>Detectamos um ${genero} com ${idade} anos</p>`;

    //mostra a foto de acordo com a idade e o genêro

    resposta.innerHTML += `<img src="" alt="" id="imagem">`;
    var imagem = document.querySelector("img#imagem");
    if (genero == "homem") {
      if (idade < 2) {
        console.log(idade);
        imagem.setAttribute("src", "imagens/homens/bebe.jpg");
      } else if (idade < 7) {
        imagem.setAttribute("src", "imagens/homens/crianca.jpg");
      } else if (idade < 18) {
        imagem.setAttribute("src", "imagens/homens/adolescente.jpg");
      } else if (idade < 35) {
        imagem.setAttribute("src", "imagens/homens/adulto.jpg");
      } else if (idade < 60) {
        imagem.setAttribute("src", "imagens/homens/cinquenta.jpg");
      } else if (idade < 120) {
        imagem.setAttribute("src", "imagens/homens/idoso.jpg");
      } else if (idade >= 120) {
        imagem.setAttribute("src", "imagens/homens/morto.jpg");
      }
    } else if (genero == "mulher") {
      if (idade < 2) {
        imagem.setAttribute("src", "imagens/mulheres/bebe.jpg");
      } else if (idade < 8) {
        imagem.setAttribute("src", "imagens/mulheres/crianca.jpg");
      } else if (idade < 20) {
        imagem.setAttribute("src", "imagens/mulheres/adolescente.jpg");
      } else if (idade < 40) {
        imagem.setAttribute("src", "imagens/mulheres/adulta.jpg");
      } else if (idade < 60) {
        imagem.setAttribute("src", "imagens/mulheres/cinquenta.jpg");
      } else if (idade < 120) {
        imagem.setAttribute("src", "imagens/mulheres/idosa.jpg");
      } else if (idade >= 120) {
        imagem.setAttribute("src", "imagens/mulheres/morto.jpg");
      }
    } else {
      alert("Erro, gênero inválido");
    }
  }
}
