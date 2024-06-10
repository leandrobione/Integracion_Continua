import { sumar, restar } from './funciones.js';

function actualizarDisplay(nuevoValor) {
    document.getElementById('count').innerText = nuevoValor;
}

function sumarUno() {
    let valorActual = parseInt(document.getElementById('count').innerText);
    let nuevoValor = sumar(valorActual);
    actualizarDisplay(nuevoValor);
}

function restarUno() {
    let valorActual = parseInt(document.getElementById('count').innerText);
    let nuevoValor = restar(valorActual);
    actualizarDisplay(nuevoValor);
}

window.sumar = sumarUno;
window.restar = restarUno;

document.addEventListener('DOMContentLoaded', () => {
    actualizarDisplay(0);
});