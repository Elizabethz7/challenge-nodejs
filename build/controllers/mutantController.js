"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutantController = void 0;
var MutantController = /** @class */ (function () {
    function MutantController() {
    }
    MutantController.prototype.index = function (req, res) {
        res.send('API running');
    };
    return MutantController;
}());
exports.mutantController = new MutantController();
