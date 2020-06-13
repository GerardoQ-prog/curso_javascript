let hora =20
if(hora <=10){
    console.log('buenos dias')
}else{
    console.log('buenas tardes')
}
//anidacion
if(hora <=10){
    console.log('buenos dias')
}else if (hora<=18){
    console.log('buenas tardes')
}else{
    console.log('buenas noches')
}
// y = &&
if(hora > 0 && hora <=10){
    console.log('buenos dias')
}else if (hora<=18){
    console.log('buenas tardes')
}else{
    console.log('buenas noches')
}
//o = ||
if(hora > 0 || hora <=10){
    console.log('buenos dias')
}else if (hora<=18){
    console.log('buenas tardes')
}else{
    console.log('buenas noches')
}
 hora =25
if(hora > 0 && hora <=10){
    console.log('buenos dias')
}else if (hora>11 && hora <=18){
    console.log('buenas tardes')
}else if (hora>19 && hora <=24){
    console.log('buenas noches')
}else{
    console.log('hora no valida')
}




