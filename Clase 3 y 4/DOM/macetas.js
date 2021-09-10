


// este es el array del carrito 

carrito = []

// estos son los campos dinamicos de la tabla que hara las veces de carrito

const aniadirATabla = (productoAniadido) => {



    let ObjToJson = JSON.stringify(productoAniadido)
    localStorage.setItem("macetas", ObjToJson)

   // let tabla = $("#productosListados")


    let tr1 = $("#productosListados").append("<tr></tr>")


    let td1 = tr1.append(`<td>${productoAniadido.nombre}</td>`)
    

    let td2 = tr1.append(`<td>${productoAniadido.categoria}</td>`)


    let td3 = tr1.append(`<td>${productoAniadido.precio}</td>`)


    let td4 = tr1.append(`<td></td>`)


    let btnBorrar = td4.append(`<button class= "btnBorrar">Quitar</button>`)

}

// esta es la funcion de eliminar producto seleccionado 

const eliminarProducto = (productoAniadido) => {

    //let tabla = $("#productosListados")

    $("#productosListados").deleteRow(productoAniadido.target.fatherElement) //prorbar con childElement

}


// aca se aplica ajax al proyecto 


//let productosMacetas = $("#productosMacetas")

const url = "./productos.json"


$.get(url, (respuesta, estado)=>{

    if (estado === "success") {

        respuesta.forEach (e=> {
        $("#productosMacetas").append(`
        <div class="div1">
        <img class="img1" src=${e.img}></img>
        <h3 class="producto">${e.nombre}</h3>
        <p class="detalle">${e.categoria}</p>
        <h4 class="precio">${e.precio}</h4>
        <button class="buttonC" id = ${e.id}>Comprar</button>
        </div>
        `)
            
        })
    }

    $(document).ready(function(){

    $(document).on(`click`,$(`.buttonC`),(e)=>{
        
    
            const objetoIdentificado = url.find(e => e.id == evento.target.id)
        
            carrito.push(objetoIdentificado)
        
            aniadirATabla(objetoIdentificado)

    })
})})
   

    
        

/*

temrinar de crear la funcion


const compraFinalizada = funcion de suma de precios de los productos seleccionados e.precio + e.precio 

// este es el alert de sweetalert 
if(Swal.fire('El total de tu compra es ${compraFinzalida}, ¿deseas continuar?')){
    $("#totalCompra").append(<tr>compraFinalizada</tr>)
}


*/
