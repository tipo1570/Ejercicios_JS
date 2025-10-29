let nombre = ("Nicolas");
let edad = 22;
let esEstudiante = true;

let sinValor ;
let valorNulo = null;

//---------------------------------------

let nacimiento = prompt("Ingrese su año de nacimiento: ");
const año = 2025  
let edad2 = nacimiento - año


let numero = Number(prompt("ingrese el primer numero")); 
let numero2 = Number(prompt("ingrese el segundo numero")); 
let salida = numero + numero2;
console.log(salida);


//---------------------------------------

let edad3 = Number(prompt("Ingrese su edad: "))

if (edad3 >= 18) {
  console.log("Eres mayor de edad puedes entrar");
} else{
  console.log("No puedes entrar");
} 

numero03 = Number(prompt("Digite el numero: "))

if (numero03 >0) {
  console.log("Es positivo");
} else if (numero03 < 0) {
  console.log("Es negativo");
} else {
  console.log("Es 0 ");
}

//---------------------------------------

let numero7 = Number(prompt("Digita un numero: "));
let contar = 1;
while (contar <= numero){
    console.log(contar);
    contar = contar + 1;
}

let intento = 1 
let password = (12345)
while (password != intento){
     intento = prompt("Digite su clave")
}
console.log("Contraseña correcta");


//---------------------------------------


lista [1,2,3,4,5,5,6,7,8,9,10];
for (let numerolis of lista){
    console.log(lista);
}


opc1 = Number(prompt("Digite un numero: "));
for (let tabla of opc1){
    console.log(lista * opc1 );
}
