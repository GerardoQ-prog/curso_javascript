const numeros = [10,20,40,30]
console.log(numeros)//los arreglos comienzan con index 0

//otra forma
const meses = new Array('enero','febrero','marzo')
console.log(meses)
console.log(meses.length)//tamaño del arreglo

const mezclado = ['hola',2,2.1,null,undefined]
console.log(mezclado)

//comprobar si es arreglo
console.log(Array.isArray(meses))//true or false

//llamar elementos del arreglo , por index
console.log(meses[0])

//insertando datos
meses[3]='mayo'
console.log(meses)
//otra forma
meses.push('Junio')
console.log(meses)

//encontrar elemento en el arreglo
console.log(meses.indexOf('enero'))

//agregar al comienzo
meses.unshift('mes 0')
console.log(meses)

//eliminar ultimo elemeto
meses.pop()
console.log(meses)

//eliminar el primer dato del arreglo
meses.shift
console.log(meses)

//eliminar del medio
meses.splice(2,1)//(desde, cuantos mas)

//revertir
meses.reverse()
console.log(meses)

//unir arreglos
let arreglo1=[1,2,3]
let arreglo2=[4,5,6]
console.log(arreglo1.concat(arreglo2))

//ordenar un arreglo letras
const frutas =['manzana','fresa','platano','pera']
console.log(frutas)
//orden alfabetico
frutas.sort()
console.log(frutas)

//ordenar numeros
arreglo1 = [ 9, 4,56,77,100,5,43434,33]
console.log(arreglo1)

arreglo1.sort()// 110 22 33 44 agarra el primer numero y creo que es el orden
console.log(arreglo1)

arreglo1.sort(function(a,b){
    return a-b//de menor a mayor
})
console.log(arreglo1)
arreglo1.sort(function(a,b){
    return b - a//de  mayor a menor
})
console.log(arreglo1)

//modificar arreglo
const numero =[1,2,3]
numero[0]=4;

console.log(numero)
// reemplaza siempre y cuando no sea const
let numero10 =[1,2,3]
numero10=['jose','pepe']
console.log(numero10)
    



