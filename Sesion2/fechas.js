//fechas
//objeto llamado DATE

const diahoy= new Date()

console.log(diahoy)

//fecha en especifico mes, dia ,año
let navidad = new Date('12-25-2020')
console.log(navidad)

let valor
//mes
valor = diahoy.getMonth()
console.log(valor)//el mes -1
//dia
valor = diahoy.getDate()
console.log(valor)//dia del mes
//año
valor = diahoy.getFullYear()
console.log(valor)//año
//minutos
valor = diahoy.getMinutes()
console.log(valor)
//horas
valor = diahoy.getHours()
console.log(valor)
//milesegundos desde 1970
valor = diahoy.getTime()
console.log(valor)
//cambiar año
valor = diahoy.getFullYear()
valor = diahoy.setFullYear(2018)//año modificado
valor = diahoy.getFullYear()
console.log(valor)