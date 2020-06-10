const num1="50",
    num2=10,
    num3="tres"
    console.log( num1+num2)//mal 
    console.log( Number(num1)+num2) //Number lo convierte a numero
    // tambien puede ser con parseInt

    console.log(typeof parseInt(num1))

    let dato
    dato=Number("20")
    dato=Number(true)//1
    dato=Number(false)//0
    dato =Number([1,2,3])//NaN

    // ParseInt y ParseFloat // Int entero, Flotar decimal
    dato= parseInt('100')
    dato= parseFloat('1000.231')
    dato=12324.234234234
    console.log(dato)
    console.log(dato.toFixed(4))// agarra decimales

    console.log(parseInt(dato).toFixed(2))
    console.log(parseFloat(dato).toFixed(2))