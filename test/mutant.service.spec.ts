/* eslint-disable no-undef */
import { isMutant } from '../src/lib/isMutant';
import { matrixValidations } from '../src/lib/matrixValidations';

describe('Validaciones para la función isMutant', () => {
    describe('Probando la validación que es una matriz NxN', () => {

        test('La entrada es de una matriz no cuadrada', () => {

            const matrix = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCA","TCACG"];
            const result = matrixValidations.isSquare(matrix);
            expect(result).toBeFalsy();
        });
    });

    describe('Comprobación si N de matriz es mayor que 3', () => {

        test('La entrada es una matriz de 3x3, debe retornar falso', () => {

            const matrix = ["ATG","CAG","TTA"];
            const result = matrixValidations.nIsGreaterOrEqualThanFour(matrix);
            expect(result).toBeFalsy();

        });
        
    });

    describe('Comprobación de si la entrada solo tiene las letras permitidas', () => {

        test('La entrada solo tiene letras permitidas', () => {

            const matrix = ["ATG","CAG","TTA"];
            const result = matrixValidations.isOnlyATCG(matrix);
            expect(result).toBeTruthy();

        });

        test('La entrada contiene caracteres no permitidos', () => {

            const matrix = ["ATGQ","7CAG","TTA"];
            const result = matrixValidations.isOnlyATCG(matrix);
            expect(result).toBe(false);

        });
        
    });

    describe('Comprobación de función que convierte en dna en una cadena', () => {

        test('La salida debe ser -> ATGCAGTTA', () => {
            const matrix = ["ATG","CAG","TTA"];
            const expectRes = "ATGCAGTTA";
            const result = matrixValidations.arrayToString(matrix);
            expect(result).toEqual(expectRes);
        });
        
    });
});

describe('Función para verificar si es mutante -> isMutant', () => {
    let dnaMutant = ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"];
    let dnaHuman = ["ATGCGA","CAGTGC","TTATTT","AGACGG","GCGCA","TCATG"];

    describe('Probando la expresión regular que retorna el número de matches', () => {
        let matches = 'AAAAATAAAA';
        let noMatches = 'AATAAGG';
        
        test(`La entrada ${matches} debe retornar 2 matches`, () => {
            const result = isMutant.checkMatches(matches);
            expect(result).toEqual(2);
        });

        test(`La entrada ${noMatches} debe retornar 0 matches`, () => {
            const result = isMutant.checkMatches(noMatches);
            expect(result).toEqual(0);
        });
    });
    describe('Probando la validación de entradas de distintas matrices', () => {

        test('La entrada es un no mutante', () => {
            const result = isMutant.isMutant(dnaHuman);
            expect(result).toBeFalsy();
        });

        test('La entrada es un mutante', () => {
            const result = isMutant.isMutant(dnaMutant);
            expect(result).toBeTruthy();
        });
    });
});