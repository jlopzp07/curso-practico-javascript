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

function calculateDiscount() {
  const price = document.getElementById("inputPrice");
  const valuePrice = price.value;
  const discount = document.getElementById("inputDiscount");
  const valueDiscount = discount.value;

  const totalDiscount = 100 - valueDiscount;
  const totalPrice = (valuePrice * totalDiscount) / 100;
  const result = document.getElementById("finalPrice");
  result.innerText = "El precio final con descuento es $" + totalPrice; 

}