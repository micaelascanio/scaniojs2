


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
        <img class="img1" src=${e.img}></img>
        <h3 class="producto">${e.nombre}</h3>
        <p class="detalle">${e.categoria}</p>
        <h4 class="precio">${e.precio}</h4>
        <button class="buttonC" id = ${e.id} onClick="clickButton(${e.id})">Comprar</button>
        </div>
        `)

        })
    }

})




$("#totalCompra").on(`click`, ()=> {
    let suma = 0;
    productoAniadido.precio.each(()=>{
       suma += parseFloat($(this).val());
       
});

})


/*

temrinar de crear la funcion


const compraFinalizada = funcion de suma de precios de los productos seleccionados e.precio + e.precio

// este es el alert de sweetalert
if(Swal.fire('El total de tu compra es ${compraFinzalida}, ¿deseas continuar?')){
    $("#totalCompra").append(<tr>compraFinalizada</tr>)
}

let precioTotal = ${e.precio}
compraFinalizada = precioTotal++



///// esta es la suma total
$("#totalCompra").on(`click`, (${})=> {
    let suma = 0;
aniadirTabla.precio.each(()=>{
       suma += parseFloat($(this).val());
});

})



let suma = 0;
aniadirTabla.precio.each(()=>{
       suma += parseFloat($(this).val());
});

*/

