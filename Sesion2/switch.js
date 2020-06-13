//swtich
const metodopago ='bitcoins'

switch(metodopago){
    case 'efectivo':
    console.log(`pago con ${metodopago}`)
    break
    case 'cheque':
    console.log(`pago con ${metodopago}`)
    break
    case 'tarjeta':
    console.log(`pago con ${metodopago}`)
    break
    default:
    console.log('metodo de pago no soportado')
    break
}

let mes 
switch (new Date().getMonth()) {
    case 0:
        mes= 'Enero'
        break;
    case 1:
        mes= 'febrero'
        break;
    case 2:
        mes= 'marzo'
        break;
    default:
        break;
}
console.log(`este mes es : ${mes}`)