


// este es el array del carrito

carrito = []

// estos son los campos dinamicos de la tabla que hara las veces de carrito

const aniadirATabla = (productoAniadido) => {


    let ObjToJson = JSON.stringify(productoAniadido)
    localStorage.setItem("macetas", ObjToJson)

    let tr1 = $("#productosListados").append(`<tr><td>${productoAniadido.nombre}</td>
      <td>${productoAniadido.categoria}</td>
      <td>${productoAniadido.precio}</td>
      <td><button class= "btnBorrar" id="btnBorrar${productoAniadido.id}" onClick="eliminarProducto(this)">Quitar</button></td>
      </tr>`)

}



// esta es la funcion de eliminar producto seleccionado

const eliminarProducto = (productoAniadido) => {

    //let tabla = $("#productosListados")
    productoAniadido.parentElement.parentElement.remove() 
}


// aca se aplica ajax al proyecto donde pushea elementos traidos de json a la tabla



const url = "./productos.json"
const clickButton = (id) => {

  $.get(url, (respuesta, estado)=>{

      if (estado === "success") {

          const a = respuesta.find(e => e.id == id)
          carrito.push(a)
          aniadirATabla(a)
      }

  })

}

// estos son los elementos traidos desde JSON
$.get(url, (respuesta, estado)=>{

    if (estado === "success") {

        respuesta.forEach (e=> {
          
        $("#productosMacetas").append(`
        <div class="div1">
        <br>
        <img class="img1" src=${e.img}></img>
        <h3 class="producto">${e.nombre}</h3>
        <p class="detalle">${e.categoria}</p>
        <h4 class="precio">${e.precio}</h4>
        <button class="buttonC" id = ${e.id} onClick="clickButton(${e.id})">Comprar</button>
        <br>
        </div>
        `)

        })
    }

})


////esta es la funcion para compra finalizada

$("#totalCompra").on(`click`, ()=> {
    totalCost = 0
    let filas = $("#productosListados")[0].children
    for (let item of filas) {
      totalCost += parseFloat(item.children[2].textContent)
    }
    Swal.fire(`<p class="campos">El total de tu compra es $${totalCost}, ¿deseas continuar?</p>`)
  });



