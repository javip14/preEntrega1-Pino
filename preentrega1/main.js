// let respuesta = prompt('Hiciste el pago completo de la liga?');

// if (respuesta === "si") {
//     alert("Felicitaciones! ya te encuentras inscrito!!");
// }

// else {
//     alert("Debes hacer el pago de la totalidad para estar 100% inscrito");
// }





// let nombre = prompt("Cual es tu nombre?");
// let saludo = "Hola, ";
// alert(saludo + nombre);


// const VALOR = 450000
// let pagado = Number(prompt("Cuanto pagaste de la inscripción de la liga?"));
// let diferenciaPago = Number(VALOR - pagado);

// if (diferenciaPago === "0") {
//     alert("Felicitaciones! ya te encuentras inscrito!!");
// }

// else {
//     let falta = "Recuerda enviar el comprobante a javier@lfproducciones.cl del pago de la diferencia que es $";
//     alert(falta + diferenciaPago);
// }



let deuda = Number(prompt("Cual es el valor de la liga?"));

let cuota1 = Number(prompt("Cuanto pagaste en la primera cuota?"));
let cuota2 = Number(prompt("Cuanto pagaste en la segunda cuota?"));
let cuota3 = Number(prompt("Cuanto pagaste en la tercera cuota?"));

function pagarDeuda(cuota1, cuota2, cuota3) {
    let totalPagado = cuota1 + cuota2 + cuota3;

    if (totalPagado > deuda) {
        alert('¡Has excedido el valor de la liga en alguna cuota!');
    } else {
        while (deuda > 0) {
            deuda = deuda - totalPagado;
            break;
        }
        alert('La deuda que queda es: $' + deuda + '\nEl valor total pagado es: $' + totalPagado);
    }
}

pagarDeuda(cuota1, cuota2, cuota3);