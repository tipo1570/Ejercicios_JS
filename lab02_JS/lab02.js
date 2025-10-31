//Propinas
const prompt = require("prompt-sync")();
function propinas(){
    let subtotal = Number(prompt("Digite el valor del subtotal de la cuenta: "));
    let total = (subtotal*0.15);
    total = total + subtotal;
    console.log("El subtotal de la cuenta es ", subtotal
        ,"El total de la cuenta es ", total
    );
}

propinas (); 

//-------------------------------------------------------------------------------
//Contrase;a
let positivo = true
let negativo = false

let clave = ("123456Ab");
function registro (){
    let intento = prompt("Digite su clave: ");
    if (intento == clave){
        console.log("Su clave es: ", positivo);
    
    }else{
        console.log("Su clave es: ",negativo);
    }

}

//-------------------------------------------------------------------------------
//Buscar el producto

const inventario = [
{ nombre: "Camisa", precio: 20 },
{ nombre: "Zapatos", precio: 50 }
];

function buscarProducto(){
    
}