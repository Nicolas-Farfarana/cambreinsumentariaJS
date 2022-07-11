document.addEventListener("DOMContentLoaded", () => {
    
    fetch("misDatos.json")
     .then((resp) => console.log(resp))
     .then((data) => console.log(data))


  // CREAR PRODUCTOS

  class Producto {
    constructor(
      id,
      nombreProducto,
      precioProducto,
      divisa,
      stockProducto,
      descuentoProducto,
      imgValor
    ) {
      this.id = id;
      this.nombre = nombreProducto;
      this.precio = parseFloat(precioProducto);
      this.stock = stockProducto;
      this.divisa = divisa;
      this.descuento = descuentoProducto;
      this.src = imgValor;
      this.venta = function (cantidadComprada) {
        this.stock -= cantidadComprada;
        // console.log(
        //    "El stock de  " + this.nombre + " " + "es igual a: " + this.stock
        // );
      };
      this.calcularPrecio = function (precio, descuento) {
        precioTotalVenta += parseFloat(cantidadComprada * precio * descuento);
      };
      this.stockInsuficiente = function () {
        alert(
          "No tenemos stock suficiente de ese producto, puedes comprar " +
            this.stock +
            " unidades"
        );
      };
    }
  }

  const productosTopsLisos1 = new Producto(
    1,
    "Top Liso Black",
    20,
    "€",
    "./media/images/lisonegro.png"
  );
  const productosTopsLisos2 = new Producto(
    2,
    "Top Liso Pink",
    20,
    "€",
    "./media/images/lisorosa1.png"
  );
  const productosTopsLisos3 = new Producto(
    3,
    "Top Liso Fluor",
    20,
    "€",
    "./media/images/lisoverde.png"
  );
  const productosTopsLisos4 = new Producto(
    4,
    "Top Liso Grey",
    20,
    "€",
    "./media/images/topliso.png"
  );

  productosTopsLisos.push(
    productosTopsLisos1,
    productosTopsLisos2,
    productosTopsLisos3,
    productosTopsLisos4
  );

  // console.log(productosTopsLisos);

  //  CREAR CARD
  function Cards(identificador, productos) {
    const productoContainer = document.getElementById(identificador);

    for (const producto of productos) {
      const productoCardContainer = document.createElement("div");

      productoCardContainer.classList.add(
        "col-4",
        "mt-3",
        "d-flex",
        "justify-content-center"
      );

      productoCardContainer.innerHTML = `<div class="col">
                                            <div class="card h-100" style="width: 15rem;">
                                            <img src=${producto.src} class="card-img-top" alt=${producto.nombre}>
                                            <div class="card-body">
                                            <h5 class="card-title">${producto.precio}  ${producto.divisa}</h5>
                                            <p class="card-text">${producto.nombre}</p>
                                            <select class="form-select form-select-sm" aria-label=".form-select-sm example" >
                                            <option selected>Seleccione la talla</option>
                                            <option value="xs">XS</option>
                                            <option value="s">S</option>
                                            <option value="m">M</option>
                                            <option value="l">L</option>
                                            <option value="xl">XL</option>
                                            </select>
                                            <br>
                                            <a  class="btn btn-outline-dark btnsComprar" id=${producto.name}>Comprar</a>
                                            </div>
                                            </div>
                                            </div>`;

      productoContainer.appendChild(productoCardContainer);
    }
  }
  Cards("productosMallasBikersLisas", productosMallasBikersLisas);
  Cards("productosMallasBikersEstampadas", productosMallasBikersEstampadas);
  Cards("productosMallas34Liso", productosMallas34Liso);
  Cards("productosMallas34Estampado", productosMallas34Estampado);
  Cards("productosMallas34Combinado", productosMallas34Combinado);
  Cards("productosTopsLisos", productosTopsLisos);
  Cards("productosTopsEstampados", productosTopsEstampados);
  Cards("productosMallasLisas", productosMallasLisas);
  Cards("productosMallasEstampadas", productosMallasEstampadas);
  Cards("productoSudadera", productoSudadera);
  Cards("productoPantalones", productoPantalones);
});
