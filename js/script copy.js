fetch('misDatos.json')
  .then(response => response.json())
  .then(data => console.log(data));

document.addEventListener("DOMContentLoaded", () => {
    
  

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
        console.log(
            "El stock de  " + this.nombre + " " + "es igual a: " + this.stock );
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

  

  //  FUNCION MOSTRAR PRODUCTOS
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
                                            <img src=${producto.src} class="card-img-top img" alt=${producto.nombre}>
                                            <div class="card-body">
                                            <h5 class="card-title precio">${producto.precio}  ${producto.divisa}</h5>
                                            <p class="card-text nombre">${producto.nombre}</p>
                                            <select class="form-select form-select-sm" aria-label=".form-select-sm example" >
                                            <option selected>Seleccione la talla</option>
                                            <option value="xs">XS</option>
                                            <option value="s">S</option>
                                            <option value="m">M</option>
                                            <option value="l">L</option>
                                            <option value="xl">XL</option>
                                            </select>
                                            <br>
                                            <button class="btn btn-outline-dark btnsComprar" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
                                            aria-controls="offcanvasScrolling">Comprar</button>
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


  // Evento para añadir un producto al carrito de la compra
  
  let carrito = {};

  const addProductoAlCarritoBtn = document.querySelectorAll('.btnsComprar')
  addProductoAlCarritoBtn.forEach(addProductoBtn => {
    addProductoBtn.addEventListener('click', addProductoClicked)
  })
  
  const botonComprar = document.querySelector('.comprarBoton')
  botonComprar.addEventListener('click', comprarBotonClicked);

  const modalCarrito = document.querySelector('.shoppingCartItemsContainer');


  function addProductoClicked(event){
    
    const button = event.target ;
    const item = button.closest('.card')
    const itemNombre = item.querySelector('.nombre').textContent;
    const itemPrecio = item.querySelector('.precio').textContent;
    const itemImg = item.querySelector('.img').src;
    
    addItemAlCarrito(itemNombre, itemPrecio, itemImg);

  }

  function addItemAlCarrito(itemNombre, itemPrecio, itemImg){

    const nombreProducto = modalCarrito.getElementsByClassName('carritoItemNombre')
    
    for (let i = 0 ; i< nombreProducto.length ; i ++){
      if(nombreProducto[i].innerText === itemNombre){
        const cantidadProducto = nombreProducto[i].parentElement.parentElement.parentElement.querySelector('.cantidadItemCompra');
        cantidadProducto.value++ ;
        totalCarritoCompra();
        return;
      }

    }


    const itemCarrito = document.createElement('div');
    itemCarrito.innerHTML = `
    <div class="row itemCompraCarrito">
          <div class="col-6">
              <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                  <img src=${itemImg} class="shopping-cart-image">
                  <h7 class="shopping-cart-item-title carritoItemNombre text-truncate ml-3 mb-0">${itemNombre}</h7>
              </div>
          </div>
          <div class="col-3">
              <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                  <p class="item-price mb-0 precioItemCarrito">${itemPrecio}</p>
              </div>
          </div>
          <div class="col-3">
              <div
                  class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                  <input class="shopping-cart-quantity-input cantidadItemCompra" type="number"
                      value="1">
                  <button class="btn btn-danger buttonDelete" type="button">X</button>
              </div>
          </div>
      </div>`;

      modalCarrito.append(itemCarrito);

      itemCarrito
      .querySelector('.buttonDelete')
      .addEventListener('click',borrarItemCarrito);
      itemCarrito
      .querySelector('.cantidadItemCompra')
      addEventListener('change',cantidadCompraCarrito)
      
      totalCarritoCompra();
  }

  function totalCarritoCompra(){
    let total = 0;
    const totalCompra = document.querySelector('.carritoTotal');
    const itemsCompraCarrito =document.querySelectorAll('.itemCompraCarrito');
    itemsCompraCarrito.forEach(itemCompraCarrito => {
      const compraPrecioItemCarritoElemento = itemCompraCarrito.querySelector('.precioItemCarrito');
      const compraPrecioItemCarrito = Number( compraPrecioItemCarritoElemento.textContent.replace('€',''));
      const cantidadItemCompraElemento = itemCompraCarrito.querySelector('.cantidadItemCompra');
      const cantidadItemCompra = Number (cantidadItemCompraElemento.value) ; 
      total = total + compraPrecioItemCarrito * cantidadItemCompra;

    })
    totalCompra.innerHTML= `${total.toFixed(2)} €`
  }

  function borrarItemCarrito(event){
    const botonBorrarItem = event.target
    botonBorrarItem.closest('.itemCompraCarrito').remove();
    totalCarritoCompra();
  }
      
  function cantidadCompraCarrito(event){
    const botonCantidadCarrito = event.target
    if (botonCantidadCarrito.value <= 0){
      botonCantidadCarrito.value = 1;
      }
      totalCarritoCompra();
  }

  function comprarBotonClicked (){
    if (modalCarrito != ''){
      Swal.fire({
        title: 'Muchas gracias por tu compra',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
    })
  }
    modalCarrito.innerHTML = '';
    totalCarritoCompra();
  }
  
    
})




