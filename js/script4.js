//document.addEventListener('DOMContentLoaded', () => {


    const listaDeProductosBikers = [] ;
    const DOMbikers = document.getElementById('bikers')

    function Producto (id, nombreProducto, precioProducto, stockProducto, descuentoProducto, imgValor){
        this.id = id ;
        this.nombre = nombreProducto ;
        this.precio = parseFloat(precioProducto) ;
        this.stock = stockProducto ;
        this.descuento = descuentoProducto ;
        this.img = imgValor;
        this.venta = function (cantidadComprada){
            this.stock-= cantidadComprada;
            console.log ("El stock de  " + this.nombre  + " " + "es igual a: " + this.stock  )
        }
        this.calcularPrecio = function(precio, descuento){
            precioTotalVenta += parseFloat(cantidadComprada * precio * descuento);
        }
        this.stockInsuficiente = function(){
            alert("No tenemos stock suficiente de ese producto, puedes comprar " + this.stock + " unidades")
        }
    }

    const productoBikerA = new Producto (1,"Biker Lisa Pink", 22, 10, 0.95, "./media/images/bikerliso1.png" )
    const productoBikerB = new Producto (2, "Biker liso Fluor", 22, 5, 0.95, "./media/images/bikerliso2.png" )
    const productoBikerC = new Producto (3, "Biker liso Grey", 22, 5, 0.95, "./media/images/bikerliso3.png" )
    const productoBikerD = new Producto (4, "Biker estampado Rol", 25, 5, 0.97, "./media/images/bikerestampada2.png")

    listaDeProductosBikers.push(productoBikerA,productoBikerB,productoBikerC, productoBikerD)

    // Funcion para mostrar productos

function mostrarProductos(){
    listaDeProductosBikers.forEach((producto) => {

        const card = document.createElement("div");
        card.classList.add("card", "col-sm-4");

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const cardTitle = document.createElement("h5");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = `${producto.nombre}`;

        const cardPrecio = document.createElement("p");
        cardPrecio.classList.add('card-text');
        cardPrecio.textContent = `${producto.precio}`;

        const cardImg = document.createElement("img");
        cardImg.classList.add("card-img-top");
        cardImg.textContent = `${producto.img}`;

        const cardBotton = document.createElement("botton");
        cardBotton.classList.add("btn btn-outline-dark");
        cardBotton.textContent = 'Comprar' ;
        cardBotton.setAttribute('marcador', producto.id);
        cardBotton.addEventListener('click', anyadirProductoAlCarrito)

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardPrecio);
        cardBody.appendChild(cardImg);
        cardBody.appendChild(cardBotton);
        card.appendChild(cardBody);
        DOMbikers.appendChild(card);

    });
    DOM
}

mostrarProductos();


















/*   let precioTotalVenta = 0;
let cantidadComprada = 0 ;

function Producto (nombreProducto, precioProducto, stockProducto, descuentoProducto, imgValor){
    this.nombre = nombreProducto ;
    this.precio = parseFloat(precioProducto) ;
    this.stock = stockProducto ;
    this.descuento = descuentoProducto ;
    this.img = imgValor;
    this.venta = function (cantidadComprada){
        this.stock-= cantidadComprada;
        console.log ("El stock de  " + this.nombre  + " " + "es igual a: " + this.stock  )
    }
    this.calcularPrecio = function(precio, descuento){
        precioTotalVenta += parseFloat(cantidadComprada * precio * descuento);
    }
    this.stockInsuficiente = function(){
        alert("No tenemos stock suficiente de ese producto, puedes comprar " + this.stock + " unidades")
    }
}

const productoA = new Producto("calzas", 30, 10, 0.9)
const productoB = new Producto("tops", 20, 10, 0.9)
const productoC = new Producto("conjuntos deportivos", 50, 15, 0.95)

const productos =[productoA, productoB, productoC]

function compra (producto) {

    cantidadComprada = parseInt(prompt("Ingrese la cantidad de "+ producto.nombre + " que desea comprar")) ;

        if (cantidadComprada <= producto.stock){

            producto.venta(cantidadComprada)

            if (cantidadComprada > 3){
                producto.calcularPrecio(producto.precio, producto.descuento)
            }
            else{
                producto.calcularPrecio(producto.precio, 1)
            }
        }
        else{
            producto.stockInsuficiente();
            }
}

function ComprarProductos() {
    for( let i = 0; i < 1; i++){

        let nombreCompra = prompt("ingrese el nombre de producto que desea comprar: " + "\n1." + productoA.nombre + "\n2." + productoB.nombre + "\n3. " + productoC.nombre);

        let productoBuscado = productos.find ( x => x.nombre == nombreCompra.toLowerCase())

        if(productoBuscado){
            compra(productoBuscado)
        }
        else{
            alert("No tenemos ese producto")
        }
    }

}


alert( "Estos son nuestros productos: \n1.Calzas \n2.Tops \n3.Conjuntos deportivos ")
ComprarProductos()

let continuarCompra = prompt("Desea continuar comprando? ");
while(continuarCompra == "si"){
    for( let i = 0; i < 1; i++){
    ComprarProductos();
    continuarCompra = ""
}
}
alert("El precio de su compra es de: $ " + precioTotalVenta + "\nMuchas gracias! ")

*/

// AVISO PARA COMPRAR MAS PRODUCTOS

/* let pocoStock = productos.filter(producto => producto.stock <= 3 )

console.log("comprar mas productos: ")
console.log(pocoStock) */
//}
