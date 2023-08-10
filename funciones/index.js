function conversorLongitud(pulg){
    return pulg * 2.54;
}

function toURL(text) {
    return `http://www.${text}.com`;
}
function exclamation(text) {
    return `${text}!`;
}
function dogsAge(age) {
    return age * 7;
}
function horaDeTrabajo(sueldo) {
    return sueldo/ 40;
}
function calculadoraIMC(altura, peso) {
    return peso / (altura * altura) 
}

function enMayuscula(text) {
    if(typeof text === 'string') {
        return text.toUpperCase()
    } else {
        return 'No es un string'
    }
}

function tipoDeDato(value) {
    return typeof value
}

function circunferencia(radio) {
    return 2* Math.PI() * radio ;
}

console.log(
    (12 % 4 == 0) && (12 != 4) )

let frase = 'Breaking bad rules!'
frase.slice(-10)