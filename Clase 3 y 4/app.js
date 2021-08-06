let cantidad = 0;
let producto = `Añadiste Planta Monstera`;
let precio = 700 ;


alert(producto)
  let confirmar = confirm("Desea agregar un producto?")

while(confirmar) {
  cantidad++
  alert(`Seleccionaste Planta Monstera por ${cantidad} unidad/es a $${precio*cantidad}`)
  confirmar = confirm("Desea agregar un producto?")
}
alert(`Finalizaste la compra, te redirigiremos a seleccionar medio de pago`)