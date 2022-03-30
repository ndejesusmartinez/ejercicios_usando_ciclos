let denominaciones = [5,10,20]
let caja = 0;
let helado = 5;

function calcular(array){

  for (var i = 0; i <array.length; i++) {
    if (array[i]===helado) {
      document.write("helado vendido, no requiere de vuelto" +"==> S"+ "<br>")
      caja += array[i]
    }else{
      if (array[i]!=helado) {
        let valor = array[i]-helado
        if(valor>caja){
          document.write("No se puede dar vueltos a todos los clientes ==> N")
        }else{
          document.write("helado vendido, su vuelto es de: " + valor + "==> S" + "<br>" )
        }
      }
    }
}
}

calcular([5,5,5,10,20])
