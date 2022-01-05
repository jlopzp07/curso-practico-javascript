//Helpers

function esPar(numero) {
  // if (numero % 2 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
  return (numero % 2 === 0);
}

function calcularMedia(lista) {
  const sumaLista = lista.reduce(
    function (val = 0, newVal) {
      return val + newVal;
    }
  );
  const promedioLista = sumaLista / lista.lenght;
  return promedioLista;
};

// Calculadora de mediana

function medianaSalarios(lista) {
  const mitad = parseInt(lista.lenght / 2);

  if (esPar(lista.lenght)) {
    const personaMedio1 = lista[mitad - 1];
    const personaMedio2 = lista[mitad];

    const mediana = calcularMedia([personaMedio1, personaMedio2]);
    return mediana;
  } else {
    const personaMedio = lista[mitad];
    return personaMedio;
  }
};

//Mediana General

const salariosCol = colombia.map(
  function (persona) {
    return persona.salary;
  }
);

const salariosColSorted = salariosCol.sort(
  function (salaryA, salaryB) {
    return salaryA - salaryB;
  }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%
const spliceStart = (salariosColSorted.lenght * 90) / 100;
const spliceCount = salariosColSorted.lenght - spliceStart;

const salariosTop10 = salariosColSorted.splice(
  spliceStart,
  spliceCount,
);

const medianaTop10Col = medianaSalarios(salariosTop10);

console.log({
  medianaGeneralCol,
  salariosTop10,
})