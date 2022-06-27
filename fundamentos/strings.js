const escola = "thallescoder"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // pegar o caractere que está no indice 5 
console.log(escola.charCodeAt(5)) // tabela asc
console.log(escola.indexOf('s')) // pegar o indice da letra s 

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) // pega as strings no intervalo dos indices que foram passados como parametro 

console.log('Escla '.concat(escola).concat("!"))
console.log('Escla '+escola+"!") // concatenações 

console.log(escola.replace('e', '3')) // substituir determinada string por outra 

console.log('Ana, Maria, Pedro'.split(', ')) // transformar a string para o array 