//event bubling
const card =document.querySelector('.card')

const infocurso = document.querySelector('.info-card')

const agregarcarrito = document.querySelector('.agregar-carrito')

card.addEventListener('click',function(e){
    
    console.log('click en card')
    e.stopPropagation()
})
infocurso.addEventListener('click',function(e){
    console.log('click en info')
    e.stopPropagation()
})
agregarcarrito.addEventListener('click',function(e){
    console.log('click en carrito')
    e.stopPropagation()
})