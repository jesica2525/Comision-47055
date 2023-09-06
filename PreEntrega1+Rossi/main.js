const buzo = 18500;
const pantalon = 20000;
const short = 10500;
const remera = 17000; 
const taza = 2500;
const tope = 50000
const desc = 20;
let suma = 0;

// Funciones
function validaSeleccion (seleccion){
    while ((isNaN(seleccion)) || (seleccion === null)|| (seleccion <= 0) || (seleccion>6)){
        if ((seleccion <=0) || (seleccion>6)) {
            alert("El numero ingresado no coincide con ningun producto")
        } else{
            alert("Debe Ingresar un numero");
        }
        seleccion = prompt("ROPA FUNEBRERA\n Selecciona que productos queres comprar: \n 1-Buzo ($18500) \n 2-Pantalon ($20000)\n 3-Short ($10500)\n 4-Remera ($17000)\n 5-Taza ($2500)\n 6-Salir \n\n SI SU COMPRA SUPERA LOS $50000 OBTENDRA UN 20% DE DESCUENTO")
    } 
}

function validaCantidad (cantidad){
    while ((isNaN(cantidad)) || (cantidad === null)) {
        alert("Debe Ingresar un numero");
        cantidad = parseInt(prompt("Ingrese la cantidad que quiere comprar"));
    } 
}

const calcularPrecio = (cantidad, producto) => cantidad*producto
const descuento = (suma) => suma*desc/100;


// Programa Principal
do{
    seleccion = prompt("ROPA FUNEBRERA\n Selecciona que productos queres comprar: \n 1-Buzo ($18500) \n 2-Pantalon ($20000)\n 3-Short ($10500)\n 4-Remera ($17000)\n 5-Taza ($2500)\n 6-Salir \n\n SI SU COMPRA SUPERA LOS $50000 OBTENDRA UN 20% DE DESCUENTO");
    validaSeleccion(seleccion);
    if (seleccion !== "6"){
        cantidad = parseInt(prompt("Ingrese la cantidad que quiere comprar"));
        validaCantidad (cantidad);
        switch (seleccion) {
            case "1":
                suma += calcularPrecio(cantidad, buzo);
                break;
            case "2":
                suma += calcularPrecio(cantidad, pantalon);
                break;
            case "3":
                suma += calcularPrecio(cantidad, short);
                break;
            case "4":
                suma += calcularPrecio(cantidad, remera);
                break;
            case "5":
                suma += calcularPrecio(cantidad, taza);
                break;               
            default:
                break;
        } 
    }              
} while (seleccion !== "6");

if (suma >= tope){
    total = suma-descuento(suma);
    alert(`La suma total de la compra es de $ ${suma}`)
    alert(`Aplicando el descuento por haber superado la suma de $50000, lo que debe abonar es $ ${total}`);
} else {
    alert(`La suma total de la compra es de $ ${suma}`)
}

alert("GRACIAS POR LA COMPRA! TE ESPERAMOS DE VUELTA FUNEBRERO")

