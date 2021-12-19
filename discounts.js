const precioOriginal = 796112.95;
const descuento = 20;

function calcularPrecioConDescuento (precio, descuento) {
  const porcentajeDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajeDescuento) / 100;  

  return precioConDescuento;
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajeDescuento,
//     precioConDescuento
// });