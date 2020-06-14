//eventlistener click al bsucador
// document.querySelector('#submit-buscador').
// addEventListener('click',function(e){
//     e.preventDefault()// no hace la accion defult del form
//     alert('buscando cursos')
// })

document.querySelector('#submit-buscador').
addEventListener('click',ejecutarbutton)

function ejecutarbutton(e){
    e.preventDefault()
    console.log('no recarga')
    let elemento
    elemento =e
    console.log(elemento)
    console.log(elemento.target)
    console.log(elemento.target.id)
    console.log(elemento.target.className)
    console.log(elemento.target.classList)
}

document.querySelector('#encabezado').addEventListener('click',
function(e){
    e.target.innerText='Nuevo encabezado'
    console.log(e.target.innerText)
})