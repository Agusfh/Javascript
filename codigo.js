
/*products*/

const fernet_price = 800;

const gancia_price = 750;

const whisky_price = 1300;

const vermut_price = 600;

/*alert inicial*/

let edad = prompt ("Ingresa tu edad");

if (edad >= 18){
alert ("¡Bienvenido!" +" "+ "\nBeber con moderación - Prohibida su venta a menores de 18 años");
}

else if (edad == ""){
    alert("Por favor, ingresa tu edad");
}

else{
    alert("Eres menor de edad, por favor volve cuando tengas 18 años.");
}

/* alert de calculo iva y precio final */

let precioprod = parseFloat (prompt ("A continuación podrás ingresar el precio del producto que deseas, para conocer su costo final con iva incluído. \nIngresá el precio del producto que prefieras: \n1 - Fernet $800 \n2 - Gancia $750 \n3 - Whisky $1300 \n4 - Vermut $600"));

function calcularIva(precio){
    return precio * 0.21;}

ivaCalculado = calcularIva(precioprod);
alert ("EL iva del producto es = $"+ivaCalculado);

function calcularPrecioFinal(precio, iva){
    return precio + iva;}
    
let precioFinal = calcularPrecioFinal(precioprod,ivaCalculado);

alert ("El precio final del producto con iva incluido es $"+precioFinal);



let masprod = prompt ("¿Te gustaría ver el precio final de otro producto: -si -ESC para salir");

while (masprod != "ESC"){
    calcularPrecio();}

    if (masprod == "si"|| masprod == "SI"){
        alert ("A continuación podrás ingresar el precio del producto que deseas, para conocer su costo final con iva incluído. \nIngresá el precio del producto que prefieras: \n1 - Fernet $800 \n2 - Gancia $750 \n3 - Whisky $1300 \n4 - Vermut $600");}

    let precioprod2 = parseFloat (prompt ("A continuación podrás ingresar el precio del producto que deseas, para conocer su costo final con iva incluído. \nIngresá el precio del producto que prefieras: \n1 - Fernet $800 \n2 - Gancia $750 \n3 - Whisky $1300 \n4 - Vermut $600"));

    function calcularIva(precio){
        return precio * 0.21;}
    
    ivaCalculado = calcularIva(precioprod2);
    alert ("EL iva del producto es = $"+ivaCalculado);
    
    function calcularPrecioFinal(precio, iva){
        return precio + iva;}
        
    let precioFinalok = calcularPrecioFinal(precioprod2,ivaCalculado);
    
    alert ("El precio final del producto con iva incluido es $"+precioFinalok);