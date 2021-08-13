/* esto corresponde al desafio anterior

let cantidad = 0;
let producto = `Añadiste Planta Monstera`;
let precio = 700;


function compraFinalizada() {
  alert(`Finalizaste la compra, te redirigiremos a seleccionar medio de pago`)
}

alert(producto)
let confirmar = confirm("Desea agregar un producto?")

while (confirmar) {
  cantidad++
  alert(`Seleccionaste Planta Monstera por ${cantidad} unidad/es a $${precio * cantidad}`)
  confirmar = confirm("Desea agregar un producto?")
}

compraFinalizada()


/*

//esta es la clase ya definitiva para carga en arrays // 

class producto{
  constructor (nombre,categoria,precio,disponible);{
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.disponible = disponible
  }
/* esto es para proximas entregas  
  cuotas(cantidad,interes){
    let valor = this.precio * interes ;
    alert(`El precio total en ${cantidad} cuota/s es de ${valor}, de ${valor/cantidad} por cuota);
  }
*/
/* elegirOtro(){
   alert(`Compraste ${this.nombre}, ¿deseas agregar otro producto?);
   let nuevoProducto = prompt("Seleccionar categoría del producto");
   this.categoria = nuevoProducto
   alert(`La nueva categoría es ${this.categoria});
 }
}


// para proxima reduccion de codigo
listaProductos.push(new producto("Ctenanthe","Plantas","$900","si"))
listaProductos.push(new producto("Dieffenbachia","Plantas","$750","si"))
listaProductos.push(new producto ("Monstera","Plantas","$1200","si"))

listaProductos.push(new producto ("Maceta de pie","Macetas","$2500","si"))
listaProductos.push(new producto ("Maceta de cerámica","Macetas","$3200","si"))
listaProductos.push(new producto ("Maceta de cerámica común","Macetas","$2000","no"))

listaProductos.push(new producto ("Fertilizante Terrafertil","Cuidado","$381","si"))
listaProductos.push(new producto ("Jabón potásico","Cuidado","$1020","si"))
listaProductos.push(new producto ("Fertifox","Cuidado","$320","no"))



//lista de productos
const producto1 = new producto ("Ctenanthe","Plantas","$900","si");
const producto2 = new producto ("Dieffenbachia","Plantas","$750","si");
const producto3 = new producto ("Monstera","Plantas","$1200","si");
const producto4 = new producto ("Maceta de pie","Macetas","$2500","si");
const producto5 = new producto ("Maceta de cerámica","Macetas","$3200","si");
const producto6 = new producto ("Maceta de cerámica común","Macetas","$2000","no");
const producto7 = new producto ("Fertilizante Terrafertil","Cuidado","$381","si");
const producto8 = new producto ("Jabón potásico","Cuidado","$1020","si");
const producto9 = new producto ("Fertifox","Cuidado","$320","no")


*/


class producto {
  constructor(nombre, categoria, precio, disponible) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.disponible = disponible;
  }
}

const producto1 = new producto("Ctenanthe", "Plantas", 900, "si");
const producto2 = new producto("Dieffenbachia", "Plantas", 750, "si");
const producto3 = new producto("Monstera", "Plantas", 1200, "si");


const carrito = []

let compra = confirm(`¿Deseas agregar una unidad?`)

while (compra) {

  const inicio = prompt("Escribí el número de la planta que deseás comprar : 1- Monstera 2-Dieffenbachia 3-Monstera")


  switch (inicio) {
    case "1":
      carrito.push(producto1);
      alert(`Agregaste ${producto1.nombre} por un valor de $${producto1.precio}`);
      compra = confirm(`¿Deseas agregar una unidad más?`);
      break;

    case "2":
      carrito.push(producto2);
      alert(`Agregaste ${producto2.nombre} por un valor de $${producto2.precio}`)
      compra = confirm(`¿Deseas agregar una unidad más?`);
      break;

    case "3":
      carrito.push(producto3);
      alert(`Agregaste ${producto3.nombre} por un valor de $${producto3.precio}`)
      compra = confirm(`¿Deseas agregar una unidad más?`);
      break;

    default:
      alert(`El número que ingresaste es incorrecto, por favor, repetí la acción`)
  }

}

function compraFinalizada() {
  let totalCompra = 0
  for (const producto of carrito) {
    totalCompra += producto.precio;
  }
  return totalCompra;
}

alert(`Tu compra total es de ${carrito.length} productos por un total de $${compraFinalizada()}`)