
/*products*/

const fernet_price = 800;

const gancia_price = 750;

const whisky_price = 1300;

const vermut_price = 600;

/*alert inicial*/

let edad = prompt ("Ingresa tu edad");

if (edad >= 18){
alert ("¡Bienvenido!" +" "+ "\nBeber con moderación - Prohibida su venta a menores de 18 años");

/* alert de calculo iva y precio final */

let precioprod = parseFloat (prompt ("A continuación podrás ingresar el precio del producto que deseas, para conocer su costo final con iva incluído. \nIngresá el precio del producto que prefieras: \n1 - Fernet $800 \n2 - Gancia $750 \n3 - Whisky $1300 \n4 - Vermut $600"));

function calcularIva(precio){
    return precio * 0.21;}

let ivaCalculado = calcularIva(precioprod);
alert ("EL iva del producto es = $"+ivaCalculado);

function calcularPrecioFinal(precio, iva){
    return precio + iva;}
    
let precioFinal = calcularPrecioFinal(precioprod,ivaCalculado);

alert ("El precio final del producto con iva incluido es $"+precioFinal);

let masprod = prompt ("¿Te gustaría ver el precio final de otro producto: -si -ESC para salir");

    if (masprod == "si"|| masprod == "SI"){
        alert ("Te indicamos a continuación todos los productos en stock");}

    let precioprod2 = parseFloat (prompt ("Ingresa el precio del producto que deseas, para conocer su costo final con iva incluído. \nIngresá el precio del producto que prefieras: \n1 - Fernet $800 \n2 - Gancia $750 \n3 - Whisky $1300 \n4 - Vermut $600"));

    function calcularIva(precio){
        return precio * 0.21;}
    
    ivaCalculado = calcularIva(precioprod2);
    alert ("EL iva del producto es = $"+ivaCalculado);
    
    function calcularPrecioFinal(precio, iva){
        return precio + iva;}
        
    let precioFinalok = calcularPrecioFinal(precioprod2,ivaCalculado);
    
    alert ("El precio final del producto con iva incluido es $"+precioFinalok);


    //Array Products//

    const produc2= [
        "FERNET",
        "GANCIA",
        "WHISKY JAMESON",
        "VERMUT",
];

let nombre = prompt ("Consulta por el stock del producto que te gustaría comprar");

nombre= nombre.toUpperCase();

let stock = produc2.includes(nombre);

if (stock){
alert("Contamos con stock de esa bebida");
}
else{
alert("No contamos con stock de esa bebida, lo sentimos");
}
}

//flujo edad

else if (edad == ""){
    alert("Por favor, ingresa tu edad");
}

else{
    alert("Eres menor de edad, por favor volve cuando tengas 18 años.");
}

