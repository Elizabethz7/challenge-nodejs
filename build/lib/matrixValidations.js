"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matrixValidations = void 0;
var MatrixValidations = /** @class */ (function () {
    function MatrixValidations() {
    }
    MatrixValidations.prototype.isSquare = function (input) {
        return input.every(function (row) { return row.length == input.length; });
    };
    MatrixValidations.prototype.nIsGreaterOrEqualThanFour = function (input) {
        return input.length >= 4;
    };
    MatrixValidations.prototype.isOnlyATCG = function (input) {
        return input.every(function (row) { return row.match(/^[ATCG]+$/); });
    };
    MatrixValidations.prototype.arrayToString = function (input) {
        return input.join('');
    };
    return MatrixValidations;
}());
exports.matrixValidations = new MatrixValidations();
