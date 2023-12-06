function carreguar() {
  var data = new Date();
  var div1 = document.getElementById("primeira");
  var img = document.querySelector("img");
  
  hora = data.getHours();
  div1.innerHTML = `<p>Agora são ${hora} horas</p>`;

  if (hora < 5 && hora >= 0) {
    img.src = "imagens/madrugada.jpg";
    document.body.style.backgroundColor = "#050402"
  } else if (hora < 12) {
    img.src = "imagens/manha.jpg";
  } else if (hora < 18) {
    img.src = "imagens/dia.jpg";
    document.body.style.background = "#4D96CD";
  } else if (hora < 24) {
    img.src = "imagens/noite.jpg";
    document.body.style.backgroundColor = "#032D2D"
  }
}

function teste() {
  hora = 15;

  if (hora < 5 && hora > 0) {
    console.log("Boa madrugada");
  } else if (hora < 12) {
    console.log("Bom dia");
  } else if (hora < 18) {
    console.log("Boa tarde");
  } else if (hora < 24) {
    console.log("Boa noite");
  }
}
