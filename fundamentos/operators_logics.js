function compras(trab1, trab2){
    const comprarSorvete = trab1 || trab2
    const comprarTv50 = trab1 && trab2
    //const comprarTv32 = !!(trab1 ^ trab2) // biitwise xor
    const comprarTv32 = trab1 != trab2
    const manterSadavel = !comprarSorvete

    return {comprarSorvete, comprarTv32, comprarTv50, manterSadavel} // recurso adicionado recentemente == criar objeto com o nome da chave igual ao atributo 
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))