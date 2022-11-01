/*products*/

const fernet_price = 800;

const gancia_price = 750;

const whisky_price = 1300;

const vermut_price = 600;

/*alert inicial*/

let edad = prompt("Ingresa tu edad");

if (edad >= 18) {
    alert("¡Bienvenido!" + " " + "\nBeber con moderación - Prohibida su venta a menores de 18 años");

    /* alert de calculo iva y precio final */

    /*let precioprod = parseFloat (prompt ("A continuación podrás ingresar el precio del producto que deseas, para conocer su costo final con iva incluído. \nIngresá el precio del producto que prefieras: \n1 - Fernet $800 \n2 - Gancia $750 \n3 - Whisky $1300 \n4 - Vermut $600"));

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
    }*/

    //dejo comentado los alert para que no se muestren

}

//flujo edad
else if (edad == "") {
    alert("Por favor, ingresa tu edad");
} else {
    alert("Eres menor de edad, por favor volve cuando tengas 18 años.");
}


//cards y boton dinámico para carrito

const carrito = [];

let contenedor = document.getElementById("misprods");

function renderizarProds() {
    for (const producto of productos) {
        contenedor.innerHTML += `
            <div class="card col-sm-3" style="width: 18rem;">
                <img src=${producto.foto} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.id}</h5>
                    <p class="card-text">${producto.nombre}</p>
                    <p class="card-text">$ ${producto.precio}</p>
                    <button id="btn${producto.id}" class= "btn btn-primary">Comprar</button>
                </div>
            </div>
        `;
    }

    //eventos

    productos.forEach(producto => {
        //creo el evento para cada uno de los botones de producto
        document.getElementById(`btn${producto.id}`).addEventListener("click", function () {
            agregarAlCarrito(producto);
        })
    })
}

renderizarProds();

function agregarAlCarrito(productoAComprar) {
    carrito.push(productoAComprar);
    console.table(carrito);
    alert("Producto: " + productoAComprar.nombre + " Agregado al Carrito!");

    //cuadro de carrito donde se van añadiendo los productos al html

    document.getElementById("tablabody").innerHTML += `
<tr>
    <td>${productoAComprar.id}</td>
    <td>${productoAComprar.nombre}</td>
    <td>${productoAComprar.precio}</td>
</tr>
`;

    let totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText = "Total a Pagar $: " + totalCarrito;
}

//DARK AND LIGHT MODE EN BODY

let boton = document.getElementById("mode");

let principal = document.getElementById("principal");

let modo = localStorage.getItem("modo");

//primer renderizado - cambio de color y guardado en storage

if (modo != null) {
    document.body.className = modo;
    principal.className = "position-relative overflow-hidden p-3 text-center" + modo;
    if (modo == "light") {
        boton.innerText = "Dark Mode";
    } else {
        boton.innerText = "Light Mode";
    }
} else {
    modo = "light";
}

boton.onclick = () => {
    if (modo == "light") {
        document.body.className = "dark";
        principal.classList.remove("light");
        principal.classList.add("dark");
        boton.innerText = "Light Mode";
        modo = "dark";
    } else {
        document.body.className = "light";
        principal.classList.remove("dark");
        principal.classList.add("light");
        boton.innerText = "Dark Mode";
        modo = "light";
    }
    localStorage.setItem("modo", modo);

    //consultar si esta ok de esta forma para que la card me cambie de color tambien

    if (modo == "light") {
        document.article.className = "dark";
        misprods.classList.remove("light");
        misprods.classList.add("dark");
        modo = "dark";
    } else {
        document.article.className = "light";
        misprods.classList.remove("dark");
        misprods.classList.add("light");
        modo = "light";
    }
}

//operador avanzado - Aplico promoción por fecha 

let fecha = new Date();
fecha.getDate() > 25 && mostrarPromo();

function mostrarPromo() {
    superpromo.innerHTML += `
    <h3> Estamos a fin de mes y se hace dificil, pero no te preocupes, te traemos las mejores promos para aprovechar! </h3>
`;
    }
