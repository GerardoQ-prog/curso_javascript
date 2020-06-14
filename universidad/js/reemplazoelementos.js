const nuevoEncabezado = document.createElement('h2')

nuevoEncabezado.id='encabezado'

nuevoEncabezado.appendChild(document.createTextNode('los mejores cursos'))


const anterior = document.querySelector('#encabezado')
const elPadre = document.querySelector('#lista-cursos')
elPadre.replaceChild(nuevoEncabezado,anterior)
console.log(anterior.parentElement)