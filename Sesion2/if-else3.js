// operador ||
let efectivo =300
credito =300
totalcarrito =500

if(totalcarrito< efectivo || totalcarrito< credito){
    console.log('pudo pagar')
}else {
    console.log('no pudo pagar')
}

 efectivo =300
credito =300
disponible =efectivo+credito
totalacarrito =500

if(totalcarrito< efectivo || totalcarrito< credito){
    console.log('pudo pagar')
}else if(totalacarrito< disponible){
    console.log('tambien se paga')
}else{
    console.log('no se pago')
}

//ternarios
const logeado = true
console.log(logeado === true ? 'si': 'no')

