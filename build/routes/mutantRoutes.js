"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var mutantController_1 = require("../controllers/mutantController");
var MutantRoutes = /** @class */ (function () {
    function MutantRoutes() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    MutantRoutes.prototype.config = function () {
        this.router.post('/', mutantController_1.mutantController.isMutant);
        this.router.get('/stats', mutantController_1.mutantController.statistics);
        this.router.get('/api', mutantController_1.mutantController.index);
    };
    return MutantRoutes;
}());
var mutantRoutes = new MutantRoutes();
exports.default = mutantRoutes.router;
