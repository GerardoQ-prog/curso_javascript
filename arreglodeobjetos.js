const autos =[
    {
        modelo: 'mustang',
        motor:12
    },
    {
        modelo: 'ferrari',
        motor:121
    }
]
console.log(autos)
console.log(autos.length)
console.log(autos[0].modelo)

//utilizando for 
console.log('empieza el for')
for(let i=0; i<autos.length;i++){
    console.log(autos)
    console.log(autos[i])
    console.log(autos[i].modelo)
    console.log(`${autos[i].modelo} ${autos[i].motor}`)
    console.log('termina primer valor')
}

//modifiando valores de un arreglo
autos[0].modelo ='audi'
console.log(autos)