import { strictEqual } from 'assert';
import sum from '../funciones.js';
import suma from '../funciones.js';

describe('Función sumar()', () => {
    it('debería devolver la suma de dos números', () => {
        strictEqual(suma(2, 3),5);
        strictEqual(suma(0, 0),0);
        strictEqual(suma(-1, 1),0);
    });

    it('debería devolver NaN si se le pasa un valor no numérico', () => {
        strictEqual(suma('a', 5), 'Por favor, ingrese dos números válidos.');
        strictEqual(suma(2, 'b'), 'Por favor, ingrese dos números válidos.');
        strictEqual(suma('foo', 'bar'), 'Por favor, ingrese dos números válidos.');
    });
});