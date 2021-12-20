const precioOriginal = 796112.95;
const descuento = 20;

function calcularPrecioConDescuento(precio, descuento) {
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

function calculateDiscountCoupon() {
  const coupons = [
    {
      name: "CuponPlatzi20",
      discount: 20,
    },
    {
      name: "CuponPlatzi25",
      discount: 25,
    },
    {
      name: "CuponPlatzi30",
      discount: 30,
    },
    {
      name: "CuponPlatzi50",
      discount: 50,
    },
  ];

  const userCouponInput = document.getElementById("coupon").value;
  const couponValid = coupons.find(function (coupon) {
    //se retorna del array coupons el valor de coupon.name
    return coupon.name === userCouponInput;
  });

  if (!couponValid) {
    finalDiscountPrice.innerText =
      "El cupón ingresado no es válido! Por favor intenta nuevamente.";
  } else {
    const discount = couponValid.discount;
    const originalPrice = document.getElementById("originalPrice").value;
    const finalPrice = (originalPrice * (100 - discount)) / 100;
    finalDiscountPrice.innerText =
      "El precio final con el cupón " + userCouponInput + " es $" + finalPrice;
  }
}
