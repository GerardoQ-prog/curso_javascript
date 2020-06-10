const producto1= "pizza",
precio1 =32
const producto2= "pollo",
precio2 =40
//templete html
let html 
// //antiguo
// html = '<ul>'+
//     '<li>Orden' + producto1 + '</li>'+
//     '<li>precio' + precio1 + '</li>'+
//     '<li>Orden' + producto2 + '</li>'+
//     '<li>precio' + precio2 + '</li>'+
//     '</ul>'

//     document.getElementById('app').innerHTML=html
//nuevo
//se llama la funcion con los parametros
html1= `<ul>
            <li>Orden: ${producto1}</li>
            <li>Orden: ${precio1}</li>
            <li>Orden: ${producto2}</li>
            <li>Orden: ${precio2}</li>  
            <li>Orden: ${total(precio1,precio2)}</li>
        </ul>`
        document.getElementById('app').innerHTML=html1

function total(precio1,precio2){
    return precio1 +precio2
}