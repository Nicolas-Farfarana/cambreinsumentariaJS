/* IF */


/* let nombre = prompt("Ingrese su nombre")

if(nombre == "nico"){
    alert("Hola " + nombre)
}
else if(nombre == "chori"){
    alert("nos vimos")
}
else{
    alert("Hols")
}
 */

/* FOR */

/* let numero = parseInt(prompt("ingrese un numero"));

for( let i = 0 ; i <= 10 ; i++){
    let resultado = numero * i ;
    if(i == 5){
        continue;
    }
    alert( numero + " X " + i + " = " + resultado);

} */

/* WHILE */

/* let nombre = prompt( " ingrsar un nombre")

while( nombre != "nico"){
    alert(" el nombre es incorrecto")

    nombre = prompt(" ingresar otro nombre ")
}
while( nombre == "nico"){
    alert("hola nico");
    break;
} */

/* DO ... WHILE*/


/* let numero = 0;
do{
    numero = prompt("ingrese un numero ");
    alert(numero);
} while(parseInt(numero)) */

/* SWITCH */

/* let entrada = prompt("Ingrese su nombre: ")

while (entrada != "ESC"){
    switch(entrada){
        case "nico":
            alert("hola nico");
            break;
        case "rodri":
            alert("hola choribio");
            break;
        default:
            alert("quien sos?");
            break;
    }
    entrada = prompt("Ingrese su nombre: ")
} */

/* FUNCTION */

/* function sumar(primerNumero , segundoNumero){
    return primerNumero + segundoNumero;
}

let resultado = sumar( 5, 8); */

/* FUNCTION CALCULADORA */


/* function calculador( primerNumero , segundoNumero , operacion){
    switch(operacion){
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }

}
let numero1 = parseInt (prompt("ingrese un numero: "))
let numero2 = parseInt(prompt("ingrese otro numero: "))
let operacion = prompt("ingrese la operacion que desea realizar : + , - , * , / ")

alert(calculador(numero1,numero2,operacion)) */

/* FUNCTION ANONIMA*/

/* const sumar = function(primerNumero, segundoNumero){return primerNumero + segundoNumero}
alert(sumar(5,2))
 */

/* FUNCION FLECHA 
const resta = (primerNumero, segundoNumero) =>  primerNumero - segundoNumero ;

console.log ( resta ( 19 , 2 ) )*/

document.addEventListener('DOMContentLoaded', () => {

    

    // Variables
    let baseDeDatos = [];

    let carrito = [];
    const divisa = '$';
    const DOMitems = document.getElementById('items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;

    const listaDeProductos = [
        {
            id: 1,
            nombre: "Mallas Biker Pink",
            precio: 22,
            stock: 10,
            img:"./media/images/bikerliso1.png",
        },
        {
            id: 2,
            nombre: "Mallas Biker Fluor",
            precio: 120,
            stock: 10,
            img: "./media/images/bikerliso2.png",
        },
        {
            id: 3,
            nombre: "Biker Liso Grey",
            precio: 210,
            stock: 102,
            img: "./media/images/bikerliso3.png",
        },
        {
            id: 4,
            nombre: "Frutilla",
            precio: 600,
            stock: 1
        },
        {
            id: 5,
            nombre: "Naranja",
            precio: 80,
            stock: 12
        }
    ]

    // Funciones

    /* const URLGET = "./producto.json"
    //Agregamos un botón con jQuery
    $("body").prepend('<button id="btn1">GET</button>');
    //Escuchamos el evento click del botón agregado
    $("#btn1").click(() => { 
    $.get(URLGET, function (response, status) {
        if(status === "success"){
        baseDeDatos = response;
        renderizarProductos()
        }
        else{
            console.log('No encontramos el archivo de datos')
        }
    });
    }) */

    /**
    * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
    */
    function renderizarProductos() {
        listaDeProductos.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            //Imagen
            const miNodoImg = document.createElement('img');
            miNodoImg.src = info.img;
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.precio}$`;
            //Stock
            const miNodoStock = document.createElement('p');
            miNodoStock.classList.add('card-text');
            miNodoStock.textContent = `${info.stock}`;
            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoStock);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    /**
    * Evento para añadir un producto al carrito de la compra
    */
    function anyadirProductoAlCarrito(e) {
        // Anyadimos el Nodo a nuestro carrito
        carrito.push(e.target.getAttribute('marcador'))
        // Actualizamos el carrito 
        renderizarCarrito();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();
    }

    /**
    * Dibuja todos los productos guardados en el carrito
    */
    function renderizarCarrito() {
        // Vaciamos todo el html
        DOMcarrito.textContent = '';
        // Quitamos los duplicados
        console.log(carrito)
        const carritoSinDuplicados = [...new Set(carrito)];
        //console.log(carritoSinDuplicados)
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach((item) => {
            // Obtenemos el item que necesitamos de la variable base de datos
            const miItem = listaDeProductos.filter((itemBaseDatos) => {
                // ¿Coincide las id? Solo puede existir un caso
                return itemBaseDatos.id === parseInt(item);
            });
            // Cuenta el número de veces que se repite el producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del carrito
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        // Renderizamos el precio total en el HTML
        DOMtotal.textContent = calcularTotal();
    }

    /**
    * Evento para borrar un elemento del carrito
    */
    function borrarItemCarrito(e) {
        // Obtenemos el producto ID que hay en el boton pulsado
        const id = e.target.dataset.item;
        // Borramos todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        // volvemos a renderizar
        renderizarCarrito();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();

    }

    /**
     * Calcula el precio total teniendo en cuenta los productos repetidos
     */
    function calcularTotal() {
        // Recorremos el array del carrito 
        [1,1,1,3,4]
        return carrito.reduce((total, item) => {
            // De cada elemento obtenemos su precio
            const miItem = listaDeProductos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            // Los sumamos al total
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

    /**
    * Varia el carrito y vuelve a dibujarlo
    */
    function vaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        // Renderizamos los cambios
        renderizarCarrito();
        // Borra LocalStorage
        localStorage.clear();

    }

    function guardarCarritoEnLocalStorage () {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage () {
        // ¿Existe un carrito previo guardado en LocalStorage?
        if (miLocalStorage.getItem('carrito') !== null) {
            // Carga la información
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }

    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);

    // Inicio
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();
});