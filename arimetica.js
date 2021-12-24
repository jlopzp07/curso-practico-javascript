function calcularMedia(lista) {
  // let sumaLista = 0;
  // for (let i = 0; i < lista.length; i++) {
  //   sumaLista = sumaLista + lista[i];
  // }
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

//Calcular mediana
const lista1 = [100, 4000000, 200, 500, 800];

lista1.sort(function (a, b) {
  return a - b;
});
const mitadLista = parseInt(lista1.length / 2);

function esPar(numero) {
  if (numero % 2 === 0) {
    // % modulo
    return true;
  } else {
    return false;
  }
}

let mediana;

if (esPar(lista1.length)) {
  const elemento1 = lista1[mitadLista - 1];
  const elemento2 = lista1[mitadLista];
  const media = calcularMedia([elemento1, elemento2]);
  mediana = media;
} else {
  mediana = lista1[mitadLista];
}

//Calcular moda
//const listaModa = [1, 2, 3, 1, 100, 2, 3, 4, 2, 2, 2, 1, 10, 1000];

function calcularModa(listaModa) {
  const listaModaCount = {}; //se convertirá el array en objeto
  listaModa.map(function (elemento) {
    if (listaModaCount[elemento]) {
      //si el elemento ya existe (true)
      listaModaCount[elemento] += 1;
    } else {
      listaModaCount[elemento] = 1;
    }
  });

  const listaArray = Object.entries(listaModaCount).sort(function (
    valorAcumulado,
    nuevoValor
  ) {
    return valorAcumulado[1] - nuevoValor[1];
  });

  const moda = listaArray[listaArray.length - 1];

  return moda;
}
