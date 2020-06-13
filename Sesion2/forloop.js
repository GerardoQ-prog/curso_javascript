for(let i=0; i<10; i++){
    console.log(`numero ${i}`)
}

for(let i=0; i<10; i++){
    if(i===5){
        console.log('voy en el 5')
    }
    console.log(`${i}`)
}

for(let i=0; i<10; i++){
    if(i%2 ==0){
        console.log(`el numero es ${i} es par`)
    }else{
        console.log(`no es par`)
    }
    
}

const arregloproducto=['camisa','guitarra','disco']
console.log(arregloproducto.length)
for(let i = 0; i < arregloproducto.length; i++){
    console.log(`${arregloproducto}`)
}
