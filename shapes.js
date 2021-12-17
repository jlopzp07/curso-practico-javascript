//Código del cuadrado
console.group("Información cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

//Código del triángulo
console.group("Información triángulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulo3 = 4;
const alturaTriangulo = 5.5;
console.log(
  "Los lados del triángulo miden: " +
    ladoTriangulo1 +
    "cm, " +
    ladoTriangulo2 +
    "cm, " +
    ladoTriangulo3 +
    "cm"
);

console.log("La altura del triángulo es: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");
const areaTriangulo = (ladoTriangulo3 * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaCuadrado + "cm^2");
console.groupEnd();

//Código del circulo
console.group("Información círculo");
const radioCirculo = 5;
console.log("El radio del círculo es: " + radioCirculo + "cm");
const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es: " + diametroCirculo + "cm");
const pi = Math.PI;
console.log("Pi es: " + pi);
const perimetroCirculo = diametroCirculo * pi;
console.log("El perímetro del círculo es: " + perimetroCirculo + "cm");

const areaCirculo = pi * (radioCirculo * radioCirculo);
console.log("El área del círculo es: " + areaCirculo + "cm^2");
console.groupEnd;