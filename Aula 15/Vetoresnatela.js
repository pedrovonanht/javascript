var v = [0, 2, 7, 8]
/*
console.log(v)
console.log(v[0])
console.log(v[1])
console.log(v[2])
console.log(v[3])

for (pos=0; pos < v.length; pos++) {
    console.log(`O valor é ${v[pos]}`)
}
*/
for (let tes in v) {
    console.log(`A variavel ${v} tem o valor ${v[tes]}`)
}

pos = v.indexOf(12093213) //indica a posição de um valor específico em um array

console.log(`O valor está na posição ${pos}`)