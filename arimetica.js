function calcularMedia (lista) {
  // let sumaLista = 0;
  // for (let i = 0; i < lista.length; i++) {
  //   sumaLista = sumaLista + lista[i];
  // }
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  )
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

const lista1 = [
  100,
  200,
  500,
  800,
  4000000,
];

const mitadLista = parseInt(lista1.length / 2);

function esPar (numero) {
  if (numero % 2 === 0) {// % modulo
    return true;
  } else {
    return false;
  }
}

let mediana;

if (esPar(lista1.length)) {
  const elemento1 = lista1[mitadLista - 1];
  const elemento2 = lista1[mitadLista];
  const media = calcularMedia([
    elemento1,
    elemento2,
  ]);
  mediana = media;
} else {
  mediana = lista1[mitadLista] ;
}