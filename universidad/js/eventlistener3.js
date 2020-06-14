const busqueda = document.querySelector('#buscador')
//busqueda.addEventListener('keydown',obtenerelemeto)
//busqueda.addEventListener('keyup',obtenerelemeto)
busqueda.addEventListener('keypress',obtenerelemeto)
busqueda.addEventListener('focus',obtenerelemeto)
busqueda.addEventListener('blur',obtenerelemeto)
busqueda.addEventListener('cut',obtenerelemeto)
function obtenerelemeto(e){
    console.log(busqueda.value)
}