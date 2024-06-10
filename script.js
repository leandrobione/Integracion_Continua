import { sumar_uno, restar_uno } from "./funciones.js";

document.addEventListener('DOMContentLoaded', () => {
    const countElement = document.getElementById('count');
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');

    let count = 0;

    incrementButton.addEventListener('click', () => {
        count= sumar_uno(count);
        countElement.textContent = count;
    });

    decrementButton.addEventListener('click', () => {
        count= restar_uno(count);
        countElement.textContent = count;
    });
});