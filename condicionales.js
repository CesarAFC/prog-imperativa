let edad = 20;

if(edad < 0) console.log('Error, edad invalida. Por favor ingrese un numero valido');

if(edad >= 21) {
    console.log('Bienvenido, felicidades por llegar a la mayoria de edad.');
} else if(edad <18) {
    console.log("No puede pasar al bar");
} else {
    console.log("Puede pasar al bar, pero no puede tomar alcohol.")
}

if(edad % 2 == 0) console.log("¿Sabías que tu edad es impar?");


function totalAPagar(vehiculo, litrosConsumidos) {
    let precioPorLitro = 0;
    if(vehiculo === 'coche') {
        precioPorLitro = 86;
    } else if(vehiculo === 'moto') {
        precioPorLitro = 70;
    } else {
        precioPorLitro = 55;
    }

    let resultado = litrosConsumidos * precioPorLitro;

    if (litrosConsumidos <= 25) {
        return resultado + 50;
    } else {
        return resultado + 25;
    }

}
console.log(totalAPagar('coche', 10))
console.log(totalAPagar('moto', 30))
console.log(totalAPagar('autobus', 40))
console.log(totalAPagar('coche', 50))

function sandwiches(base, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
    let total = 0;

    if(base === 'pollo') {
        total = 150;
    } else if(base === 'carne') {
        total = 200;
    } else { 
        total = 100;
    }

    if(pan === 'blanco') {
        total += 50;
    } else if(pan === 'negro') {
        total += 60;
    } else {
        total += 75;
    }

    let opciones = [[queso, 20], [tomate, 15], [lechuga, 10], [cebolla, 15], [mayonesa, 5], [mostaza, 5]];

    for(let i = 0; i < opciones.length; i++) {
        if(opciones[i][0]) {
            total += opciones[i][1];    
        }
    }

    console.log(total)
    return total;
}

console.log(sandwiches('carne', 's/gluten', true, false, false, true, true, true));

function numeroSecreto(numero) {
    let numeroAdivinar = Math.floor( Math.random() * 10 );
    console.log(numeroAdivinar);
    if(numero === numeroAdivinar) return 'Felicidades! Acertaste.'
    return `Mas suerte la proxima, numero ingresado: ${numero} numero secreto: ${numeroAdivinar}`
}

console.log(numeroSecreto(2));
console.log(numeroSecreto(6));

// La funcion retorna un booleano para saber si abrir o no el paracaidas
function abrirParacaidas(velocidad, altura) {
    let velocidadSegura = velocidad < 1000;
    let alturaSegura = 2000 <= altura && altura < 3000;

    return velocidadSegura && alturaSegura; 
}
console.log(abrirParacaidas( 1500, 3500 ));
console.log(abrirParacaidas( 900, 2500 ));

function traductorCondicional(palabra) {
    switch (palabra) {
        case 'casa':
            return 'house'
        case 'perro':
            return 'dog'
        case 'árbol':
            return 'tree'
        case 'genio':
            return 'genious'
        default:
            return 'La palabra ingresada es incorrecta'
    }
}
console.log(traductorCondicional('casa'))
console.log(traductorCondicional('perro'))
console.log(traductorCondicional('compu'))

function calificarPelicula(calificacion) {
    switch (calificacion) {
        case 'Muy Mala':
            return 'Calificaste la película como Muy Mala. Lo lamentamos mucho.'
        case 'Mala':
            return 'Calificaste la película como Mala. Lo lamentamos mucho.'
        case 'Mediocre':
            return 'Calificaste la película como Mediocre. Lo lamentamos mucho.'
        case 'Buena':
            return 'Calificaste la película como Buena. Nos alegra mucho.'
        case 'Muy Buena':
            return 'Calificaste la película como Muy Buena. Nos alegra mucho.'
        default:
            return 'Ingresaste un valor inválido'
    }
}

console.log(calificarPelicula('Muy Mala'))
console.log(calificarPelicula('Muy Buena'))
console.log(calificarPelicula('Regular'))