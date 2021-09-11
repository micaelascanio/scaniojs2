
/******************************
 *  ENTIDAD
 *****************************/





 class producto {
  constructor(id,nombre, categoria, precio, imagenes, botonComprar) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.imagenes = imagenes;
    this.botonComprar = botonComprar;
  }
}





/******************************
 *  VARIABLES Y ARRAYS
 *****************************/





 const producto1 = new producto("1","Ctenanthe", "Plantas", 900, "../img/ctenanthe2.webp");
 const producto2 = new producto("2","Dieffenbachia", "Plantas", 750, "../img/dieffenbachia.webp");
 const producto3 = new producto("3","Monstera", "Plantas", 1200,"../img/monstera3.webp");
 
 
 const productos = [producto1, producto2, producto3]

 carrito = []

 let productosPlantas = document.getElementById("productosPlantas")

 const url = "./productos.json"





/******************************
 *  FUNCIONES
 *****************************/





//Funcion de añadir productos a la tabla (carrito)

const aniadirATabla = (event) => {

  let productoAniadido = productos.find(p => p.id == event.target.id)

    let ObjToJson = JSON.stringify(productoAniadido)
    localStorage.setItem("productos", ObjToJson)

    let tr1 = $("#productosListados").append(`<tr><td>${productoAniadido.nombre}</td>
      <td>${productoAniadido.categoria}</td>
      <td>${productoAniadido.precio}</td>
      <td><button class= "btnBorrar" id="btnBorrar${productoAniadido.id}" onClick="eliminarProducto(this)">Quitar</button></td>
      </tr>`)

}



//Funcion de eliminar producto seleccionado

const eliminarProducto = (productoAniadido) => {

    productoAniadido.parentElement.parentElement.remove() 
}


//Funcion para crear productos dinamicamente

productos.forEach(e => {
  let div1 = document.createElement("div")

  let img1 = new Image(150, 350)
  img1.src = e.imagenes

  let h31 = document.createElement("h3")
  h31.textContent = e.nombre

  let p1 = document.createElement("p")
  p1.textContent = e.categoria

  let h41 = document.createElement("h4")
  h41.textContent = e.precio

  let botonComprar = document.createElement("button")
  botonComprar.textContent = "Comprar"
  botonComprar.id = e.id

  botonComprar.addEventListener("click", aniadirATabla)

  productosPlantas.appendChild(div1)
  div1.appendChild(img1)
  div1.appendChild(h31)
  div1.appendChild(p1)
  div1.appendChild(h41)
  div1.appendChild(botonComprar)

  div1.setAttribute("class", "div1")
  h31.setAttribute("class", "producto")
  p1.setAttribute("class", "detalle")
  h41.setAttribute("class", "precio")
  img1.setAttribute("class", "img1")
  botonComprar.setAttribute("class", "btn btn-light")
  botonComprar.setAttribute("class", "col-lg-4 row-sm-1")
  botonComprar.setAttribute("class", "buttonC")

   

})


//Funcion de compra finalizada

$("#totalCompra").on(`click`, ()=> {
  totalCost = 0
  let filas = $("#productosListados")[0].children
  for (let item of filas) {
    totalCost += parseFloat(item.children[2].textContent)
  }
  Swal.fire(`<p class="campos">El total de tu compra es $${totalCost}, ¿deseas continuar?</p>`)
});





/******************************
 *  PETICIONES
 *****************************/





//Agrega los productos del JSON a la tabla

const clickButton = (id) => {

  $.get(url, (respuesta, estado)=>{

      if (estado === "success") {

          const a = respuesta.find(e => e.id == id)
          carrito.push(a)
          aniadirATabla(a)
      }

  })

}

// Elementos traidos desde el JSON

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








