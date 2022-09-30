"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMutant = void 0;
var matrixValidations_1 = require("../lib/matrixValidations");
var IsMutant = /** @class */ (function () {
    function IsMutant() {
        this.expresionMatch = new RegExp(/([ATCG])\1{3,}/g);
    }
    IsMutant.prototype.isMutant = function (dna) {
        if (!matrixValidations_1.matrixValidations.isSquare(dna))
            return false;
        if (!matrixValidations_1.matrixValidations.nIsGreaterOrEqualThanFour(dna))
            return false;
        if (!matrixValidations_1.matrixValidations.isOnlyATCG(dna))
            return false;
        var count = 0;
        for (var i = 0; i < dna.length; i++) {
            var row = dna[i];
            var verticalString = '';
            count += this.checkHorizontal(row);
            for (var j = 0; j < dna.length; j++) {
                verticalString += dna[j][i];
                count += this.checkDiagonal(dna, i, j);
                if (count > 1)
                    return true;
            }
            count += this.checkVertical(verticalString);
            if (count > 1)
                return true;
        }
        console.log('cpunt', count);
        return false;
    };
    IsMutant.prototype.checkMatches = function (input) {
        var _a;
        return ((_a = (input.match(this.expresionMatch))) === null || _a === void 0 ? void 0 : _a.length) || 0;
    };
    IsMutant.prototype.checkHorizontal = function (row) {
        return this.checkMatches(row);
    };
    IsMutant.prototype.checkVertical = function (row) {
        return this.checkMatches(row);
    };
    IsMutant.prototype.checkDiagonal = function (dna, i, j) {
        var count = 0;
        var diagonalString = '';
        var diagonalString2 = '';
        // '\' diagonal
        for (var x_1 = i, y_1 = j; x_1 < dna.length && y_1 < dna.length; x_1++, y_1++) {
            diagonalString += dna[x_1][y_1];
        }
        //'/' diagonal
        var x = j;
        var y = i;
        do {
            diagonalString2 += dna[x][y];
            if (y == j)
                break;
            x--;
            y++;
        } while (x >= 0 && y < dna.length);
        count += this.checkMatches(diagonalString);
        count += this.checkMatches(diagonalString2);
        return count;
    };
    return IsMutant;
}());
exports.isMutant = new IsMutant();
