function trataerro (erro){
    throw new Error ("O gustavo lima esta vindo ai ")
}

function imprimirnomegritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    }
    catch(e){
        trataerro(e)
    }finally{
        console.log("Finalmente ele foi embora")
    }

}

const obj = { nome: "Robert Barathon" }
imprimirnomegritado(obj)