//esto corresponde a la hoja html PLANTAS

class producto {
  constructor(id,nombre, categoria, precio, disponible, imagenes, botonComprar) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.disponible = disponible;
    this.imagenes = imagenes;
    this.botonComprar = botonComprar;
  }
}

const producto1 = new producto("1","Ctenanthe", "Plantas", 900, "si", "../img/ctenanthe2.webp");
const producto2 = new producto("2","Dieffenbachia", "Plantas", 750, "si", "../img/dieffenbachia.webp");
const producto3 = new producto("3","Monstera", "Plantas", 1200, "si", "../img/monstera3.webp");


const productos = [producto1, producto2, producto3]

const carrito = []


//esta es la funcion que identifica el id del producto seleccionado y lo agrega a la lista
const aniadirCarrito = (evento) =>{
  
  const objetoIdentificado = productos.find(e=> e.id == evento.target.id)

  carrito.push(objetoIdentificado)

  aniadirATabla(objetoIdentificado)

    
}

//estos son los productos creados dinamicamente

let productosPlantas = document.getElementById("productosPlantas")

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

  botonComprar.addEventListener("click", aniadirCarrito)

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
  img1.setAttribute("class", "w-100")
  botonComprar.setAttribute("class", "btn btn-light")
  botonComprar.setAttribute("class", "col-lg-4 row-sm-1")
  botonComprar.setAttribute("class", "buttonC")

   

})




// estos son los campos dinamicos de la tabla que hara las veces de carrito

const aniadirATabla = (productoAniadido) => {
   

  
  let ObjToJson = JSON.stringify(productoAniadido)
  localStorage.setItem("productos", ObjToJson)

  let tabla = document.getElementById("productosListados")

  let tr1 = document.createElement("tr")

  let td1 = document.createElement("td")
  td1.textContent = productoAniadido.nombre

  let td2 = document.createElement("td")
  td2.textContent = productoAniadido.categoria

  let td3 = document.createElement("td")
  td3.textContent = productoAniadido.precio

  let td4 = document.createElement("td")
  let btnBorrar = document.createElement("button")
  btnBorrar.textContent = "Quitar"
  btnBorrar.addEventListener("click",eliminarProducto)


  td4.appendChild(btnBorrar)
  tr1.appendChild(td1)
  tr1.appendChild(td2)
  tr1.appendChild(td3)
  tr1.appendChild(td4)
  tabla.appendChild(tr1)

  btnBorrar.setAttribute("class","btnBorrar")
  //btnBorrar.setAttribute(`onclick`,`eliminarProducto`)
  

}


const eliminarProducto = (productoAniadido) => {
  
  let tabla = document.getElementById("productosListados")
 
  tabla.deleteRow(productoAniadido.target.fatherElement)

}


// let allProducts = productoAniadido.filter(e => e.id != id)

 




////////////////////////////////////////////

//para que no imprima el listado es  let ultimoElemento = comprar.lastElementChild while(ultimoElemento) comprar.deleteElement(ultimoElemento) let ultimoElemento = comprar.lastElementChild

/*
//esta es la funcion para el evento
const comprar = () => {

}
///este evento tiene que estar dentro del FOREACH para que cada vez que se clickee el boton, se cree el producto en la tabla
botonComprar.addEventListener("click", comprar)


//esto corresponde a la hoja html MACETAS
/* CODIGO COMENTADO PARA PROXIMOS DESAFIOS
  class maceta {
  constructor(nombre, categoria, precio, disponible,imagenes, botonComprar) {
  this.nombre = nombre;
  this.categoria = categoria;
  this.precio = precio;
  this.disponible = disponible;
  this.imagenes = imagenes;
  this.botonComprar = botonComprar;
}}

  const maceta1 = new maceta("Maceta de pie", "Macetas", 2500 , "si", "../img/macetapie.webp");
  const maceta2 = new maceta("Maceta ceramica", "Macetas", 3200, "si","../img/macetaceramica.jpg");
  const maceta3 = new maceta("Maceta de cerámica común", "Macetas", 2000, "si","../img/macetaceramica2.jpg");

  const macetas = [maceta1,maceta2,maceta3]

  let productosMacetas = document.getElementById("productosMacetas")

  macetas.forEach(e =>  {
  let div2 = document.createElement("div")

  let img2 = new Image(90,350)
  img2.src = e.imagenes

  let h32 = document.createElement("h3")
  h32.textContent = e.nombre

  let p2 = document.createElement("p")
  p2.textContent = e.categoria

  let h42 = document.createElement("h4")
  h42.textContent = e.precio

  let botonComprar2 = document.createElement("button")
  botonComprar2.textContent = "Comprar"

  productosPlantas.appendChild(div2)
  div2.appendChild(img2)
  div2.appendChild(h32)
  div2.appendChild(p2)
  div2.appendChild(h42)
  div2.appendChild(botonComprar2)

  div2.setAttribute("class","div1")
  h32.setAttribute("class","producto")
  p2.setAttribute("class","detalle")
  h42.setAttribute("class", "precio")
  img2.setAttribute("class","img1")
  img2.setAttribute("class","w-100")
  botonComprar2.setAttribute("class","btn btn-light")
  botonComprar2.setAttribute("class","col-lg-4 row-sm-1")
  botonComprar2.setAttribute("class","buttonC")

})
*/


