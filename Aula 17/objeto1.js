let amigo = {nome: "José", Sexo: "M", peso: 80.0, engordar (p=0) {
  this.peso += p
}}

amigo.engordar(2)
console.log(`O peso de ${amigo.nome} é ${amigo.peso}`)