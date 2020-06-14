const encabezado = document.querySelector('#encabezado')

const enlaces = document.querySelectorAll('.enlace')

const boton = document.querySelector('#vaciar-carrito')

//click

//boton.addEventListener('click', obtenerveneto)
//boton.addEventListener('dbclick', obtenerveneto)
//boton.addEventListener('mouseenter', obtenerveneto)
//boton.addEventListener('mouseover', obtenerveneto)
//boton.addEventListener('mouseout', obtenerveneto)
//boton.addEventListener('mouseup', obtenerveneto)
boton.addEventListener('mousemove', obtenerveneto)
function obtenerveneto(e){
    console.log(`Evento: ${e.type}`)
}