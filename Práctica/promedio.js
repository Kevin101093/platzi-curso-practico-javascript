
const lista1 = [];

//Código normal consultado el array y sumando sus valores.
/*
function suma (lista1)
{
   
    let sumaLista = 0;

    for(let i = 0; i < lista1.length; i++)
    {
       sumaLista += lista1[i];
    }

    return sumaLista;
   
}
//Código con el método del array reduce para sumar y calcular el promedio
 */
function calcularMediaArimetica(lista1)
{
    let sumaLista = lista1.reduce(function (a,b){
        return a + b;
     });

     let promedio = sumaLista / lista1.length;
     return promedio;
}




