function Cards (identificador, productos){
    const bikerContainerLisas = document.getElementById (identificador)

    for (const producto of productos){
    
        const productoCardContainer = document.createElement('div');
    
        productoCardContainer.classList.add('col-4', 'mt-3', 'd-flex', 'justify-content-center');
    
        productoCardContainer.innerHTML =   `<div class="col">
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
                                            </div>`
    
        bikerContainerLisas.appendChild(productoCardContainer)
    }
    
}
Cards("productosBikersLisas",productosBikersLisas);
Cards("productosBikersEstampadas",productosBikersEstampadas);
Cards("producto34Liso",producto34Liso);
Cards("producto34Estampado",producto34Estampado);
Cards("producto34Combinado",producto34Combinado);