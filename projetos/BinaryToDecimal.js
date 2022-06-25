let str = "1011111"

let strToArray = str.split('');
strToArray.reverse()
//console.log(strToArray)

var quant_caractere = strToArray.length

//let array_binário = [1, 1, 0, 1]
//console.log(array_binário)

var resp = 0
var aux = 0

for (i = 0; i < quant_caractere; i++) {
    //resp += array_binário[i] * Math.pow(2, i)
    aux += parseInt(strToArray[i]) * Math.pow(2, i)
    //console.log(aux, i)
}

//console.log(resp)
console.log(aux)
