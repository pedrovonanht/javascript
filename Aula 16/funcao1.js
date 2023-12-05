function parimpar(n) {
  if (n % 2 == 0) {
    return "Par";
  } else {
    return "impar";
  }
}

let res = parimpar(2)
console.log(res)