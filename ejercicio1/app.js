let tamaño_camion = prompt("ingrese el tamaño del camion");
let espacio_seguridad = 30;
let utilizable = tamaño_camion - espacio_seguridad;

function calcular(array){
    let results = [];
    let results2 = [];
    for (var i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            results.push(array[i] + array[j]);
            results2.push (`${array[i]}  ${array[j]}`);
        }
    }
    let indice = results.indexOf(utilizable);
    document.write("El tamaño del camion es de: " + tamaño_camion + "<br>")
    document.write("El espacio utilizable es de: " + utilizable + "<br>")
    document.write("El espacio de seguridad es de: " + espacio_seguridad + "<br>" + "<br>")
    document.write("La suma de los paquetes: " + results2[indice] + " es de: " + results[indice] + " lo que corresponde al espacio utilizable," +  " lo que pertmite dejar las " + espacio_seguridad + " unidades de espacio requeridas" + "<br>");
}
calcular([10,60,40,35,20]);
