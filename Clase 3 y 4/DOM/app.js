    class producto {
    constructor(nombre, categoria, precio, disponible,imagenes) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.disponible = disponible;
    this.imagenes = imagenes;
  }
}

    const producto1 = new producto("Ctenanthe", "Plantas", 900, "si","../img/ctenanthe2.webp");
    const producto2 = new producto("Dieffenbachia", "Plantas", 750, "si","../img/dieffenbachia.webp");
    const producto3 = new producto("Monstera", "Plantas", 1200, "si","../img/monstera3.webp");

    const productos = [producto1,producto2,producto3]

    
    let productosPlantas = document.getElementById("productosPlantas")


    productos.forEach(e =>  {
    let div1 = document.createElement("div")

    let img1 = new Image(150,350)
    img1.src = e.imagenes 

    let h31 = document.createElement("h3")
    h31.textContent = e.nombre

    let p1 = document.createElement("p")
    p1.textContent = e.categoria

    let h41 = document.createElement("h4")
    h41.textContent = e.precio
    
    productosPlantas.appendChild(div1)
    div1.appendChild(img1)
    div1.appendChild(h31)
    div1.appendChild(p1)
    div1.appendChild(h41)

    div1.setAttribute("class","div1")
    h31.setAttribute("class","producto")
    p1.setAttribute("class","detalle")
    h41.setAttribute("class", "precio")
    img1.setAttribute("class","img1")
    
})



      