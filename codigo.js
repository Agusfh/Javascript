/*products*/

const fernet_price = 800;

const gancia_price = 750;

const whisky_price = 1300;

const vermut_price = 600;

/*alert inicial*/

let edad = prompt("Ingresa tu edad");

if (edad >= 18) {
    //en vez de alert uso sweet alert
    Swal.fire({
        title: "¡Bienvenido!",
        text: "Beber con moderación - Prohibida su venta a menores de 18 años",
        width: 600,
        padding: '3em',
        color: 'rgb(231, 219, 46)',
        background: '#fff url(/images/trees.png)',
        backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat-nyan.gif")
        left top
        no-repeat
        `
    })


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
    Swal.fire({
        text: "Por favor, ingresa tu edad",
        icon: 'warning',
        width: 600,
        padding: '3em',
        color: 'rgb(231, 219, 46)',
        background: '#fff url(/images/trees.png)',
    })
} else {
    Swal.fire({
        title: "¡Lo sentimos!",
        text: "Eres menor de edad, por favor volve cuando tengas 18 años.",
        icon: 'warning',
        width: 600,
        padding: '3em',
        color: 'rgb(231, 219, 46)',
        background: '#fff url(/images/trees.png)',
    })
}



//cards y boton dinámico para carrito

let contenedor = document.getElementById("misprods");

function renderizarProds() {
    for (const producto of productos) {
        contenedor.innerHTML += `
            <div class="card col-sm-3" style="width: 18rem;">
                <img src=${producto.foto} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">$ ${producto.precio}</p>
                    <button id="btn${producto.id}" class= "btn btn-primary buy" >Comprar</button>
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
    //alert("Producto: " + productoAComprar.nombre + " Agregado al Carrito!");
    //sweet alert
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: productoAComprar.nombre,
        background:"black",
        color: "rgb(216, 167, 31)",
        text: "Agregado al Carrito",
        showConfirmButton: false,
        timer: 2500
    })

    //cuadro de carrito donde se van añadiendo los productos al html

    document.getElementById("tablabody").innerHTML += `
<tr>
    <td>${productoAComprar.id}</td>
    <td>${productoAComprar.nombre}</td>
    <td>${productoAComprar.precio}</td>
</tr>
`;
//carrito y finalizar compra 
    let totalCarrito = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText = "Total a Pagar $: " + totalCarrito;
}

let botonFinalizar = document.getElementById("finalizar");
let carrito = [];


botonFinalizar.onclick = () => {
    carrito = [];
    document.getElementById("tablabody").innerHTML="";
    let infoTotal = document.getElementById("total");
    infoTotal.innerText="Total a pagar $: ";
    Swal.fire('Pronto recibirás el correo de confirmación con los pasos para realizar el pago!');
}

//registro

let botonRegistro = document.getElementById ("registrarse");

botonRegistro.onclick = () => {
    Swal.fire({
        title: 'Registrate',
        html: `<input type="mail" id="login" class="swal2-input" placeholder="mail">
        <input type="password" id="password" class="swal2-input" placeholder="Password">`,
        confirmButtonText: 'Ingresá',
        focusConfirm: false,
        preConfirm: () => {
          const login = Swal.getPopup().querySelector('#login').value
          const password = Swal.getPopup().querySelector('#password').value
          if (!login || !password) {
            Swal.showValidationMessage(`Ingresá tu mail y contraseña`)
          }
          return { login: login, password: password }
        }
      }).then((result) => {
        Swal.fire(`
          Mail: ${result.value.login}
          Password: ${result.value.password}
        `.trim())
      })
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
        document.contenedor.className = "dark";
        misprods.classList.remove("light");
        misprods.classList.add("dark");
        modo = "dark";
    } else {
        document.contenedor.className = "light";
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

    

