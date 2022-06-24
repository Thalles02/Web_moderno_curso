const peso1 = 1.0

const peso2 = Number("2.0")

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1+avaliacao2+peso1+peso2
const media = total/(peso1+peso2)

console.log(media.toFixed(2))
//console.log(media.toString())
console.log(Number.isInteger(media))

//Cuidados com Number
console.log("\n")
console.log("Cuidados com algumas operações no javasacript:")
console.log(7/0)
console.log("10"/2)
console.log("Show"*2)
console.log(0.1+0.7)