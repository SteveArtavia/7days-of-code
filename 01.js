let numeroUno = 1;
let stringUno = "1";

let numeroTreinta = 30;
let stringTreinta = "30";

let numeroDiez = 10;
let stringDiez = "10";

if(numeroUno == stringUno){
    console.log(`Las variables numeroUno (${numeroUno}) y stringUno (${stringUno}) tienen el mismo valor, pero diferente tipo.`);
} else {
    console.log("Las variables numeroUno y stringUno no tienen el mismo valor");
}

if(numeroTreinta == stringTreinta){
    console.log("Las variables numeroTreinta y stringTreinta tienen el mismo valor pero diferente tipo de dato");
}else{
    console.log("Las variables no son del mismo tipo");
}

if(numeroDiez == stringDiez){
    console.log("Las variables tienen el mismo valor pero diferente tipo de dato.");
}else{
    console.log("Las variables no tienen el mismo tipo de dato");
}