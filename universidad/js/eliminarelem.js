const enlace = document.querySelectorAll('.enlace')

const navegacion = document.querySelector('#principal')
//borrar
navegacion.removeChild(enlace[0])

console.log(navegacion)

const primerli =document.querySelector('.enlace')
let elemento
elemento=primerli.className
elemento= primerli.classList.add('nueva')
elemento=primerli.classList
console.log(elemento)
elemento=primerli.classList.remove('nueva')
elemento=primerli.classList
console.log(elemento)
