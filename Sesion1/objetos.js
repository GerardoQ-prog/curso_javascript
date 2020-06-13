const persona={
    nombre:'miguel',
    apellido:'peerez',
    profesion: 'diseñador',
    email:'correo@correo.com',
    edad:20,
    musica: ['rock','electro'],
    hogar:{
        ciudad:'lima',
        pais:'peru'
    },
    nacimiento : function(){
        return new Date().getFullYear()- this.edad
    }
}
console.log(persona)
//valores del objeto
console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.edad)
console.log(persona.musica)
//accediendo al arreglo del objeto
console.log(persona.musica[1])
//accediendo al obejto del objeto
console.log(persona.hogar)
console.log(persona.hogar.ciudad)
//la funcion
console.log(persona.nacimiento())