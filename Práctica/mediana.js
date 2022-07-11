var lista = [];

let mediana;
function ordenamientoMenorMayor(lista)
{
    let num = lista.sort(function(a,b){
        return a - b;
      });

      return num;
}

function calcularMediaAritmetica(lista)
{
    let sumaLista = lista.reduce(function(a,b){
        return a + b;
      });

      const promedioLista = sumaLista / lista.length;
      return promedioLista;
}

function esPar(lista)
{
  if(lista.length % 2 === 0)
  {
     return true;
  }
  else{
    return false;
  }
}



function obtenerMediana(numeros)
{
  if(!Array.isArray(numeros))
  throw TypeError("El argumento debe ser un arreglo");

  if(!numeros.every( e => typeof e === 'number'))
  throw TypeError("Todos los elementos del arreglo deben ser números");

  numeros = numeros.sort((x,y) => x - y);
  let mitad = Math.floor(numeros.length / 2);

  return numeros.length % 2 == 1 ? numeros[mitad] : (numeros[mitad - 1] + numeros[mitad + 2]) / 2;
}




