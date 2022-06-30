document.addEventListener('DOMContentLoaded', () => {


    //   PRODUCTOS  //

    const productosTopsLisos = [];
    const productosTopsEstampados = [];
    const productosMallasBikersLisas = [];
    const productosMallasBikersEstampadas = [];
    const productosMallas34Liso = [];
    const productosMallas34Estampado = [];
    const productosMallas34Combinado = [];
    const productosMallasLisas = [];
    const productosMallasEstampadas = [];
    const productoSudadera = [];
    const productoPantalones = [];


    const DOMbikers = document.getElementById('bikers')



    class Producto{
        
        constructor (id, nombreProducto, precioProducto, divisa, stockProducto, descuentoProducto, imgValor){
            this.id = id ;
            this.nombre = nombreProducto ;
            this.precio = parseFloat(precioProducto) ;
            this.stock = stockProducto ;
            this.divisa = divisa;
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
    }


    const productosTopsLisos1 = new Producto (1,"Top Liso Black",20,"€", "./media/images/lisonegro.png" )
    const productosTopsLisos2 = new Producto (2,"Top Liso Pink",20,"€", "./media/images/lisorosa1.png" )
    const productosTopsLisos3 = new Producto (3,"Top Liso Fluor",20,"€", "./media/images/lisoverde.png" )
    const productosTopsLisos4 = new Producto (4,"Top Liso Grey",20,"€", "./media/images/topliso.png" )


    productosTopsLisos.push(productosTopsLisos1,productosTopsLisos2,productosTopsLisos3,productosTopsLisos4)

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

//mostrarProductos();

})
