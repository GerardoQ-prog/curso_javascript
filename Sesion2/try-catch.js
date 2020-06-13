
//funcionque no existe

try{
    algo()
}catch(error){
    console.log(error)
}finally{
    console.log('no importa, ejecuta')
}

obtenercliente()

function obtenercliente(){
    console.log('desacrgando ..')

    setTimeout(function(){
        console.log('Completo')
    },3000)
}

