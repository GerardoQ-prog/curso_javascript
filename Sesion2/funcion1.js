function saludar(nombre){
    console.log(`Hola ${nombre}`)
}
saludar('ana')


function sumar(a,b){
    return a+b
}
let suma 
suma =sumar(1,3)
console.log(suma)

//meotod antiguo
function saludo(nombre1){
    if(typeof nombre1 === 'undefined'){
        nombre1='visitante'
        return`hola ${nombre1}`
    }
}

const suma1 = function(a,b){
    return a+b
}

console.log(suma1(1,2))
console.log(suma1(5,2))



const saludar1 =function(nombre='visitante',
edad=20,trabajo ='developer'){
    return `hola ${nombre},profesion ${trabajo}, edad ${edad}`
     
}
console.log(saludar1())
console.log(saludar1())
console.log('hola')