//Código para el cuadrado

console.group("Cuadrado");
// const ladoCuadrado = 5;
function perimetroCuadrado(ladoCuadrado)
{
     return ladoCuadrado * 4;
} 
function areaCuadrado(ladoCuadrado){
   return ladoCuadrado * ladoCuadrado;
} 
// console.log("El lado del cuadrado mide: "+ladoCuadrado + "cm");
// console.log("El perímetro del cuadrado es: "+perimetroCuadrado + "cm");
// console.log("El área del cuadrado es: "+areaCuadrado + "cm^2");
console.groupEnd();

//Código para el triángulo

console.group("Triángulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 4;
function perimetroTriangulo(lado1,lado2,base){
  return lado1 + lado2 + base;
} 
function areaTriangulo(base, altura){
   return (base * altura) / 2;
} 
// console.log("Los lados del triángulo miden: "+ladoTriangulo1 +"cm, "+ladoTriangulo2 +"cm, "+baseTriangulo +"cm");
// console.log("La altura del tríangulo mide: "+alturaTriangulo +"cm");
// console.log("El perímetro del triángulo es:  "+perimetroTriangulo +"cm");   
// console.log("El área del triángulo es:  "+areaTriangulo +"cm^2");   
console.groupEnd();

//Código para el círculo

console.group("Círculo");

//Radio
function radioCirculo(radio){
 return radio;
}
// console.log("El radio del círculo es: "+radioCirculo+"cm");

//Diámetro
function diametroCirculo(radioCirculo)
{
  return radioCirculo*2;
}
// console.log("El diametro  del círculo es: "+diametroCirculo+"cm");

//PI
const PI = Math.PI;
console.log("PI es: "+PI);

//Circuferencia
function perimetroCirculo(radio){
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
// console.log("El perímetro del círculo es: "+perimetroCirculo+"cm");

//Área
function areaCirculo(radio){
  
  return (radio * radio) * PI;
} 

// (radioCirculo * radioCirculo) * PI;
// console.log("El área del círculo es: "+areaCirculo+"cm^2");
console.groupEnd();


//Aquí va la interacción con HTML
function calcularPerimetroCuadrado()
{
   const input = document.getElementById("InputCuadrado");
   const value = input.value;


   const perimetro = perimetroCuadrado(value);
   alert(perimetro);

}
function calcularAreaCuadrado()
{
  const input = document.getElementById("InputCuadrado");
   const value = input.value;


   const area = areaCuadrado(value);

   alert(area);

}